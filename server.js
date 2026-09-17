"use strict";
const http=require("http");
const fs=require("fs");
const path=require("path");
const {WebSocketServer}=require("ws");
const QRCode=require("qrcode");

const ROOT=__dirname;
const HTTP_PORT=Number(process.env.PORT||8080);
const WS_PORT=Number(process.env.WS_PORT||8787);
const MIME={".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".css":"text/css; charset=utf-8",".json":"application/json; charset=utf-8",".webmanifest":"application/manifest+json; charset=utf-8",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".svg":"image/svg+xml"};
let logoRaster=null;
try{logoRaster=JSON.parse(fs.readFileSync(path.join(ROOT,"assets","thipkasorn-logo-epos.json"),"utf8"))}catch(e){console.warn("Printer logo unavailable:",e.message)}

function sendJson(res,code,obj){
  res.writeHead(code,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"});
  res.end(JSON.stringify(obj));
}
function readJson(req,limit=1024*1024){
  return new Promise((resolve,reject)=>{
    let s="";
    req.on("data",d=>{s+=d;if(s.length>limit){reject(new Error("request too large"));req.destroy()}});
    req.on("end",()=>{try{resolve(s?JSON.parse(s):{})}catch(e){reject(new Error("invalid json"))}});
    req.on("error",reject);
  });
}
function xmlEscape(v){
  return String(v??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");
}
function baht(v){
  const n=Number(v||0);
  return "฿"+n.toLocaleString("th-TH",{minimumFractionDigits:0,maximumFractionDigits:2});
}
function padQueue(n){return String(n??0).padStart(3,"0")}
function rowText(name,qty,price,total){
  // ePOS text is fixed-width. Keep product line readable on 80mm.
  const left=String(name||"").slice(0,30);
  return `${left}\n  ${qty} x ${baht(price)}                         ${baht(total)}\n`;
}
function eposEnvelope(inner){
  return `<?xml version="1.0" encoding="UTF-8"?>`+
    `<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">`+
    `<s:Body><epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print">${inner}</epos-print></s:Body></s:Envelope>`;
}
function receiptXml(order){
  const d=new Date(order.time||Date.now());
  const when=d.toLocaleString("th-TH",{timeZone:"Asia/Bangkok"});
  const logo=logoRaster
    ? `<image width="${logoRaster.width}" height="${logoRaster.height}" color="color_1" mode="mono">${logoRaster.data}</image>`
    : "";
  let items="";
  for(const i of (order.items||[])){
    items += `<text align="left">${xmlEscape(rowText(i.name,Number(i.qty||0),Number(i.price||0),Number(i.qty||0)*Number(i.price||0)))}</text>`;
  }
  const discount=Number(order.discount||0)>0?`<text>${xmlEscape("ส่วนลด: -"+baht(order.discount)+"\n")}</text>`:"";
  const cash=order.payment==="เงินสด"
    ? `<text>${xmlEscape("ลูกค้าจ่าย: "+baht(order.cashReceived)+"\nเงินทอน: "+baht(order.change)+"\n")}</text>`
    : "";
  const note=String(order.receiptNote||"").trim()?`<text>${xmlEscape("\nหมายเหตุ: "+order.receiptNote+"\n")}</text>`:"";
  return eposEnvelope(
    `<text align="center"/>${logo}`+
    `<text align="center">${xmlEscape("บ้านดุง อุดรธานี 41190\nโทรศัพท์ 0897109954\n")}</text>`+
    `<text>${xmlEscape("------------------------------------------\n")}</text>`+
    `<text align="left">${xmlEscape("ออเดอร์ #"+padQueue(order.number)+"\nวันที่ "+when+"\nพนักงาน "+(order.staffName||"-")+"\nชำระ "+(order.payment||"-")+"\n")}</text>`+
    `<text>${xmlEscape("------------------------------------------\n")}</text>`+
    items+
    `<text>${xmlEscape("------------------------------------------\n")}</text>`+
    discount+cash+
    `<text width="2" height="2" align="center">${xmlEscape("รวม "+baht(order.total)+"\n")}</text>`+
    `<text width="1" height="1" align="center">${xmlEscape("ชำระเงินแล้ว\n")}</text>`+
    note+
    `<text align="center">${xmlEscape("\nขอบคุณที่อุดหนุนค่ะ\n\n")}</text>`+
    `<feed line="2"/><cut type="feed"/>`
  );
}

function dayCloseXmlV72(d){
  const logo=logoRaster
    ? `<image width="${logoRaster.width}" height="${logoRaster.height}" color="color_1" mode="mono">${logoRaster.data}</image>`
    : "";
  const line=(label,value,big=false)=>
    `<text align="left"${big?' width="2" height="2"':''}>${xmlEscape(label+"\n")}</text>`+
    `<text align="right"${big?' width="2" height="2"':''}>${xmlEscape(String(value)+"\n")}</text>`;
  return eposEnvelope(
    `<text align="center"/>${logo}`+
    `<text align="center" width="2" height="2">${xmlEscape("สรุปปิดยอด\n")}</text>`+
    `<text align="center">${xmlEscape((d.shopName||"ร้านทิพย์เกษรเมี่ยงปลาเผา")+"\n")}</text>`+
    `<text align="center">${xmlEscape((d.date||"-")+"  "+(d.time||"")+"\n")}</text>`+
    `<text>${xmlEscape("==========================================\n")}</text>`+
    line("ยอดขายรวม",baht(d.sales),true)+
    `<text>${xmlEscape("------------------------------------------\n")}</text>`+
    line("เงินสด",baht(d.cash))+
    line("QR",baht(d.qr))+
    line("ออเดอร์สำเร็จ",Number(d.paidOrders||0)+" ออเดอร์")+
    line("ออเดอร์ยกเลิก",Number(d.cancelledOrders||0)+" ออเดอร์")+
    line("ส่วนลดรวม",baht(d.discounts))+
    line("ต้นทุนโดยประมาณ",baht(d.cost))+
    `<text>${xmlEscape("------------------------------------------\n")}</text>`+
    line("กำไรขั้นต้น",baht(d.profit),true)+
    `<text>${xmlEscape("==========================================\n")}</text>`+
    `<text align="left">${xmlEscape("พิมพ์โดย "+(d.staffName||"-")+"\n")}</text>`+
    `<text align="center">${xmlEscape("ร้านทิพย์เกษรเมี่ยงปลาเผา\n\n")}</text>`+
    `<feed line="2"/><cut type="feed"/>`
  );
}

function preorderXml(o){
  const logo=logoRaster
    ? `<image width="${logoRaster.width}" height="${logoRaster.height}" color="color_1" mode="mono">${logoRaster.data}</image>`
    : "";
  let dateText=o.date||"-";
  try{
    const d=new Date(String(o.date)+"T12:00:00");
    if(!Number.isNaN(d.getTime()))dateText=d.toLocaleDateString("th-TH",{timeZone:"Asia/Bangkok",weekday:"long",day:"numeric",month:"long",year:"numeric"});
  }catch(e){}
  let items="";
  let totalQty=0;
  for(const i of (o.items||[])){
    const qty=Number(i.qty||0),price=Number(i.price||0);
    totalQty+=qty;
    items +=
      `<text align="left" width="1" height="1">${xmlEscape(String(i.name||"-")+"\n")}</text>`+
      `<text align="left" width="2" height="2">${xmlEscape(baht(price)+"  × "+qty+" ชุด\n")}</text>`+
      `<text align="right" width="1" height="1">${xmlEscape("รวม "+baht(price*qty)+"\n")}</text>`+
      `<text>${xmlEscape("------------------------------------------\n")}</text>`;
  }
  const phone=String(o.phone||"").trim()?`\nโทร ${o.phone}`:"";
  const note=String(o.note||"").trim()
    ? `<text align="left">${xmlEscape("\nหมายเหตุ: "+o.note+"\n")}</text>`:"";
  return eposEnvelope(
    `<text align="center"/>${logo}`+
    `<text align="center" width="2" height="2">${xmlEscape("ออเดอร์สั่งล่วงหน้า\n")}</text>`+
    `<text align="center">${xmlEscape("สำหรับเตรียมของหน้าร้าน\n")}</text>`+
    `<text>${xmlEscape("==========================================\n")}</text>`+
    `<text align="left" width="1" height="1">${xmlEscape("ลูกค้า: "+(o.customer||"-")+phone+"\n")}</text>`+
    `<text align="center" width="2" height="2">${xmlEscape("รับ "+dateText+"\nเวลา "+(o.pickup||"-")+" น.\n")}</text>`+
    `<text>${xmlEscape("==========================================\n")}</text>`+
    items+
    `<text align="center">${xmlEscape("จำนวนรวม "+totalQty+" ชุด\n")}</text>`+
    `<text align="center" width="3" height="3">${xmlEscape(baht(o.total)+"\n")}</text>`+
    `<text align="center" width="1" height="1">${xmlEscape("ยอดออเดอร์ล่วงหน้า\n")}</text>`+
    note+
    `<text align="left">${xmlEscape("\nผู้บันทึก: "+(o.staffName||"-")+"\n")}</text>`+
    `<text align="center">${xmlEscape("\n*** เตรียมไว้สำหรับวัน/เวลารับด้านบน ***\n\n")}</text>`+
    `<feed line="2"/><cut type="feed"/>`
  );
}

function queueXml(order){
  return eposEnvelope(
    `<text align="center">${xmlEscape("ทิพย์เกษรเมี่ยงปลาเผา\nคิวของคุณ\n")}</text>`+
    `<text width="4" height="4" align="center">${xmlEscape("#"+padQueue(order.number)+"\n")}</text>`+
    `<text width="1" height="1" align="center">${xmlEscape("กรุณารอเรียกคิว • ขอบคุณค่ะ\n\n")}</text>`+
    `<feed line="2"/><cut type="feed"/>`
  );
}
function testXml(){
  return eposEnvelope(
    `<text align="center" width="2" height="2">${xmlEscape("TEST PRINT\n")}</text>`+
    `<text align="center">${xmlEscape("ทิพย์เกษรเมี่ยงปลาเผา\nเชื่อมต่อ Epson ผ่าน Wi‑Fi สำเร็จ ✓\n\n")}</text>`+
    `<feed line="2"/><cut type="feed"/>`
  );
}
function validatePrinter(printer){
  const ip=String(printer?.ip||"").trim();
  if(!/^(\d{1,3}\.){3}\d{1,3}$/.test(ip))throw new Error("invalid printer IP");
  for(const part of ip.split(".")){if(Number(part)>255)throw new Error("invalid printer IP")}
  const deviceId=String(printer?.deviceId||"local_printer").trim()||"local_printer";
  return {ip,deviceId};
}
function postEpos(printer,xml){
  const {ip,deviceId}=validatePrinter(printer);
  const body=Buffer.from(xml,"utf8");
  // Raspberry Pi performs this LAN HTTP request, avoiding iPad browser dialogs/CORS.
  const options={
    hostname:ip,port:80,method:"POST",
    path:"/cgi-bin/epos/service.cgi?devid="+encodeURIComponent(deviceId)+"&timeout=10000",
    headers:{"Content-Type":"text/xml; charset=utf-8","Content-Length":body.length},
    timeout:15000
  };
  return new Promise((resolve,reject)=>{
    const r=http.request(options,resp=>{
      let data="";
      resp.on("data",d=>data+=d);
      resp.on("end",()=>{
        const success=resp.statusCode>=200&&resp.statusCode<300&&!/success\s*=\s*["']false/i.test(data);
        if(success)resolve({status:resp.statusCode,response:data.slice(0,800)});
        else reject(new Error("Epson ePOS error HTTP "+resp.statusCode+" "+data.slice(0,220)));
      });
    });
    r.on("timeout",()=>r.destroy(new Error("printer timeout")));
    r.on("error",reject);
    r.end(body);
  });
}

const server=http.createServer(async (req,res)=>{
  let requestUrl;
  try{requestUrl=new URL(req.url,"http://localhost")}catch(e){requestUrl=new URL("/","http://localhost")}

  if(requestUrl.pathname==="/api/qr"){
    const text=requestUrl.searchParams.get("text")||"";
    const size=Math.max(160,Math.min(600,Number(requestUrl.searchParams.get("size")||360)));
    if(!text)return sendJson(res,400,{error:"missing text"});
    try{
      const dataUrl=await QRCode.toDataURL(text,{width:size,margin:1,errorCorrectionLevel:"M"});
      return sendJson(res,200,{dataUrl});
    }catch(e){return sendJson(res,500,{error:"qr failed"})}
  }

  if(req.method==="POST" && ["/api/print/receipt","/api/print/queue","/api/print/preorder","/api/print/day-close","/api/print/test"].includes(requestUrl.pathname)){
    try{
      const b=await readJson(req);
      let xml;
      if(requestUrl.pathname==="/api/print/test")xml=testXml();
      else{
        if(requestUrl.pathname.endsWith("/preorder")){
          if(!b.preorder)throw new Error("missing preorder");
          xml=preorderXml(b.preorder);
        }else if(requestUrl.pathname.endsWith("/day-close")){
          if(!b.close)throw new Error("missing close summary");
          xml=dayCloseXmlV72(b.close);
        }else{
          if(!b.order)throw new Error("missing order");
          xml=requestUrl.pathname.endsWith("/receipt")?receiptXml(b.order):queueXml(b.order);
        }
      }
      const result=await postEpos(b.printer,xml);
      return sendJson(res,200,{ok:true,status:result.status});
    }catch(e){
      console.error("PRINT ERROR",requestUrl.pathname,e.message);
      return sendJson(res,502,{ok:false,error:e.message});
    }
  }

  let pathname;
  try{pathname=decodeURIComponent(requestUrl.pathname)}catch(e){pathname="/"}
  if(pathname==="/")pathname="/index.html";
  const target=path.normalize(path.join(ROOT,pathname));
  if(!target.startsWith(ROOT)){res.writeHead(403);res.end("Forbidden");return}
  fs.stat(target,(err,stat)=>{
    if(err||!stat.isFile()){res.writeHead(404,{"Content-Type":"text/plain; charset=utf-8"});res.end("Not found");return}
    res.writeHead(200,{"Content-Type":MIME[path.extname(target).toLowerCase()]||"application/octet-stream","Cache-Control":"no-cache"});
    fs.createReadStream(target).pipe(res);
  });
});
server.listen(HTTP_PORT,"0.0.0.0",()=>console.log(`Fish POS V72: http://fish-pos.local:${HTTP_PORT}`));

let lastDisplayState=null;
const wss=new WebSocketServer({port:WS_PORT,host:"0.0.0.0"});
wss.on("connection",socket=>{
  if(lastDisplayState&&socket.readyState===socket.OPEN)socket.send(lastDisplayState);
  socket.on("message",raw=>{
    const text=raw.toString();
    try{
      const msg=JSON.parse(text);
      if(msg&&msg.type==="display:update")lastDisplayState=text;
    }catch(e){}
    for(const client of wss.clients){if(client!==socket&&client.readyState===client.OPEN)client.send(text)}
  });
});
console.log(`Customer Display WebSocket: ws://fish-pos.local:${WS_PORT}`);
