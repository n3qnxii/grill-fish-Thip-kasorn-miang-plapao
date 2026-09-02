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

const server=http.createServer(async (req,res)=>{
  let requestUrl;
  try{requestUrl=new URL(req.url,"http://localhost")}catch(e){requestUrl=new URL("/","http://localhost")}
  if(requestUrl.pathname==="/api/qr"){
    const text=requestUrl.searchParams.get("text")||"";
    const size=Math.max(160,Math.min(600,Number(requestUrl.searchParams.get("size")||360)));
    if(!text){res.writeHead(400,{"Content-Type":"application/json"});res.end(JSON.stringify({error:"missing text"}));return}
    try{
      const dataUrl=await QRCode.toDataURL(text,{width:size,margin:1,errorCorrectionLevel:"M"});
      res.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"});
      res.end(JSON.stringify({dataUrl}));
    }catch(e){res.writeHead(500,{"Content-Type":"application/json"});res.end(JSON.stringify({error:"qr failed"}))}
    return;
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
server.listen(HTTP_PORT,"0.0.0.0",()=>console.log(`Fish POS: http://fish-pos.local:${HTTP_PORT}`));

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
