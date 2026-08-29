const STORAGE_KEY="fishPOS_figma_v3";
const STAFF_LIST=[
  {id:1,name:"คุณทองสุข",pin:"1234",role:"owner"},
  {id:2,name:"คุณเกษร",pin:"1111",role:"staff"},
  {id:3,name:"น้องนิดหน่อย",pin:"2222",role:"staff"},
  {id:4,name:"น้องบีม",pin:"3333",role:"staff"},
  {id:5,name:"น้องไนท์",pin:"4444",role:"staff"},
  {id:6,name:"STAFF",pin:"5555",role:"staff"}
];
const demoState={settings:{shopName:"ร้านทิพย์เกษรเมี่ยงปลาเผา",nextOrder:1,qrImage:"",promptPayId:"",dailyOrderCounters:{},customCategories:[],categoryOrder:["ปลาชุดใหญ่","ปลาชุดเล็ก","ปลาตัว","ของเพิ่ม","เครื่องดื่ม"]},staff:STAFF_LIST,products:[
  {id:1,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:160,cost:110,stock:50,unit:"ตัว",active:true},
  {id:2,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:170,cost:110,stock:50,unit:"ตัว",active:true},
  {id:3,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:180,cost:110,stock:50,unit:"ตัว",active:true},
  {id:4,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:190,cost:110,stock:50,unit:"ตัว",active:true},
  {id:5,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:200,cost:110,stock:50,unit:"ตัว",active:true},
  {id:6,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:220,cost:110,stock:50,unit:"ตัว",active:true},
  {id:7,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:230,cost:110,stock:50,unit:"ตัว",active:true},
  {id:8,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:240,cost:110,stock:50,unit:"ตัว",active:true},
  {id:9,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:250,cost:110,stock:50,unit:"ตัว",active:true},
  {id:10,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:260,cost:110,stock:50,unit:"ตัว",active:true},
  {id:11,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:270,cost:110,stock:50,unit:"ตัว",active:true},
  {id:12,name:"ปลาเผาเป็นชุด",category:"ปลาชุดใหญ่",price:280,cost:110,stock:50,unit:"ตัว",active:true},
  {id:13,name:"ปลาเผาเป็นชุด",category:"ปลาชุดเล็ก",price:80,cost:80,stock:40,unit:"ตัว",active:true},
  {id:14,name:"ปลาเผาเป็นชุด",category:"ปลาชุดเล็ก",price:90,cost:80,stock:40,unit:"ตัว",active:true},
  {id:15,name:"ปลาเผาเป็นชุด",category:"ปลาชุดเล็ก",price:100,cost:80,stock:40,unit:"ตัว",active:true},
  {id:16,name:"ปลาเผาเป็นชุด",category:"ปลาชุดเล็ก",price:120,cost:80,stock:40,unit:"ตัว",active:true},
  {id:17,name:"ปลาเผาเป็นชุด",category:"ปลาชุดเล็ก",price:130,cost:80,stock:40,unit:"ตัว",active:true},
  {id:18,name:"ปลาเผาเป็นชุด",category:"ปลาชุดเล็ก",price:140,cost:80,stock:40,unit:"ตัว",active:true},
  {id:19,name:"ปลาเผาเป็นชุด",category:"ปลาชุดเล็ก",price:150,cost:80,stock:40,unit:"ตัว",active:true},
  {id:20,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:70,cost:70,stock:40,unit:"ตัว",active:true},
  {id:21,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:80,cost:70,stock:40,unit:"ตัว",active:true},
  {id:22,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:90,cost:70,stock:40,unit:"ตัว",active:true},
  {id:23,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:100,cost:70,stock:40,unit:"ตัว",active:true},
  {id:24,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:110,cost:70,stock:40,unit:"ตัว",active:true},
  {id:25,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:120,cost:70,stock:40,unit:"ตัว",active:true},
  {id:26,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:130,cost:70,stock:40,unit:"ตัว",active:true},
  {id:27,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:140,cost:70,stock:40,unit:"ตัว",active:true},
  {id:28,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:150,cost:70,stock:40,unit:"ตัว",active:true},
  {id:29,name:"ปลาเผาเป็นตัว",category:"ปลาตัว",price:160,cost:70,stock:40,unit:"ตัว",active:true},
  {id:30,name:"ขนมจีนถ้วย",category:"ของเพิ่ม",price:10,cost:8,stock:100,unit:"ถ้วย",active:true},
  {id:31,name:"ขนมจีนถ้วย",category:"ของเพิ่ม",price:12,cost:8,stock:100,unit:"ถ้วย",active:true},
  {id:38,name:"ขนมจีนถุง",category:"ของเพิ่ม",price:5,cost:3,stock:100,unit:"ถุง",active:true},
  {id:32,name:"ชุดผัก",category:"ของเพิ่ม",price:60,cost:7,stock:100,unit:"ชุด",active:true},
  {id:33,name:"น้ำจิ้มซีฟู้ด",category:"ของเพิ่ม",price:10,cost:3,stock:100,unit:"ถุง",active:true},
  {id:34,name:"น้ำจิ้มหวาน",category:"ของเพิ่ม",price:10,cost:3,stock:100,unit:"ถุง",active:true},
  {id:35,name:"น้ำจิ้มปั่น",category:"ของเพิ่ม",price:10,cost:3,stock:100,unit:"ถุง",active:true},
  {id:36,name:"น้ำดื่ม",category:"เครื่องดื่ม",price:10,cost:5,stock:100,unit:"ขวด",active:true},
  {id:37,name:"ผัก",category:"ของเพิ่ม",price:20,cost:7,stock:100,unit:"ถุง",active:true}
],orders:[],preorders:[],heldOrders:[]};
const $=id=>document.getElementById(id), clone=o=>JSON.parse(JSON.stringify(o));
const money=n=>"฿"+Number(n||0).toLocaleString("th-TH",{maximumFractionDigits:2});

const POS_UI_PATCH_ID="fish-pos-touch-sound-patch";

function ensurePosUiPatch(){
  if(document.getElementById(POS_UI_PATCH_ID))return;
  const style=document.createElement("style");
  style.id=POS_UI_PATCH_ID;
  style.textContent=`
    /* V7 touch/payment usability patch */
    .product .price{
      font-size:24px!important;
      line-height:1.05!important;
      font-weight:900!important;
      color:#d95f0b!important;
      margin-top:12px!important;
    }
    .product strong{font-size:17px!important}
    .product{transition:transform .09s ease,box-shadow .12s ease,background .12s ease,border-color .12s ease}
    .product.pos-tapped{
      transform:scale(.965);
      background:#fff0df!important;
      border-color:#e96813!important;
      box-shadow:0 0 0 3px rgba(233,104,19,.16)!important;
    }
    .qty b,.pre-controls strong{font-size:22px!important;min-width:30px;text-align:center}
    .qty button,.pre-controls button{transition:transform .08s ease,background .1s ease,color .1s ease}
    .qty button.pos-tapped,.pre-controls button.pos-tapped{
      transform:scale(.90);
      background:#e96512!important;
      color:#fff!important;
    }
    #total,#modalTotal,#successTotal{font-size:30px!important;font-weight:900!important}
    #cashReceived{
      font-size:30px!important;
      font-weight:900!important;
      text-align:center!important;
      min-height:58px!important;
    }
    #change{font-size:22px!important;font-weight:900!important}
    #cashPaymentStatus{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      padding:12px 14px;
      margin-top:9px;
      border-radius:12px;
      font-weight:800;
      font-size:16px;
    }
    #cashPaymentStatus strong{font-size:22px}
    #cashPaymentStatus.short{
      background:#fff0ed;
      color:#b42318;
      border:1px solid #fecdca;
    }
    #cashPaymentStatus.enough{
      background:#ecfdf3;
      color:#067647;
      border:1px solid #abefc6;
    }
    #cashPaymentStatus.zero{
      background:#f7f3ed;
      color:#8a735e;
      border:1px solid #eadfce;
    }

    #cashReceived{
      caret-color:transparent!important;
      user-select:none;
      -webkit-user-select:none;
    }
    .payment-keypad{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:8px;
      margin-top:10px;
    }
    .payment-keypad button{
      min-height:52px;
      border:1px solid #eadfce;
      background:#fff;
      border-radius:12px;
      font-size:20px;
      font-weight:800;
      color:#2a2118;
      box-shadow:0 1px 2px rgba(70,45,20,.04);
      transition:transform .08s ease,background .1s ease,color .1s ease,border-color .1s ease;
    }
    .payment-keypad button:active,
    .payment-keypad button.pos-tapped{
      transform:scale(.96);
      background:#fff0df;
      color:#d95f0b;
      border-color:#e96813;
    }
    .payment-keypad .key-action{
      background:#f5eee5;
      color:#7c6650;
    }
    .payment-keypad .key-exact{
      background:#e96512;
      border-color:#e96512;
      color:#fff;
    }

    .payment-methods button,.cash-quick button,#confirmPay{
      transition:transform .08s ease,filter .1s ease;
    }
    .payment-methods button:active,.cash-quick button:active,#confirmPay:active{
      transform:scale(.98);
      filter:brightness(.96);
    }
  `;
  document.head.appendChild(style);
}

let posAudioContext=null;
function getPosAudioContext(){
  try{
    if(!posAudioContext){
      const Ctx=window.AudioContext||window.webkitAudioContext;
      if(Ctx)posAudioContext=new Ctx();
    }
    if(posAudioContext?.state==="suspended")posAudioContext.resume();
    return posAudioContext;
  }catch(e){return null}
}
function tone(freq=620,duration=.055,volume=.035,delay=0){
  const ctx=getPosAudioContext();if(!ctx)return;
  try{
    const osc=ctx.createOscillator(),gain=ctx.createGain();
    osc.type="sine";osc.frequency.value=freq;
    gain.gain.setValueAtTime(volume,ctx.currentTime+delay);
    gain.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+delay+duration);
    osc.connect(gain);gain.connect(ctx.destination);
    osc.start(ctx.currentTime+delay);osc.stop(ctx.currentTime+delay+duration);
  }catch(e){}
}
function playTapSound(){tone(660,.045,.025)}
function playQtySound(up=true){tone(up?760:470,.05,.028)}
function playPaymentSuccessSound(){
  tone(660,.08,.045,0);
  tone(880,.10,.045,.09);
  tone(1100,.14,.05,.19);
}
function speakThai(text){
  if(!("speechSynthesis" in window))return;
  try{
    window.speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    u.lang="th-TH";
    u.rate=.92;
    u.pitch=1;
    u.volume=1;
    const voices=window.speechSynthesis.getVoices?.()||[];
    const th=voices.find(v=>String(v.lang||"").toLowerCase().startsWith("th"));
    if(th)u.voice=th;
    setTimeout(()=>window.speechSynthesis.speak(u),260);
  }catch(e){}
}
function announcePayment(order){
  if(!order)return;
  const totalAmount=Math.round(Number(order.total||0));
  if(order.payment==="QR"){
    speakThai(`รับเงินโอน ${totalAmount} บาทค่ะ`);
    return;
  }
  const received=Math.round(Number(order.cashReceived||0));
  const change=Math.round(Number(order.change||0));
  speakThai(change>0?`รับเงินสด ${received} บาท ทอน ${change} บาทค่ะ`:`รับเงินสด ${received} บาท ชำระพอดีค่ะ`);
}
function tapFeedback(el){
  if(!el)return;
  el.classList.add("pos-tapped");
  setTimeout(()=>el.classList.remove("pos-tapped"),150);
}
function currentTapElement(){
  try{return window.event?.currentTarget||null}catch(e){return null}
}
function escapeHtml(value){
  return String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[ch]));
}

let genericNumericContext=null;
function numericDigitsOnly(value,maxDigits=8){
  return String(value??"").replace(/\D/g,"").slice(0,maxDigits);
}
function openNumericKeypad(options={}){
  const current=numericDigitsOnly(options.value??"",options.maxDigits||8);
  genericNumericContext={
    title:options.title||"กรอกตัวเลข",
    hint:options.hint||"ใช้เฉพาะตัวเลข",
    value:current,
    max:options.max??null,
    min:options.min??0,
    maxDigits:options.maxDigits||8,
    allowZero:options.allowZero!==false,
    allowLeadingZeros:options.allowLeadingZeros===true,
    returnAsString:options.returnAsString===true,
    onConfirm:typeof options.onConfirm==="function"?options.onConfirm:()=>{}
  };
  $("numericKeypadTitle").textContent=genericNumericContext.title;
  $("numericKeypadHint").textContent=genericNumericContext.hint;
  renderNumericKeypadValue();
  $("numericKeypadModal").classList.remove("hidden");
}
function renderNumericKeypadValue(){
  if(!genericNumericContext)return;
  $("numericKeypadValue").textContent=genericNumericContext.value||"0";
}
function appendNumericKey(digit){
  if(!genericNumericContext)return;
  let s=genericNumericContext.value||"";
  if(s.length>=genericNumericContext.maxDigits)return;
  if(s==="0"&&!genericNumericContext.allowLeadingZeros)s="";
  s+=String(digit);
  genericNumericContext.value=numericDigitsOnly(s,genericNumericContext.maxDigits);
  renderNumericKeypadValue();playTapSound();
}
function numericBackspace(){
  if(!genericNumericContext)return;
  genericNumericContext.value=(genericNumericContext.value||"").slice(0,-1);
  renderNumericKeypadValue();playQtySound(false);
}
function numericClear(){
  if(!genericNumericContext)return;
  genericNumericContext.value="";
  renderNumericKeypadValue();playQtySound(false);
}
function closeNumericKeypad(){
  $("numericKeypadModal").classList.add("hidden");
  genericNumericContext=null;
}
function confirmNumericKeypad(){
  if(!genericNumericContext)return;
  const ctx=genericNumericContext;
  const cb=ctx.onConfirm;
  if(ctx.returnAsString){
    const s=ctx.value||"";
    closeNumericKeypad();
    cb(s);
    return;
  }
  let n=Number(ctx.value||0);
  if(Number.isFinite(ctx.min))n=Math.max(Number(ctx.min),n);
  if(Number.isFinite(ctx.max))n=Math.min(Number(ctx.max),n);
  closeNumericKeypad();
  cb(n);
}
document.querySelectorAll("[data-num-key]").forEach(btn=>btn.onclick=()=>appendNumericKey(btn.dataset.numKey));
$("numericKeypadBack").onclick=numericBackspace;
$("numericKeypadClear").onclick=numericClear;
$("numericKeypadConfirm").onclick=confirmNumericKeypad;
$("closeNumericKeypad").onclick=closeNumericKeypad;
$("numericKeypadModal").addEventListener("click",e=>{if(e.target===$("numericKeypadModal"))closeNumericKeypad()});

function bindNumericInput(id,options={}){
  const el=$(id);if(!el)return;
  el.readOnly=true;
  el.setAttribute("inputmode","none");
  el.addEventListener("click",()=>{
    openNumericKeypad({
      title:options.title||"กรอกตัวเลข",
      hint:options.hint||"",
      value:el.value,
      max:options.max,
      min:options.min??0,
      maxDigits:options.maxDigits||8,
      allowLeadingZeros:options.allowLeadingZeros===true,
      returnAsString:options.returnAsString===true,
      onConfirm:n=>{
        el.value=String(n);
        el.dispatchEvent(new Event("input",{bubbles:true}));
        el.dispatchEvent(new Event("change",{bubbles:true}));
      }
    })
  });
}

const nowIso=()=>new Date().toISOString();

const localDateKey=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
function ensureDailyOrderCounter(){
  if(!state.settings.dailyOrderCounters||typeof state.settings.dailyOrderCounters!=="object")state.settings.dailyOrderCounters={};
  const key=localDateKey();
  if(!Number.isFinite(Number(state.settings.dailyOrderCounters[key]))||Number(state.settings.dailyOrderCounters[key])<1){
    const todays=state.orders.filter(o=>localDateKey(new Date(o.time))===key);
    const maxExisting=todays.reduce((m,o)=>Math.max(m,Number(o.number)||0),0);
    state.settings.dailyOrderCounters[key]=Math.max(todays.length+1,maxExisting+1,1);
  }
  state.settings.nextOrder=Number(state.settings.dailyOrderCounters[key])||1;
  return state.settings.nextOrder;
}
function currentDailyOrderNumber(){return String(ensureDailyOrderCounter()).padStart(3,"0")}
function advanceDailyOrderNumber(){
  const key=localDateKey();
  state.settings.dailyOrderCounters[key]=ensureDailyOrderCounter()+1;
  state.settings.nextOrder=state.settings.dailyOrderCounters[key];
}

function loadState(){try{const x=JSON.parse(localStorage.getItem(STORAGE_KEY)||"null")||clone(demoState);if(!x.settings)x.settings=clone(demoState.settings);if(typeof x.settings.qrImage!=="string")x.settings.qrImage="";if(typeof x.settings.promptPayId!=="string")x.settings.promptPayId="";
if(!x.settings.dailyOrderCounters||typeof x.settings.dailyOrderCounters!=="object")x.settings.dailyOrderCounters={};
if(!Array.isArray(x.settings.customCategories))x.settings.customCategories=[];if(!Array.isArray(x.settings.categoryOrder))x.settings.categoryOrder=[];if(!Array.isArray(x.products))x.products=clone(demoState.products);if(!Array.isArray(x.orders))x.orders=[];if(!Array.isArray(x.preorders))x.preorders=[];if(!Array.isArray(x.heldOrders))x.heldOrders=[];x.staff=clone(STAFF_LIST);return x}catch(e){return clone(demoState)}}
let state=loadState(),currentUser=null,selectedStaffId=null,cart=[],selectedMethod=null,lastOrder=null,currentCategory="ปลาชุดใหญ่",dashboardRange="today",orderStatusFilter="today",lastCashReceived=0,lastChange=0,preorderCart=[],preorderStatusFilter="all",preorderCategory="all";

let preorderPageViewV25="list";

// V24 consolidated migration
(function migrateV24Consolidated(){
  let changed=false;
  if(state.settings && state.settings.shopName!=="ร้านทิพย์เกษรเมี่ยงปลาเผา"){
    state.settings.shopName="ร้านทิพย์เกษรเมี่ยงปลาเผา";
    changed=true;
  }
  if(Array.isArray(state.preorders)){
    state.preorders.forEach(o=>{
      if(o.status==="waiting"){o.status="pending";changed=true}
      else if(!["pending","confirmed","preparing","ready","cancelled"].includes(o.status)){
        o.status=o.status==="cancelled"?"cancelled":"pending";
        changed=true;
      }
    });
  }
  if(changed)saveState();
})();

// V10.7 shop name migration for existing saved data
if(state.settings&&state.settings.shopName===("ร้านทิพย์เกษรเมี่ยงปลาเผา"+"ทิพย์เกษร")){state.settings.shopName="ร้านทิพย์เกษรเมี่ยงปลาเผา";saveState();}
function saveState(){state.staff=clone(STAFF_LIST);localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function enforceShopNameV24(){
  if(state.settings)state.settings.shopName="ร้านทิพย์เกษรเมี่ยงปลาเผา";
  if($("shopTitle"))$("shopTitle").textContent="ร้านทิพย์เกษรเมี่ยงปลาเผา";
}
enforceShopNameV24();
function migrateV104(){
  let changed=false;
  state.products.forEach(p=>{if(p.name==="ปลาเผาตัว"){p.name="ปลาเผา(เอาแต่ปลา)";changed=true}});
  if(changed)saveState();
}
migrateV104();
function migrateV114Staff(){state.staff=clone(STAFF_LIST);saveState()}
migrateV114Staff();

function migrateV120(){
  if(localStorage.getItem("fish_pos_v120_migrated")==="1"){ensureDailyOrderCounter();return}
  state.products.forEach(p=>{
    if(p.name==="ปลาเผาชุดใหญ่"||p.name==="ปลาเผาชุดเล็ก")p.name="ปลาเผาเป็นชุด";
    if(p.name==="ปลาเผา(เอาแต่ปลา)"||p.name==="ปลาเผาตัว")p.name="ปลาเผาเป็นตัว";
    if(p.category==="ปลา")p.category="ปลาตัว";
  });
  const noodleCups=state.products.filter(p=>p.name==="ขนมจีนถ้วย");
  const cup10=noodleCups.find(p=>Number(p.price)===10);
  const cup12=noodleCups.find(p=>Number(p.price)===12);
  if(!cup10){
    const base=noodleCups[0];
    if(base){base.price=10;base.unit="ถ้วย"}else state.products.push({id:Math.max(0,...state.products.map(p=>p.id))+1,name:"ขนมจีนถ้วย",category:"ของเพิ่ม",price:10,cost:8,stock:100,unit:"ถ้วย",active:true});
  }
  if(!cup12)state.products.push({id:Math.max(0,...state.products.map(p=>p.id))+1,name:"ขนมจีนถ้วย",category:"ของเพิ่ม",price:12,cost:8,stock:100,unit:"ถ้วย",active:true});
  const bag=state.products.find(p=>p.name==="ขนมจีนถุง");
  if(bag){bag.price=5;bag.unit="ถุง"}else state.products.push({id:Math.max(0,...state.products.map(p=>p.id))+1,name:"ขนมจีนถุง",category:"ของเพิ่ม",price:5,cost:3,stock:100,unit:"ถุง",active:true});
  if(!Array.isArray(state.settings.customCategories))state.settings.customCategories=[];
  if(!state.settings.dailyOrderCounters||typeof state.settings.dailyOrderCounters!=="object")state.settings.dailyOrderCounters={};
  ensureDailyOrderCounter();
  localStorage.setItem("fish_pos_v120_migrated","1");
  saveState();
}
migrateV120();

function migrateV130(){
  let changed=false;
  if(!Array.isArray(state.settings.categoryOrder))state.settings.categoryOrder=[];
  const allCats=[...new Set(state.products.map(p=>p.category).filter(Boolean))];
  if(!state.settings.categoryOrder.length){
    const preferred=["ปลาชุดใหญ่","ปลาชุดเล็ก","ปลาตัว","ของเพิ่ม","เครื่องดื่ม"];
    state.settings.categoryOrder=[...preferred.filter(x=>allCats.includes(x)),...allCats.filter(x=>!preferred.includes(x))];
    changed=true;
  }else{
    allCats.forEach(x=>{if(!state.settings.categoryOrder.includes(x)){state.settings.categoryOrder.push(x);changed=true}});
    state.settings.categoryOrder=state.settings.categoryOrder.filter(x=>allCats.includes(x)||(state.settings.customCategories||[]).includes(x));
  }
  // Ensure both noodle cup prices exist even for devices that already ran older migration.
  const cups=state.products.filter(p=>p.name==="ขนมจีนถ้วย");
  for(const price of [10,12]){
    if(!cups.some(p=>Number(p.price)===price)){
      state.products.push({id:Math.max(0,...state.products.map(p=>p.id))+1,name:"ขนมจีนถ้วย",category:"ของเพิ่ม",price,cost:8,stock:100,unit:"ถ้วย",active:true});
      changed=true;
    }
  }
  const bag=state.products.find(p=>p.name==="ขนมจีนถุง");
  if(bag&&Number(bag.price)!==5){bag.price=5;changed=true}
  localStorage.setItem("fish_pos_v130_migrated","1");
  if(changed)saveState();
}
migrateV130();



function initGenericNumericBindings(){
  bindNumericInput("discountInput",{title:"ส่วนลด (บาท)",hint:"ใส่จำนวนส่วนลด",max:999999,maxDigits:6});
  bindNumericInput("newPrice",{title:"ราคาขาย",hint:"ใส่ราคาขาย",max:999999,maxDigits:6});
  bindNumericInput("newCost",{title:"ต้นทุน",hint:"ใส่ต้นทุน",max:999999,maxDigits:6});
  bindNumericInput("newStock",{title:"สต๊อก",hint:"ใส่สต๊อกได้มากกว่า 200",max:999999,maxDigits:6});
  bindNumericInput("editPrice",{title:"ราคาขาย",hint:"ใส่ราคาขาย",max:999999,maxDigits:6});
  bindNumericInput("editCost",{title:"ต้นทุน",hint:"ใส่ต้นทุน",max:999999,maxDigits:6});
  bindNumericInput("editStock",{title:"สต๊อก",hint:"ใส่สต๊อกได้มากกว่า 200",max:999999,maxDigits:6});
  bindNumericInput("prePhone",{title:"เบอร์โทรลูกค้า",hint:"ใส่เฉพาะตัวเลข เช่น 0812345678",maxDigits:10,allowLeadingZeros:true,returnAsString:true});
  bindNumericInput("promptPayIdInput",{title:"PromptPay ID",hint:"เบอร์มือถือเริ่ม 0 ได้ เช่น 0812345678",maxDigits:15,allowLeadingZeros:true,returnAsString:true});
}
initGenericNumericBindings();

// Clock
let lastClockDate=localDateKey();
function updateClock(){const d=new Date();$("clockTime").textContent=d.toLocaleTimeString("th-TH",{hour12:false});$("todayText").textContent=d.toLocaleDateString("th-TH",{day:"2-digit",month:"short",year:"numeric"});$("liveChartNow").textContent="อัปเดต "+d.toLocaleTimeString("th-TH",{hour12:false});const k=localDateKey(d);if(k!==lastClockDate){lastClockDate=k;ensureDailyOrderCounter();if($("orderNo"))$("orderNo").textContent="#"+currentDailyOrderNumber();if(currentUser){renderDashboard();renderAdmin()}}}
setInterval(updateClock,1000);updateClock();

// Login + PIN keypad
function initLogin(){
  const select=$("staffSelect");
  select.innerHTML='<option value="">— เลือกชื่อพนักงาน —</option>'+STAFF_LIST.map(s=>`<option value="${s.id}">${s.name}${s.role==="owner"?" · เจ้าของร้าน":""}</option>`).join("");
  select.onchange=()=>{selectedStaffId=select.value?Number(select.value):null;clearPin();$("loginHint").textContent=selectedStaffId?"กรอก PIN 4 หลัก":"เลือกพนักงานก่อน แล้วกรอก PIN 4 หลัก"};
  document.querySelectorAll("[data-pin]").forEach(b=>b.onclick=()=>{if(!selectedStaffId){$("loginHint").textContent="กรุณาเลือกพนักงานก่อน";return}if($("pinInput").value.length<4){$("pinInput").value+=b.dataset.pin;renderPinDots();if($("pinInput").value.length===4)setTimeout(attemptLogin,120)}});
  $("pinBack").onclick=()=>{$("pinInput").value=$("pinInput").value.slice(0,-1);renderPinDots()};
  $("loginBtn").onclick=attemptLogin;
}
function clearPin(){$("pinInput").value="";renderPinDots();$("loginHint").textContent="กรอก PIN 4 หลัก"}
function renderPinDots(){[...$("pinDots").children].forEach((d,i)=>d.classList.toggle("filled",i<$("pinInput").value.length))}

function renderStaffAccountSwitcherV29(){
  const list=$("staffAccountListV29");
  if(!list||!currentUser)return;

  if($("staffAccountNameV29"))$("staffAccountNameV29").textContent=currentUser.name;
  if($("staffAccountRoleV29"))$("staffAccountRoleV29").textContent=currentUser.role==="owner"?"ผู้ดูแลระบบ":"พนักงาน";

  list.innerHTML=STAFF_LIST.map(s=>`
    <button type="button" class="staff-account-option-v29 ${s.id===currentUser.id?"current":""}" data-staff-id-v29="${s.id}">
      <span class="staff-account-option-name-v29">${escapeHtml(s.name)}</span>
      <span class="staff-account-option-role-v29">${s.role==="owner"?"ผู้ดูแลระบบ":"พนักงาน"}</span>
    </button>
  `).join("");
}

function closeStaffAccountPopoverV29(){
  if($("staffAccountPopoverV29"))$("staffAccountPopoverV29").classList.add("hidden");
}

function toggleStaffAccountPopoverV29(){
  const pop=$("staffAccountPopoverV29");
  if(!pop)return;
  renderStaffAccountSwitcherV29();
  pop.classList.toggle("hidden");
}

function applyCurrentUser(staff){
  currentUser=staff;
  $("loginScreen").classList.add("hidden");$("app").classList.remove("hidden");
  $("staffBadge").textContent=`${staff.name} · ${staff.role==="owner"?"เจ้าของ":"พนักงาน"}`;
  document.querySelectorAll(".owner-only").forEach(el=>el.classList.toggle("hidden",staff.role!=="owner"));
  const quick=$("staffQuickSwitch");
  if(quick){
    quick.innerHTML=STAFF_LIST.map(s=>`<option value="${s.id}">${s.name}${s.role==="owner"?" · เจ้าของ":""}</option>`).join("");
    quick.value=String(staff.id);
  }
  if($("staffQuickName"))$("staffQuickName").textContent=staff.name;
  if($("staffQuickRole"))$("staffQuickRole").textContent=staff.role==="owner"?"ผู้ดูแลระบบ":"พนักงาน";
  if($("staffQuickMenu"))$("staffQuickMenu").innerHTML=STAFF_LIST.map(s=>`<button type="button" class="${s.id===staff.id?"active":""}" data-quick-staff="${s.id}"><span>${s.name}</span><small>${s.role==="owner"?"ผู้ดูแลระบบ":"พนักงาน"}</small></button>`).join("");
  if(staff.role!=="owner"&&!$("dashboard").classList.contains("hidden"))openPage("sale");
  if(staff.role!=="owner"&&!$("admin").classList.contains("hidden"))openPage("sale");
  renderStaffAccountSwitcherV29();
  renderAll();
}
function attemptLogin(){if(!selectedStaffId){$("loginHint").textContent="กรุณาเลือกพนักงานก่อน";return}const staff=STAFF_LIST.find(s=>s.id===selectedStaffId);if(!staff||staff.pin!==$("pinInput").value){$("loginHint").textContent="PIN ไม่ถูกต้อง กรุณาลองใหม่";clearPin();return}applyCurrentUser(staff)}
$("logoutBtn").onclick=()=>location.reload();

let pendingSwitchStaffId=null;
function renderSwitchPinDots(){[...$("switchPinDots").children].forEach((d,i)=>d.classList.toggle("filled",i<$("switchPinInput").value.length))}
function clearSwitchPin(message="กรอก PIN 4 หลัก"){$("switchPinInput").value="";renderSwitchPinDots();$("switchPinHint").textContent=message}
function openStaffSwitch(id){
  const staff=STAFF_LIST.find(s=>s.id===Number(id));
  if(!staff)return;
  if(staff.id===currentUser?.id){
    return;
  }
  pendingSwitchStaffId=staff.id;
  $("switchStaffName").textContent=staff.name;
  clearSwitchPin("กรอก PIN 4 หลัก");
  $("staffSwitchModal").classList.remove("hidden");
}
function closeStaffSwitch(){
  $("staffSwitchModal").classList.add("hidden");
  pendingSwitchStaffId=null;
  clearSwitchPin();
}
function confirmStaffSwitch(){
  const staff=STAFF_LIST.find(s=>s.id===pendingSwitchStaffId);if(!staff)return;
  if($("switchPinInput").value!==staff.pin){clearSwitchPin("PIN ไม่ถูกต้อง กรุณาลองใหม่");return}
  $("staffSwitchModal").classList.add("hidden");pendingSwitchStaffId=null;clearSwitchPin();applyCurrentUser(staff);
}
$("closeStaffSwitch").onclick=closeStaffSwitch;
$("staffSwitchModal").addEventListener("click",e=>{if(e.target===$("staffSwitchModal"))closeStaffSwitch()});
document.querySelectorAll("[data-switch-pin]").forEach(b=>b.onclick=()=>{if($("switchPinInput").value.length<4){$("switchPinInput").value+=b.dataset.switchPin;renderSwitchPinDots();if($("switchPinInput").value.length===4)setTimeout(confirmStaffSwitch,100)}});
$("switchPinBack").onclick=()=>{$("switchPinInput").value=$("switchPinInput").value.slice(0,-1);renderSwitchPinDots()};

$("switchPinEnter").onclick=confirmStaffSwitch;

if($("staffAccountCardV29")){
  $("staffAccountCardV29").onclick=e=>{
    e.stopPropagation();
    toggleStaffAccountPopoverV29();
  };
}
if($("staffAccountListV29")){
  $("staffAccountListV29").onclick=e=>{
    const btn=e.target.closest("[data-staff-id-v29]");
    if(!btn)return;
    const id=Number(btn.dataset.staffIdV29);
    closeStaffAccountPopoverV29();
    openStaffSwitch(id);
  };
}
document.addEventListener("click",e=>{
  if(!e.target.closest(".staff-switch-v29"))closeStaffAccountPopoverV29();
});


function renderAll(){$("shopTitle").textContent=state.settings.shopName;$("orderNo").textContent="#"+currentDailyOrderNumber();renderCategories();renderProducts();renderCart();renderOrders();renderDashboard();renderStock();renderPreorder();renderPreorderList();renderAdmin();renderHeldOrders();renderLowStockAlert();renderDayCloseSummary();updateQrDisplay();updatePreorderReminder()}
function getCategoryList(){
  const productCats=[...new Set(state.products.filter(p=>p.active).map(p=>p.category).filter(Boolean))];
  const custom=Array.isArray(state.settings.customCategories)?state.settings.customCategories:[];
  const all=[...new Set([...productCats,...custom])];
  let order=Array.isArray(state.settings.categoryOrder)?state.settings.categoryOrder.filter(x=>all.includes(x)):[];
  all.forEach(x=>{if(!order.includes(x))order.push(x)});
  state.settings.categoryOrder=order.slice();
  return order;
}
function renderCategories(){
  const cats=[...getCategoryList(),"ทั้งหมด"];
  if(currentCategory!=="ทั้งหมด"&&!cats.includes(currentCategory))currentCategory=cats[0]||"ทั้งหมด";
  $("categoryTabs").innerHTML=cats.map(c=>`<button class="${c===currentCategory?"active":""}" onclick="setCategory('${c.replaceAll("'","\\'")}')">${escapeHtml(c)}</button>`).join("")
}
window.setCategory=c=>{currentCategory=c;renderCategories();renderProducts()};
function productEmoji(c){return ""}
function filteredProducts(){const q=$("menuSearch").value.trim().toLowerCase();return state.products.filter(p=>p.active&&(currentCategory==="ทั้งหมด"||p.category===currentCategory)&&(!q||p.name.toLowerCase().includes(q)||String(p.price).includes(q)||money(p.price).toLowerCase().includes(q))).slice().sort((a,b)=>a.price-b.price||a.name.localeCompare(b.name,"th"))}
function renderProducts(){
  $("products").innerHTML=filteredProducts().map(p=>{
    const selected=cart.find(x=>x.id===p.id);
    return `<button class="product ${p.stock<=5?"low":""} ${p.stock<=0?"sold-out-v37":""} ${selected?"selected-product":""}" data-cat="${p.category}" onclick="toggleProductSelection(${p.id})">${selected?'<span class="product-check" aria-hidden="true">✓</span>':""}<strong>${p.name}</strong><span class="price">${money(p.price)}</span>${p.stock<=0?'<small>สินค้าหมด · แตะเพื่อดูสต๊อก</small>':""}</button>`
  }).join("")||'<p class="empty">ไม่พบเมนู</p>';
  renderSelectedItemsCount();
}
$("menuSearch").addEventListener("input",renderProducts);
$("menuSearchToggle").onclick=()=>{
  const wrap=$("menuSearchWrap");
  const opening=!wrap.classList.contains("open");
  wrap.classList.toggle("open");
  if(opening){setTimeout(()=>$("menuSearch").focus(),30)}
  else{$("menuSearch").value="";renderProducts()}
};
$("menuSearch").addEventListener("keydown",e=>{if(e.key==="Escape"){$("menuSearch").value="";$("menuSearchWrap").classList.remove("open");renderProducts();}});
document.addEventListener("click",e=>{
  const wrap=$("menuSearchWrap");
  if(wrap&&wrap.classList.contains("open")&&!wrap.contains(e.target)&&!$("menuSearch").value.trim())wrap.classList.remove("open");
});
function renderSelectedItemsCount(){
  const el=$("selectedItemsCount");if(!el)return;
  const totalQty=cart.reduce((s,x)=>s+Number(x.qty||0),0);
  el.textContent=`เลือกแล้ว ${totalQty} รายการ`;
  el.classList.toggle("has-items",totalQty>0);
}
window.toggleProductSelection=id=>{
  const el=currentTapElement();tapFeedback(el);playTapSound();
  const p=state.products.find(x=>x.id===id);
  if(!p)return;
  if(p.stock<=0){
    alert(`${p.name} สต๊อกหมด กำลังเปิดหน้าสต๊อก`);
    openPage("stock");
    return;
  }
  const row=cart.find(x=>x.id===id);
  if(row){cart=cart.filter(x=>x.id!==id);playQtySound(false)}
  else{cart.push({id:p.id,name:p.name,price:p.price,cost:p.cost,qty:1})}
  renderCart();renderProducts();
};
window.addItem=id=>toggleProductSelection(id);
window.changeQty=(id,d)=>{const el=currentTapElement();tapFeedback(el);playQtySound(d>0);const row=cart.find(x=>x.id===id);if(!row)return;const p=state.products.find(x=>x.id===id);row.qty+=d;if(row.qty<=0)cart=cart.filter(x=>x.id!==id);else{row.qty=Math.min(row.qty,p.stock,100)}renderCart();renderProducts()};
window.setCartQty=(id,value)=>{
  const row=cart.find(x=>x.id===id),p=state.products.find(x=>x.id===id);if(!row||!p)return;
  let qty=Math.min(100,Math.max(0,Number(String(value??"").replace(/\D/g,""))||0));
  if(qty<=0){cart=cart.filter(x=>x.id!==id)}
  else{qty=Math.min(qty,Number(p.stock)||0);row.qty=qty}
  renderCart();renderProducts();
};
window.openCartQtyKeypad=id=>{
  const row=cart.find(x=>x.id===id),p=state.products.find(x=>x.id===id);if(!row||!p)return;
  openNumericKeypad({title:`จำนวน ${row.name}`,hint:"สูงสุด 100",value:row.qty,min:0,max:Math.min(100,Number(p.stock)||100),maxDigits:3,onConfirm:n=>setCartQty(id,n)});
};
const subtotal=()=>cart.reduce((s,x)=>s+x.price*x.qty,0),discount=()=>Math.max(0,Number($("discountInput").value||0)),total=()=>Math.max(0,subtotal()-discount());
function renderCart(){$("cartItems").innerHTML=cart.length?cart.map(x=>`<div class="cart-item"><div class="cart-item-info"><b>${x.name}</b><div class="hint">${money(x.price)} × ${x.qty}</div></div><div class="cart-item-controls"><div class="qty"><button onclick="changeQty(${x.id},-1)">−</button><button type="button" class="qty-number-input qty-number-button" onclick="openCartQtyKeypad(${x.id})" aria-label="จำนวน ${escapeHtml(x.name)}">${x.qty}</button><button onclick="changeQty(${x.id},1)">+</button></div><button class="cart-trash-btn" onclick="removeCartItem(${x.id})" title="ลบรายการ" aria-label="ลบ ${escapeHtml(x.name)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></svg></button></div></div>`).join(""):'<p class="empty">ยังไม่มีสินค้า</p>';$("subtotal").textContent=money(subtotal());$("discountDisplay").textContent=money(discount());$("total").textContent=money(total());$("payBtn").disabled=!cart.length;if($("holdOrderBtn"))$("holdOrderBtn").disabled=!cart.length;if($("heldOrderCount"))$("heldOrderCount").textContent=state.heldOrders?.length||0;renderSelectedItemsCount()}

window.removeCartItem=id=>{cart=cart.filter(x=>x.id!==id);renderCart();renderProducts();playQtySound(false)};
$("discountInput").addEventListener("input",renderCart);$("clearBtn").onclick=()=>{if(cart.length&&confirm("ล้างออเดอร์นี้ใช่ไหม?")){cart=[];$("discountInput").value=0;renderCart();renderProducts()}};

function renderHeldOrders(){
  if(!Array.isArray(state.heldOrders))state.heldOrders=[];
  if($("heldOrderCount"))$("heldOrderCount").textContent=state.heldOrders.length;
  const box=$("heldOrdersList");if(!box)return;
  if(!state.heldOrders.length){box.innerHTML='<p class="empty">ยังไม่มีออเดอร์ที่พักไว้</p>';return}
  box.innerHTML=state.heldOrders.slice().sort((a,b)=>b.time.localeCompare(a.time)).map((o,i)=>`
    <div class="held-order-card">
      <div class="held-order-main">
        <div><small>${new Date(o.time).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})}</small><b>พัก #${String(i+1).padStart(2,"0")}</b></div>
        <strong>${money(o.total)}</strong>
      </div>
      <p>${o.items.map(x=>`${escapeHtml(x.name)} ×${x.qty}`).join(" · ")}</p>
      <div class="held-order-actions">
        <button class="btn-secondary-orange" onclick="restoreHeldOrder(${o.id})">กลับมาขายต่อ</button>
        <button class="btn-danger" onclick="deleteHeldOrder(${o.id})">ลบ</button>
      </div>
    </div>`).join("");
}
$("holdOrderBtn").onclick=()=>{
  if(!cart.length)return;
  const held={id:Date.now(),time:nowIso(),items:cart.map(x=>({...x})),discount:discount(),subtotal:subtotal(),total:total(),staffName:currentUser?.name||""};
  state.heldOrders.unshift(held);saveState();
  cart=[];$("discountInput").value=0;renderCart();renderHeldOrders();playTapSound();
};
$("openHeldOrdersBtn").onclick=()=>{$("heldOrdersModal").classList.remove("hidden");renderHeldOrders()};
$("closeHeldOrdersBtn").onclick=()=>$("heldOrdersModal").classList.add("hidden");
$("heldOrdersModal").addEventListener("click",e=>{if(e.target===$("heldOrdersModal"))$("heldOrdersModal").classList.add("hidden")});
window.restoreHeldOrder=id=>{
  const o=state.heldOrders.find(x=>x.id===id);if(!o)return;
  if(cart.length&&!confirm("มีออเดอร์ปัจจุบันอยู่ ต้องการแทนที่ด้วยออเดอร์ที่พักไว้ใช่ไหม?"))return;
  const unavailable=o.items.find(r=>{const p=state.products.find(x=>x.id===r.id);return !p||p.stock<r.qty});
  if(unavailable){alert(`สต๊อก ${unavailable.name} ไม่พอสำหรับออเดอร์ที่พักไว้`);return}
  cart=o.items.map(x=>({...x}));$("discountInput").value=o.discount||0;
  state.heldOrders=state.heldOrders.filter(x=>x.id!==id);saveState();
  $("heldOrdersModal").classList.add("hidden");renderCart();renderHeldOrders();
};
window.deleteHeldOrder=id=>{
  if(!confirm("ลบออเดอร์ที่พักไว้นี้ใช่ไหม?"))return;
  state.heldOrders=state.heldOrders.filter(x=>x.id!==id);saveState();renderHeldOrders();renderCart();
};



function setCashInputValue(value){
  const input=$("cashReceived");if(!input)return;
  let clean=String(value??"").replace(/[^\d]/g,"").replace(/^0+(?=\d)/,"");
  if(clean.length>8)clean=clean.slice(0,8);
  input.value=clean;
  updateCashDisplays();
  input.dispatchEvent(new Event("input",{bubbles:true}));
}
function updateCashDisplays(){
  const n=Number($("cashReceived")?.value||0);
  if($("cashReceivedDisplay"))$("cashReceivedDisplay").textContent=money(n);
  if($("popupCashDisplay"))$("popupCashDisplay").textContent=money(n);
}
function addCashAmount(amount){
  const current=Number($("cashReceived")?.value||0);
  setCashInputValue(current+Number(amount||0));
  playTapSound();
}
function appendCashDigit(digit){
  const current=String($("cashReceived")?.value||"");
  if(current.length>=8)return;
  setCashInputValue(current+String(digit));playTapSound();
}
function backspaceCash(){setCashInputValue(String($("cashReceived")?.value||"").slice(0,-1));playQtySound(false)}
function clearCash(){setCashInputValue("");playQtySound(false)}
function openCashKeypad(){
  updateCashDisplays();
  const popup=$("cashKeypadPopup");if(!popup)return;
  if(popup.parentElement!==document.body)document.body.appendChild(popup);
  if($("exactCashBtn"))$("exactCashBtn").textContent=`พอดี ${money(total())}`;
  popup.classList.remove("hidden");
  document.body.classList.add("cash-keypad-open");
}
function closeCashKeypad(){
  const popup=$("cashKeypadPopup");
  if(popup)popup.classList.add("hidden");
  document.body.classList.remove("cash-keypad-open");
}
function initPaymentKeypad(){
  $("cashReceivedButton").onclick=()=>{playTapSound();openCashKeypad()};
  document.querySelectorAll("[data-popup-key]").forEach(btn=>btn.onclick=()=>{tapFeedback(btn);appendCashDigit(btn.dataset.popupKey)});
  $("popupCashBack").onclick=()=>{tapFeedback($("popupCashBack"));backspaceCash()};
  $("popupCashClear").onclick=()=>{tapFeedback($("popupCashClear"));clearCash()};
  if($("exactCashBtn"))$("exactCashBtn").onclick=()=>{
    tapFeedback($("exactCashBtn"));
    setCashInputValue(String(Math.round(total())));
    updateCashDisplays();
    playTapSound();
  };
  $("closeCashKeypad").onclick=closeCashKeypad;
  $("confirmCashKeypad").onclick=()=>{playTapSound();closeCashKeypad()};
  $("cashKeypadPopup").addEventListener("click",e=>{if(e.target===$("cashKeypadPopup"))closeCashKeypad()});
  document.querySelectorAll("[data-bank]").forEach(btn=>btn.onclick=()=>{tapFeedback(btn);addCashAmount(Number(btn.dataset.bank))});
}


// ===== Dynamic PromptPay QR =====
function ppTlv(tag,value){
  value=String(value);
  return tag+String(value.length).padStart(2,"0")+value;
}
function ppCrc16(str){
  let crc=0xFFFF;
  for(let i=0;i<str.length;i++){
    crc ^= str.charCodeAt(i)<<8;
    for(let b=0;b<8;b++){
      crc=(crc&0x8000)?((crc<<1)^0x1021):(crc<<1);
      crc&=0xFFFF;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4,"0");
}
function normalizePromptPayTarget(raw){
  const n=String(raw||"").replace(/\D/g,"");
  if(n.length===10&&n.startsWith("0")) return {tag:"01",value:"0066"+n.slice(1)};
  if(n.length===13) return {tag:"02",value:n};
  if(n.length===15) return {tag:"03",value:n};
  throw new Error("PromptPay ID ต้องเป็นเบอร์มือถือ 10 หลัก, เลขบัตร/เลขภาษี 13 หลัก หรือ e-Wallet 15 หลัก");
}
function buildPromptPayPayload(target,amount){
  const t=normalizePromptPayTarget(target);
  const merchant=ppTlv("00","A000000677010111")+ppTlv(t.tag,t.value);
  let payload=ppTlv("00","01")+ppTlv("01","12")+ppTlv("29",merchant)+ppTlv("53","764");
  if(Number(amount)>0) payload+=ppTlv("54",Number(amount).toFixed(2));
  payload+=ppTlv("58","TH")+"6304";
  return payload+ppCrc16(payload);
}
function createQrDataUrl(text,size=360){
  return new Promise((resolve,reject)=>{
    if(!window.QRCode){reject(new Error("ไม่สามารถโหลดตัวสร้าง QR ได้ กรุณาเชื่อมต่ออินเทอร์เน็ต"));return}
    const holder=document.createElement("div");
    holder.style.cssText="position:fixed;left:-9999px;top:-9999px;opacity:0";
    document.body.appendChild(holder);
    try{
      new QRCode(holder,{text:String(text),width:size,height:size,correctLevel:QRCode.CorrectLevel.M});
      setTimeout(()=>{
        const canvas=holder.querySelector("canvas"),img=holder.querySelector("img");
        const src=canvas?canvas.toDataURL("image/png"):img?.src;
        holder.remove();
        src?resolve(src):reject(new Error("สร้าง QR ไม่สำเร็จ"));
      },60);
    }catch(e){holder.remove();reject(e)}
  });
}
async function renderPromptPayPaymentQr(){
  const id=String(state.settings.promptPayId||"").trim();
  if(!id){
    updateQrDisplay();
    if(!state.settings.qrImage) alert("กรุณาตั้ง PromptPay ID ที่หน้า จัดการร้าน ก่อนใช้งาน QR กำหนดยอด");
    return false;
  }
  try{
    const payload=buildPromptPayPayload(id,total());
    const src=await createQrDataUrl(payload,380);
    $("paymentQrImage").src=src;
    $("paymentQrImage").style.display="block";
    $("qrPlaceholder").style.display="none";
    $("qrFullscreenImage").src=src;
    $("qrFullscreenAmount").textContent=money(total());
    return true;
  }catch(err){
    console.error(err);
    alert(err.message||"สร้าง PromptPay QR ไม่สำเร็จ");
    return false;
  }
}
async function renderAdminDynamicQr(){
  const el=$("adminDynamicQr");
  if(!el)return;
  el.innerHTML="";
  const id=String(state.settings.promptPayId||"").trim();
  if(!id){el.innerHTML="<span>ยังไม่ได้ตั้ง PromptPay</span>";return}
  try{
    const src=await createQrDataUrl(buildPromptPayPayload(id,1),160);
    const img=document.createElement("img");img.src=src;img.alt="PromptPay Preview";
    el.appendChild(img);
    const label=document.createElement("small");label.textContent="ตัวอย่าง QR (ยอดทดสอบ ฿1)";
    el.appendChild(label);
  }catch(e){el.innerHTML="<span>"+escapeHtml(e.message)+"</span>"}
}


function printQueueTicket(){
  const orderNo=currentDailyOrderNumber();
  const now=new Date();
  const orderLabel="#"+String(orderNo).padStart(3,"0");
  const dateText=now.toLocaleDateString("th-TH",{day:"2-digit",month:"2-digit",year:"numeric"});
  const timeText=now.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false});
  const staffName=currentUser?.name||"-";
  const shopName=String(state.settings.shopName||"ร้านทิพย์เกษรเมี่ยงปลาเผา");

  const w=window.open("","_blank","width=420,height=520");
  if(!w){
    alert("เบราว์เซอร์บล็อกหน้าต่างพิมพ์ กรุณาอนุญาต Pop-up แล้วลองใหม่");
    return;
  }

  w.document.write(`<!doctype html>
<html lang="th">
<head>
<meta charset="utf-8">
<title>Queue ${orderLabel}</title>
<style>
@page{size:80mm auto;margin:6mm}
*{box-sizing:border-box}
body{margin:0;font-family:"Sarabun","Anuphan",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#111;background:#fff}
.screen-actions{display:flex;gap:8px;margin-bottom:12px}
.screen-actions button{flex:1;padding:10px;border-radius:8px;font:inherit;font-weight:700}
.screen-actions button:first-child{border:1px solid #F2B36F;background:#FFF1DF;color:#D96F0B}
.screen-actions button:last-child{border:1px solid #E67A18;background:#F28C28;color:#fff}
.ticket{text-align:center}
.shop{font-size:18px;font-weight:700;line-height:1.3}
.label{margin-top:12px;font-size:13px}
.queue{margin:4px 0 8px;font-size:58px;line-height:1;font-weight:800}
.meta{border-top:1px dashed #777;border-bottom:1px dashed #777;padding:8px 0;margin-top:8px;font-size:12px;line-height:1.55}
.thanks{margin-top:10px;font-size:12px}
@media print{.screen-actions{display:none!important}}
</style>
</head>
<body>
<div class="screen-actions">
<button onclick="window.close()">กลับ</button>
<button onclick="window.print()">พิมพ์บัตรคิว</button>
</div>
<div class="ticket">
<div class="shop">${escapeHtml(shopName)}</div>
<div class="label">หมายเลขคิว</div>
<div class="queue">${orderLabel}</div>
<div class="meta">
<div>${dateText} · ${timeText}</div>
<div>พนักงาน: ${escapeHtml(staffName)}</div>
</div>
<div class="thanks">กรุณารอเรียกคิว ขอบคุณค่ะ</div>
</div>
</body>
</html>`);
  w.document.close();
}

if($("printQueueTicketBtn"))$("printQueueTicketBtn").onclick=printQueueTicket;

// Payment
function openPayment(){
  if(!cart.length)return;
  $("paymentModal")?.querySelector(".payment-box")?.classList.remove("method-selected-v34");
  $("modalTotal").textContent=money(total());
  $("payOrderNo").textContent="#"+currentDailyOrderNumber();
  selectedMethod=null;lastCashReceived=0;lastChange=0;
  document.querySelectorAll(".payment-methods button").forEach(b=>b.classList.remove("selected"));
  $("cashArea").classList.add("hidden");$("qrArea").classList.add("hidden");
  setCashInputValue("");$("confirmPay").disabled=true;
  $("paymentModal").classList.remove("hidden");updateCashPaymentStatus();
}
$("payBtn").onclick=openPayment;
$("closeModal").onclick=$("cancelPay").onclick=()=>{$("paymentModal").classList.add("hidden");closeCashKeypad()};
document.querySelectorAll(".payment-methods button").forEach(b=>b.onclick=()=>{
  playTapSound();tapFeedback(b);selectedMethod=b.dataset.method;
  $("paymentModal")?.querySelector(".payment-box")?.classList.add("method-selected-v34");
  document.querySelectorAll(".payment-methods button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");
  $("cashArea").classList.toggle("hidden",selectedMethod!=="เงินสด");
  $("qrArea").classList.toggle("hidden",selectedMethod!=="QR");
  if(selectedMethod==="QR"){
    lastCashReceived=total();lastChange=0;$("qrAmount").textContent=money(total());
    $("qrFullscreenAmount").textContent=money(total());renderPromptPayPaymentQr().then(ok=>{$("confirmPay").disabled=!ok&&!state.settings.qrImage});
  }else{
    setCashInputValue("");$("confirmPay").disabled=true;updateCashPaymentStatus();
  }
});
function updateCashPaymentStatus(){
  const box=$("cashPaymentStatus");if(!box)return;
  const received=Math.max(0,Number($("cashReceived")?.value||0));
  const due=Math.max(0,total()-received);
  lastCashReceived=received;lastChange=Math.max(0,received-total());
  if(received<=0){
    box.className="cash-status-line zero";
    box.innerHTML=`<span>ยอดที่ต้องชำระ</span><strong>${money(total())}</strong>`;
  }else if(due>0){
    box.className="cash-status-line short";
    box.innerHTML=`<span>ขาดอีก</span><strong>${money(due)}</strong>`;
  }else{
    box.className="cash-status-line enough";
    box.innerHTML=`<span>รับเงินครบแล้ว</span><strong>เงินทอน ${money(lastChange)}</strong>`;
  }
  $("confirmPay").disabled=received<total();
}
$("cashReceived").addEventListener("input",updateCashPaymentStatus);

$("qrZoomButton").onclick=()=>{
  const small=$("paymentQrImage");
  const src=small?.src||"";
  if(!src){alert("ยังไม่มี QR สำหรับออเดอร์นี้");return}
  $("qrFullscreenImage").src=src;
  $("qrFullscreenAmount").textContent=money(total());
  $("qrFullscreen").classList.remove("hidden");
};
$("closeQrFullscreen").onclick=()=>$("qrFullscreen").classList.add("hidden");
$("qrFullscreen").addEventListener("click",e=>{if(e.target===$("qrFullscreen"))$("qrFullscreen").classList.add("hidden")});

$("confirmPay").onclick=()=>{
  if(!selectedMethod)return;
  for(const row of cart){const p=state.products.find(x=>x.id===row.id);if(!p||p.stock<row.qty){alert("สต๊อกไม่พอ กรุณาตรวจสอบอีกครั้ง");return}}
  const num=currentDailyOrderNumber(),sub=subtotal(),disc=discount(),net=total(),cost=cart.reduce((s,x)=>s+(x.cost||0)*x.qty,0);
  const order={id:Date.now(),number:num,items:cart.map(x=>({...x})),subtotal:sub,discount:disc,total:net,cost,grossProfit:net-cost,payment:selectedMethod,cashReceived:selectedMethod==="เงินสด"?lastCashReceived:net,change:selectedMethod==="เงินสด"?lastChange:0,staffId:currentUser.id,staffName:currentUser.name,status:"paid",time:nowIso(),orderDate:localDateKey(),cancelledAt:null};
  cart.forEach(row=>{const p=state.products.find(x=>x.id===row.id);p.stock-=row.qty});
  state.orders.unshift(order);advanceDailyOrderNumber();lastOrder=order;saveState();
  $("paymentModal").classList.add("hidden");$("qrFullscreen").classList.add("hidden");
  $("successOrderNo").textContent=`ออเดอร์ #${num}`;$("successTotal").textContent=money(net);
  $("successChange").textContent=money(order.change);
  $("successReceived").textContent=money(order.cashReceived);
  $("successCashSummary").classList.toggle("hidden",selectedMethod==="QR");
  if($("receiptNoteInput"))$("receiptNoteInput").value="";
  $("successModal").classList.remove("hidden");playPaymentSuccessSound();announcePayment(order);renderAll();
};
$("newOrder").onclick=()=>{
  $("successModal").classList.add("hidden");cart=[];$("discountInput").value=0;lastCashReceived=0;lastChange=0;renderCart();renderProducts();$("orderNo").textContent="#"+currentDailyOrderNumber();
};
$("printBtn").onclick=()=>{
  if(!lastOrder)return;
  lastOrder.receiptNote=String($("receiptNoteInput")?.value||"").trim();
  const savedOrder=state.orders.find(o=>o.id===lastOrder.id);
  if(savedOrder)savedOrder.receiptNote=lastOrder.receiptNote;
  saveState();
  printOrder(lastOrder);
};

// Orders + receipt
function orderItemsText(o){return o.items.map(i=>`${i.name} ×${i.qty}`).join(", ")}
function renderOrders(){
  const q=$("orderSearch").value.trim().toLowerCase();
  let list=state.orders.filter(o=>(o.number+" "+orderItemsText(o)+" "+(o.receiptNote||"")+" "+(o.staffName||"")).toLowerCase().includes(q));
  if(orderStatusFilter==="today"){
    const today=localDateKey();
    list=list.filter(o=>localDateKey(new Date(o.time))===today);
  }else if(orderStatusFilter!=="all"){
    list=list.filter(o=>o.status===orderStatusFilter);
  }
  if(!list.length){$("ordersList").innerHTML='<p class="empty">ยังไม่มีออเดอร์ที่ตรงกับตัวกรอง</p>';return}
  $("ordersList").innerHTML=`<table class="orders-clean-table"><tr><th>เลข</th><th>วันที่</th><th>เวลา</th><th>รายการ</th><th>ยอด</th><th>ชำระ</th><th>พนักงาน</th><th>สถานะ</th><th>จัดการ</th></tr>${list.map(o=>{const d=new Date(o.time);return `<tr><td><b>#${String(o.number).padStart(3,"0")}</b></td><td class="order-date">${d.toLocaleDateString("th-TH",{day:"2-digit",month:"short",year:"2-digit"})}</td><td>${d.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})}</td><td>${orderItemsText(o)}</td><td class="order-amount">${money(o.total)}</td><td>${o.payment}</td><td>${o.staffName||"-"}</td><td><span class="status ${o.status}">${o.status==="paid"?"สำเร็จแล้ว":"ยกเลิก"}</span></td><td><div class="order-actions"><button class="btn-secondary-orange compact" onclick="printOrderById(${o.id})">พิมพ์ซ้ำ</button>${o.status==="paid"&&currentUser?.role==="owner"?`<button class="delete-icon-btn" title="ยกเลิกออเดอร์" aria-label="ยกเลิกออเดอร์" onclick="cancelOrder(${o.id})">×</button>`:""}</div></td></tr>`}).join("")}</table>`;
}
document.querySelectorAll(".order-filter").forEach(btn=>btn.onclick=()=>{
  orderStatusFilter=btn.dataset.orderFilter;
  document.querySelectorAll(".order-filter").forEach(x=>x.classList.toggle("active",x===btn));
  renderOrders();
});
$("orderSearch").addEventListener("input",renderOrders);window.cancelOrder=id=>{const o=state.orders.find(x=>x.id===id);if(!o||o.status!=="paid")return;if(!confirm(`ยกเลิกออเดอร์ #${o.number} และคืนสต๊อกใช่ไหม?`))return;o.status="cancelled";o.cancelledAt=nowIso();o.items.forEach(row=>{const p=state.products.find(x=>x.id===row.id);if(p)p.stock+=row.qty});saveState();renderAll()};window.printOrderById=id=>printOrder(state.orders.find(x=>x.id===id),true);
function printOrder(o,isCopy=false){
  if(!o)return;
  const note=String(o.receiptNote||"").trim();
  const receiptNumber=String(o.number).padStart(3,"0");
  const received=o.payment==="เงินสด"?Number(o.cashReceived??o.total):Number(o.total);
  const change=o.payment==="เงินสด"?Number(o.change??0):0;
  const itemRows=o.items.map(i=>`
    <tr>
      <td class="r-name">${escapeHtml(i.name)}</td>
      <td class="r-qty">${Number(i.qty||0)} × ${money(i.price)}</td>
      <td class="r-amount">${money(i.price*i.qty)}</td>
    </tr>`).join("");
  const discountRow=Number(o.discount||0)>0?`<div class="sum-row"><span>ส่วนลด</span><b>- ${money(o.discount)}</b></div>`:"";
  const cashRows=o.payment==="เงินสด"?`
    <div class="sum-row"><span>ลูกค้าจ่าย</span><b>${money(received)}</b></div>
    <div class="sum-row"><span>เงินทอน</span><b>${money(change)}</b></div>`:"";
  const noteBlock=note?`<div class="receipt-note"><b>${escapeHtml(note)}</b></div>`:"";
  const w=window.open("",`receipt-${receiptNumber}`,"width=520,height=820");
  if(!w){alert("กรุณาอนุญาต Pop-up เพื่อพิมพ์ใบเสร็จ");return}
  w.document.write(`<!doctype html><html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Receipt #${receiptNumber}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
  @page{margin:7mm;size:auto}
  *{box-sizing:border-box}
  body{margin:0;background:#f5f5f5;color:#000;font-family:"Sarabun","TH Sarabun New","Noto Sans Thai",Tahoma,sans-serif}
  .toolbar{position:sticky;top:0;z-index:5;display:flex;gap:8px;padding:10px;background:#fff;border-bottom:1px solid #ddd}
  .toolbar button{flex:1;min-height:44px;border-radius:8px;font:inherit;font-weight:700}
  .toolbar .back-btn{border:1px solid #F2B36F;background:#FFF1DF;color:#D96F0B}
  .toolbar .print-btn{border:1px solid #E67A18;background:#F28C28;color:#fff}
  .receipt-wrap{width:350px;max-width:100%;margin:18px auto;background:#fff;border:1px solid #ddd}
  .receipt{padding:16px 14px;font-size:14px;line-height:1.45;color:#000}
  .brand{text-align:center;padding-bottom:10px;border-bottom:1px solid #111}
  .shop{font-size:20px;font-weight:700}
  .shop-address,.shop-phone{font-size:13px;margin-top:1px}
  .copy-mark{display:inline-block;margin-top:6px;padding:2px 7px;border:1px solid #000;border-radius:999px;font-size:10px;font-weight:600}
  .meta-card{display:grid;grid-template-columns:1fr 1fr;gap:5px 12px;padding:9px 0;border-bottom:1px dashed #777;margin-bottom:8px}
  .meta-card div{font-size:11px;color:#222}.meta-card b{display:block;color:#000;font-size:12px;margin-top:1px}
  .section-title{font-size:11px;font-weight:600;margin:8px 0 3px}
  table{width:100%;border-collapse:collapse}
  td{padding:5px 0;border-bottom:1px dotted #aaa;vertical-align:top;color:#000}
  .r-name{font-weight:500;padding-right:7px}.r-qty{width:92px;font-size:11px}.r-amount{width:70px;text-align:right;font-weight:600}
  .summary{margin-top:7px;padding-top:2px}
  .sum-row{display:flex;justify-content:space-between;gap:10px;padding:3px 0;color:#000}
  .grand-total{display:flex;justify-content:space-between;align-items:flex-end;margin-top:6px;padding-top:7px;border-top:1.5px solid #000}
  .grand-total span{font-size:14px;font-weight:600}.grand-total b{font-size:20px;color:#000}
  .status-line{display:flex;justify-content:space-between;margin-top:6px;padding:5px 0;border-top:1px dotted #999;border-bottom:1px dotted #999;font-size:11px;font-weight:600;color:#000}
  .receipt-note{margin-top:8px;padding:7px 0;border-top:1px dashed #777;border-bottom:1px dashed #777;color:#000}
  .receipt-note span{display:block;font-size:10px}.receipt-note b{display:block;margin-top:2px;font-weight:500}
  .thanks{text-align:center;margin-top:12px;font-size:11px;color:#000}
  @media print{body{background:#fff}.toolbar{display:none!important}.receipt-wrap{width:100%;margin:0;border:0}.receipt{padding:0}}
  </style></head><body>
  <div class="toolbar"><button class="back-btn" id="backToOrders">กลับ</button><button class="print-btn" id="printAgain">พิมพ์ใบเสร็จ</button></div>
  <div class="receipt-wrap"><div class="receipt">
    <div class="brand">
      <div class="shop">${escapeHtml(state.settings.shopName)}</div>
      <div class="shop-address">บ้านดุง อุดรธานี 41190</div>
      <div class="shop-phone">โทรศัพท์ 0897109954</div>
      ${isCopy?'<div class="copy-mark">สำเนาใบเสร็จ</div>':""}
    </div>
    <div class="meta-card">
      <div>เลขออเดอร์<b>#${receiptNumber}</b></div>
      <div>การชำระเงิน<b>${escapeHtml(o.payment||"-")}</b></div>
      <div>พนักงาน<b>${escapeHtml(o.staffName||"-")}</b></div>
      <div>วันที่/เวลา<b>${new Date(o.time).toLocaleString("th-TH")}</b></div>
    </div>
    <div class="section-title">รายการสินค้า</div>
    <table><tbody>${itemRows}</tbody></table>
    <div class="summary">
      ${discountRow}
      ${cashRows}
      <div class="grand-total"><span>รวมสุทธิ</span><b>${money(o.total)}</b></div>
      <div class="status-line"><span>สถานะ</span><span>ชำระเงินแล้ว</span></div>
    </div>
    ${noteBlock}
    <div class="thanks">ขอบคุณที่อุดหนุนค่ะ</div>
  </div></div>
  <script>
  document.getElementById("backToOrders").onclick=function(){try{if(window.opener&&!window.opener.closed){const t=window.opener.document.querySelector('.tab[data-page="orders"]');if(t)t.click();window.opener.focus();window.close();return}}catch(e){}history.back()};
  document.getElementById("printAgain").onclick=function(){window.print()};
  window.onload=function(){const go=()=>setTimeout(function(){window.print()},120);if(document.fonts&&document.fonts.ready){document.fonts.ready.then(go).catch(go)}else{go()}};
  <\/script></body></html>`);
  w.document.close();
}

// Dashboard / realtime 1 second
function paidOrders(){return state.orders.filter(o=>o.status==="paid")}
function ordersForRange(){const valid=paidOrders();if(dashboardRange==="all")return valid;const now=new Date();if(dashboardRange==="today")return valid.filter(o=>new Date(o.time).toDateString()===now.toDateString());const days=Number(dashboardRange),min=new Date(now.getTime()-days*86400000);return valid.filter(o=>new Date(o.time)>=min)}
function secondSeries(){const now=new Date(),labels=[],values=[],orders=paidOrders();for(let off=59;off>=0;off--){const t=new Date(now.getTime()-off*1000);t.setMilliseconds(0);const next=new Date(t.getTime()+1000);labels.push(t.toLocaleTimeString("th-TH",{hour12:false,hour:"2-digit",minute:"2-digit",second:"2-digit"}));values.push(orders.filter(o=>{const d=new Date(o.time);return d>=t&&d<next}).reduce((s,o)=>s+o.total,0))}return{labels,values}}
function todayHourly(){const now=new Date(),labels=[],values=[];for(let h=8;h<=22;h++){labels.push(String(h).padStart(2,"0")+":00");values.push(paidOrders().filter(o=>{const d=new Date(o.time);return d.toDateString()===now.toDateString()&&d.getHours()===h}).reduce((s,o)=>s+o.total,0))}return{labels,values}}
function dailySeries(days){const labels=[],values=[],orders=paidOrders();for(let off=days-1;off>=0;off--){const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()-off);const next=new Date(d);next.setDate(next.getDate()+1);labels.push(d.toLocaleDateString("th-TH",{day:"2-digit",month:"2-digit"}));values.push(orders.filter(o=>{const t=new Date(o.time);return t>=d&&t<next}).reduce((s,o)=>s+o.total,0))}return{labels,values}}
function drawLineChart(canvasId,labels,values,height=230,showEvery=1){
  const canvas=$(canvasId);if(!canvas||!canvas.parentElement)return;
  const width=Math.max(280,canvas.parentElement.clientWidth-30),dpr=window.devicePixelRatio||1;
  canvas.width=width*dpr;canvas.height=height*dpr;canvas.style.width=width+"px";canvas.style.height=height+"px";
  const ctx=canvas.getContext("2d");ctx.scale(dpr,dpr);ctx.clearRect(0,0,width,height);
  const pad={l:46,r:14,t:18,b:34},W=width-pad.l-pad.r,H=height-pad.t-pad.b;
  const max=Math.max(...values,1),nice=Math.max(100,Math.ceil(max/100)*100);
  ctx.font="9px -apple-system,Segoe UI,sans-serif";
  ctx.strokeStyle="#eee4d8";ctx.fillStyle="#8a735e";ctx.lineWidth=1;
  for(let k=0;k<=4;k++){
    const y=pad.t+H-H*k/4;
    ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(width-pad.r,y);ctx.stroke();
    ctx.textAlign="left";ctx.fillText("฿"+Math.round(nice*k/4),2,y+3);
  }
  const n=Math.max(values.length,1),step=n>1?W/(n-1):W;
  const pts=values.map((v,i)=>({
    x:n>1?pad.l+i*step:pad.l+W/2,
    y:pad.t+H-H*(Number(v||0)/nice)
  }));
  if(pts.length){
    ctx.strokeStyle="#E76613";ctx.lineWidth=2.5;ctx.lineJoin="round";ctx.lineCap="round";
    ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.stroke();
    pts.forEach((p,i)=>{
      ctx.fillStyle="#FFFFFF";ctx.strokeStyle="#E76613";ctx.lineWidth=2;
      ctx.beginPath();ctx.arc(p.x,p.y,3.5,0,Math.PI*2);ctx.fill();ctx.stroke();
      if(i%showEvery===0||i===pts.length-1){
        ctx.fillStyle="#8a735e";ctx.textAlign="center";ctx.fillText(labels[i],p.x,pad.t+H+15);
      }
    });
  }
}
function renderSalesCharts(){const a=secondSeries(),b=todayHourly(),c=dailySeries(7),d=dailySeries(30);requestAnimationFrame(()=>{drawLineChart("secondChart",a.labels,a.values,235,10);drawLineChart("todayChart",b.labels,b.values,210,2);drawLineChart("weekChart",c.labels,c.values,210,1);drawLineChart("monthChart",d.labels,d.values,210,5)})}

function renderSalesHistoryStats(){
  const select=$("salesHistoryDate"),box=$("salesHistorySummary");if(!select||!box)return;
  const keys=[...new Set([localDateKey(),...state.orders.map(o=>localDateKey(new Date(o.time)))])].sort().reverse();
  const previous=select.value;
  select.innerHTML=keys.map(k=>`<option value="${k}">${new Date(k+"T12:00:00").toLocaleDateString("th-TH",{day:"2-digit",month:"long",year:"numeric"})}</option>`).join("");
  select.value=keys.includes(previous)?previous:keys[0];
  const key=select.value,all=state.orders.filter(o=>localDateKey(new Date(o.time))===key),paid=all.filter(o=>o.status==="paid"),cancelled=all.filter(o=>o.status==="cancelled"),sales=paid.reduce((s,o)=>s+Number(o.total||0),0);
  box.innerHTML=`<div><span>ออเดอร์สำเร็จ</span><b>${paid.length} ออเดอร์</b></div><div><span>ยอดขาย</span><b>${money(sales)}</b></div><div><span>ยกเลิก</span><b>${cancelled.length} ออเดอร์</b></div><div><span>เลขออเดอร์ล่าสุด</span><b>${all.length?"#"+String(Math.max(...all.map(o=>Number(o.number)||0))).padStart(3,"0"):"-"}</b></div>`;
}
function renderDashboard(){
  if(currentUser?.role!=="owner"){return}
  const os=todayPaidOrders();
  const cashOrders=os.filter(o=>o.payment==="เงินสด"),qrOrders=os.filter(o=>o.payment==="QR");
  const cash=cashOrders.reduce((s,o)=>s+Number(o.total||0),0),qr=qrOrders.reduce((s,o)=>s+Number(o.total||0),0);
  $("paymentSummary").innerHTML=`<div class="pay-line"><span class="pay-label"><svg class="pay-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9h.01M18 15h.01"/></svg><span>เงินสด</span></span><b>${money(cash)} · ${cashOrders.length} ครั้ง</b></div><div class="pay-line"><span class="pay-label"><svg class="pay-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM15 14h2v2h-2zM19 14h1v3h-3v3h-3v-2h2v-2h3z"/></svg><span>QR</span></span><b>${money(qr)} · ${qrOrders.length} ครั้ง</b></div>`;
  const count={};os.forEach(o=>o.items.forEach(i=>count[i.name]=(count[i.name]||0)+i.qty));
  const top=Object.entries(count).sort((a,b)=>b[1]-a[1]).slice(0,5);
  $("topProducts").innerHTML=top.length?top.map((x,i)=>`<div class="top-line"><span>${i+1}. ${x[0]}</span><b>${x[1]} ชิ้น</b></div>`).join(""):"<p class='empty'>ยังไม่มีข้อมูลวันนี้</p>";
  renderDayCloseSummary();renderSalesHistoryStats();renderSalesCharts()
}
function todayPaidOrders(){
  const now=new Date();return state.orders.filter(o=>o.status==="paid"&&new Date(o.time).toDateString()===now.toDateString());
}
function todayCancelledOrders(){
  const now=new Date();return state.orders.filter(o=>o.status==="cancelled"&&new Date(o.time).toDateString()===now.toDateString());
}
function getDayCloseData(){
  const os=todayPaidOrders(),cancelled=todayCancelledOrders();
  const sales=os.reduce((s,o)=>s+Number(o.total||0),0);
  const cash=os.filter(o=>o.payment==="เงินสด").reduce((s,o)=>s+Number(o.total||0),0);
  const qr=os.filter(o=>o.payment==="QR").reduce((s,o)=>s+Number(o.total||0),0);
  const discounts=os.reduce((s,o)=>s+Number(o.discount||0),0);
  const cost=os.reduce((s,o)=>s+Number(o.cost||0),0);
  return {os,cancelled,sales,cash,qr,discounts,cost,profit:sales-cost};
}
function renderDayCloseSummary(){
  const box=$("dayCloseSummary");if(!box)return;
  const d=getDayCloseData();
  const cells=[["ยอดขายรวม",money(d.sales)],["เงินสด",money(d.cash)],["QR",money(d.qr)],["ออเดอร์สำเร็จ",d.os.length+" ออเดอร์"],["ยกเลิก",d.cancelled.length+" ออเดอร์"],["ส่วนลด",money(d.discounts)],["ต้นทุนโดยประมาณ",money(d.cost)],["กำไรขั้นต้น",money(d.profit)]];
  box.innerHTML=cells.map(x=>`<div><span>${x[0]}</span><b>${x[1]}</b></div>`).join("");
}
function printDayClose(){
  const d=getDayCloseData(),date=new Date().toLocaleDateString("th-TH",{day:"2-digit",month:"long",year:"numeric"});
  const w=window.open("","day-close","width=520,height=760");if(!w){alert("กรุณาอนุญาต Pop-up เพื่อพิมพ์สรุป");return}
  w.document.write(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>สรุปปิดยอด</title><style>
  @page{margin:8mm}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans Thai",sans-serif;color:#111}.wrap{max-width:380px;margin:auto}.toolbar{display:flex;gap:8px;margin-bottom:12px}.toolbar button{flex:1;padding:12px;border:0;border-radius:10px;font-weight:800}.print{background:#e76613;color:white}.back{background:#eee}.shop{text-align:center;font-size:20px;font-weight:900}.date{text-align:center;margin:4px 0 14px}.row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed #aaa}.total{font-size:20px;font-weight:900}.foot{text-align:center;margin-top:16px;font-size:12px}@media print{.toolbar{display:none}}
  </style></head><body><div class="wrap"><div class="toolbar"><button class="back" onclick="window.close()">กลับ</button><button class="print" onclick="window.print()">พิมพ์</button></div>
  <div class="shop">${escapeHtml(state.settings.shopName)}</div><div class="date">สรุปปิดยอด · ${date}</div>
  <div class="row total"><span>ยอดขายรวม</span><b>${money(d.sales)}</b></div>
  <div class="row"><span>เงินสด</span><b>${money(d.cash)}</b></div><div class="row"><span>QR</span><b>${money(d.qr)}</b></div>
  <div class="row"><span>ออเดอร์สำเร็จ</span><b>${d.os.length}</b></div><div class="row"><span>ออเดอร์ยกเลิก</span><b>${d.cancelled.length}</b></div>
  <div class="row"><span>ส่วนลดรวม</span><b>${money(d.discounts)}</b></div><div class="row"><span>ต้นทุนโดยประมาณ</span><b>${money(d.cost)}</b></div>
  <div class="row total"><span>กำไรขั้นต้น</span><b>${money(d.profit)}</b></div>
  <div class="foot">บ้านดุง อุดรธานี 41190<br>โทรศัพท์ 0897109954<br>พิมพ์โดย ${escapeHtml(currentUser?.name||"-")}</div></div></body></html>`);
  w.document.close();
}
$("printDayCloseBtn").onclick=printDayClose;
$("salesHistoryDate").onchange=renderSalesHistoryStats;

setInterval(()=>{if(currentUser&&!$("dashboard").classList.contains("hidden")){renderSalesCharts();updateClock()}},1000);
window.addEventListener("resize",()=>{if(currentUser&&!$("dashboard").classList.contains("hidden"))renderSalesCharts()});

// Stock
function lowStockProducts(){return state.products.filter(p=>p.active&&Number(p.stock)<=5).sort((a,b)=>a.stock-b.stock)}
function renderLowStockAlert(){
  const lows=lowStockProducts(),box=$("lowStockBanner");
  if(!box)return;
  if(!lows.length){box.classList.add("hidden");return}
  box.classList.remove("hidden");
  $("lowStockText").textContent=lows.slice(0,4).map(p=>`${p.name} ${p.stock} ${p.unit}`).join(" · ")+(lows.length>4?` · อีก ${lows.length-4} รายการ`:"");
}
$("openLowStockBtn").onclick=()=>openPage("stock");
function renderStock(){
  const lows=lowStockProducts();if($("stockLowCount"))$("stockLowCount").textContent=lows.length?`ใกล้หมด ${lows.length} รายการ`:"สต๊อกปกติ";
  $("stockList").innerHTML=state.products.filter(p=>p.active).sort((a,b)=>a.stock-b.stock||a.name.localeCompare(b.name,"th")).map(p=>`<div class="stock-row ${p.stock<=5?"stock-low-row":""}"><div><b>${p.name}</b><div style="color:#8a735e;font-size:9px">${p.category} · ${money(p.price)} / ${p.unit}</div></div><div class="stock-qty-display"><b>${p.stock}</b> ${p.unit}${p.stock<=5?'<small>ใกล้หมด</small>':""}</div><div class="stock-actions"><button onclick="adjustStock(${p.id},-1)">−1</button><button onclick="adjustStock(${p.id},1)">+1</button><button onclick="setStock(${p.id})">ตั้งค่า</button></div></div>`).join("")
}
window.adjustStock=(id,d)=>{const p=state.products.find(x=>x.id===id);p.stock=Math.max(0,p.stock+d);saveState();renderAll()};
window.setStock=id=>{
  const p=state.products.find(x=>x.id===id);if(!p)return;
  openNumericKeypad({title:`ตั้งค่าสต๊อก ${p.name}`,hint:"ใส่ได้มากกว่า 200",value:p.stock,min:0,max:999999,maxDigits:6,onConfirm:n=>{p.stock=n;saveState();renderAll()}});
};

// Preorder reminder / notifications
let lastReminderSignature="";

let preorderReminderCollapsed=localStorage.getItem("fish_pos_preorder_reminder_collapsed")==="1";
function applyPreorderReminderCollapsed(){
  const box=$("preorderReminder"),btn=$("togglePreorderReminder");if(!box)return;
  box.classList.toggle("collapsed",preorderReminderCollapsed);
  if(btn){
    btn.textContent=preorderReminderCollapsed?"⌄":"⌃";
    btn.title=preorderReminderCollapsed?"เปิดแจ้งเตือน":"พับแจ้งเตือน";
    btn.setAttribute("aria-label",btn.title);
  }
}

function tomorrowWaitingOrders(){
  const key=dateKey(tomorrowDate());
  return state.preorders.filter(o=>o.date===key&&!["ready","cancelled"].includes(o.status)).sort((a,b)=>String(a.pickup).localeCompare(String(b.pickup)));
}
function preorderReminderSummary(){
  const orders=tomorrowWaitingOrders();
  const itemQty=orders.reduce((s,o)=>s+o.items.reduce((a,i)=>a+i.qty,0),0);
  const total=orders.reduce((s,o)=>s+o.total,0);
  const first=orders[0]?.pickup||"-";
  return {orders,itemQty,total,first,signature:orders.map(o=>`${o.id}:${o.status}`).join("|")};
}
function updateNotifyButton(){
  const b=$("enableNotifyBtn");if(!b)return;
  if(!("Notification" in window)){b.textContent="แจ้งเตือนในแอป";b.disabled=true;return}
  if(Notification.permission==="granted"){b.textContent="✓ เปิดแจ้งเตือนแล้ว";b.disabled=true}
  else if(Notification.permission==="denied"){b.textContent="ถูกบล็อกแจ้งเตือน";b.disabled=true}
  else{b.textContent="เปิดแจ้งเตือน";b.disabled=false}
}

function renderPreorderBell(){
  const s=preorderReminderSummary(),dot=$("preorderBellDot"),btn=$("preorderBellBtn"),sub=$("preorderBellSubtitle"),body=$("preorderBellBody");
  clearDismissedIfStatusChangedV37();
  const dismissed=dismissedPreorderIdsV37();
  s.orders=s.orders.filter(o=>!dismissed.has(String(o.id)));
  s.itemQty=s.orders.reduce((sum,o)=>sum+(o.items||[]).reduce((a,i)=>a+Number(i.qty||0),0),0);
  s.total=s.orders.reduce((sum,o)=>sum+Number(o.total||0),0);
  s.first=s.orders[0]?.pickup||"-";
  if(!dot||!btn||!sub||!body)return;
  const has=s.orders.length>0;
  dot.classList.toggle("hidden",!has);
  btn.classList.toggle("has-unread",has);
  sub.textContent=has?`พรุ่งนี้มี ${s.orders.length} ออเดอร์ · รวม ${s.itemQty} ชิ้น`:"ยังไม่มีออเดอร์ล่วงหน้า";
  if(!has){body.innerHTML='<div class="bell-empty">ยังไม่มีรายการสั่งล่วงหน้า</div>';return}
  body.innerHTML=s.orders.slice(0,4).map(o=>{
    const title=o.customer||o.note||"ไม่ระบุชื่อ";
    const items=(o.items||[]).map(i=>`${i.name} x${i.qty}`).join(", ");
    return `<div class="bell-order bell-order-v37" data-preorder-id="${o.id}" title="ปัดซ้ายหรือขวาเพื่อซ่อน">
      <div><b>${o.pickup||"--:--"} · ${title}</b><small>${items}</small></div>
      <strong>${money(o.total||0)}</strong>
      <button type="button" class="bell-dismiss-v37" data-dismiss-preorder="${o.id}" aria-label="ซ่อนการแจ้งเตือน">×</button>
    </div>`;
  }).join("")+(s.orders.length>4?`<div class="bell-more">และอีก ${s.orders.length-4} รายการ</div>`:"");
  bindBellSwipeV37();
}
function togglePreorderBell(force){
  const pop=$("preorderBellPopover");if(!pop)return;
  const show=typeof force==="boolean"?force:pop.classList.contains("hidden");
  pop.classList.toggle("hidden",!show);
}
const DISMISSED_PREORDER_KEY="fish_pos_dismissed_preorder_notifications_v37";
function dismissedPreorderIdsV37(){
  try{return new Set(JSON.parse(localStorage.getItem(DISMISSED_PREORDER_KEY)||"[]").map(String))}catch(e){return new Set()}
}
function dismissPreorderNotificationV37(id){
  const set=dismissedPreorderIdsV37();set.add(String(id));
  localStorage.setItem(DISMISSED_PREORDER_KEY,JSON.stringify([...set]));
  renderPreorderBell();
}
function clearDismissedIfStatusChangedV37(){
  const current=new Set(state.preorders.filter(o=>!["ready","cancelled"].includes(o.status)).map(o=>String(o.id)));
  const kept=[...dismissedPreorderIdsV37()].filter(id=>current.has(id));
  localStorage.setItem(DISMISSED_PREORDER_KEY,JSON.stringify(kept));
}
function bindBellSwipeV37(){
  const body=$("preorderBellBody");if(!body)return;
  body.querySelectorAll(".bell-order-v37").forEach(row=>{
    let startX=0,startY=0;
    row.addEventListener("touchstart",e=>{
      const t=e.touches?.[0];if(!t)return;startX=t.clientX;startY=t.clientY;
    },{passive:true});
    row.addEventListener("touchend",e=>{
      const t=e.changedTouches?.[0];if(!t)return;
      const dx=t.clientX-startX,dy=t.clientY-startY;
      if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)){
        row.classList.add("swiped-away-v37");
        setTimeout(()=>dismissPreorderNotificationV37(row.dataset.preorderId),160);
      }
    },{passive:true});
  });
}

function updatePreorderReminder(showBrowser=false){
  const box=$("preorderReminder");if(!box)return;
  const s=preorderReminderSummary();
  box.classList.add("hidden");
  renderPreorderBell();
  if(!s.orders.length){lastReminderSignature="";updateNotifyButton();return}
  $("preorderReminderTitle").textContent=`พรุ่งนี้มี ${s.orders.length} ออเดอร์ล่วงหน้า`;
  $("preorderReminderText").textContent=`รวม ${s.itemQty} ชิ้น • ${money(s.total)} • เริ่มรับ ${s.first}`;
  updateNotifyButton();
  if(showBrowser&&s.signature&&s.signature!==lastReminderSignature&&"Notification" in window&&Notification.permission==="granted"){
    try{new Notification("พรุ่งนี้มีออเดอร์ปลาเผา",{body:`${s.orders.length} ออเดอร์ • ${s.itemQty} ชิ้น • เริ่มรับ ${s.first}`})}catch(e){}
  }
  lastReminderSignature=s.signature;
}
$("openPreorderReminder").onclick=()=>{window.__preListExplicitDate=true;openPage("preorder");$("preListDate").value=dateKey(tomorrowDate());renderPreorderList()};

$("preorderBellBtn").onclick=()=>togglePreorderBell();
$("preorderBellBody").addEventListener("click",e=>{
  const btn=e.target.closest("[data-dismiss-preorder]");
  if(!btn)return;
  e.stopPropagation();
  dismissPreorderNotificationV37(btn.dataset.dismissPreorder);
});
$("closePreorderBell").onclick=()=>togglePreorderBell(false);
document.addEventListener("click",e=>{
  const wrap=$("preorderBellWrap");
  if(wrap&&!wrap.contains(e.target))togglePreorderBell(false);
});
(function(){
  const host=$("bellTopHost"),wrap=$("preorderBellWrap");
  if(host&&wrap)host.appendChild(wrap);
})();



$("enableNotifyBtn").onclick=async()=>{
  if(!("Notification" in window)){alert("อุปกรณ์นี้ไม่รองรับ Browser Notification แต่แถบเตือนในแอปยังทำงานปกติ");return}
  try{
    const p=await Notification.requestPermission();
    updateNotifyButton();
    if(p==="granted"){
      const s=preorderReminderSummary();
      new Notification("เปิดแจ้งเตือนแล้ว",{body:s.orders.length?`พรุ่งนี้มี ${s.orders.length} ออเดอร์ล่วงหน้า`:"ระบบจะแจ้งเมื่อมีออเดอร์พรุ่งนี้"});
    }
  }catch(e){alert("ไม่สามารถเปิด Browser Notification ได้ในโหมดนี้")}
};
setInterval(()=>{if(currentUser)updatePreorderReminder(true)},60000);

// Preorders
function tomorrowDate(){const d=new Date();d.setDate(d.getDate()+1);d.setHours(0,0,0,0);return d}
function dateKey(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`}
function localDateTimeValue(d){const pad=n=>String(n).padStart(2,"0");return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`}
function populatePreorderTimeSelects(){
  const hour=$("preHour"),minute=$("preMinute");
  if(!hour||!minute)return;

  if(!hour.options.length){
    hour.innerHTML=Array.from({length:24},(_,i)=>{
      const v=String(i).padStart(2,"0");
      return `<option value="${v}">${v}</option>`;
    }).join("");
  }
  if(!minute.options.length){
    minute.innerHTML=Array.from({length:12},(_,i)=>{
      const v=String(i*5).padStart(2,"0");
      return `<option value="${v}">${v}</option>`;
    }).join("");
  }
}

function syncPreDateTime(){
  populatePreorderTimeSelects();
  const date=$("preDate")?.value||"";
  const hour=$("preHour")?.value||"17";
  const minute=$("preMinute")?.value||"00";
  const time=`${hour}:${minute}`;
  if($("preTime"))$("preTime").value=time;
  if($("preDateTime"))$("preDateTime").value=date?`${date}T${time}`:"";
}

function initPreorderDateTime(){
  populatePreorderTimeSelects();
  const d=tomorrowDate();d.setHours(17,0,0,0);

  if($("preDate")&&!$("preDate").value)$("preDate").value=dateKey(d);
  if($("preHour")&&!$("preHour").value)$("preHour").value="17";
  if($("preMinute")&&!$("preMinute").value)$("preMinute").value="00";

  syncPreDateTime();
  if($("preListDate")&&!$("preListDate").value)$("preListDate").value="";
}
function preorderStatusMeta(status){
  return {
    pending:{label:"รอยืนยัน",cls:"pending",next:"confirmed",action:"ยืนยันออเดอร์"},
    confirmed:{label:"ยืนยันแล้ว",cls:"confirmed",next:"preparing",action:"เริ่มเตรียม"},
    preparing:{label:"กำลังเตรียม",cls:"preparing",next:"ready",action:"พร้อมรับ"},
    ready:{label:"พร้อมรับ",cls:"ready",next:null,action:null},
    cancelled:{label:"ยกเลิก",cls:"cancelled",next:null,action:null}
  }[status]||{label:"รอยืนยัน",cls:"pending",next:"confirmed",action:"ยืนยันออเดอร์"};
}

function getPreorderCategories(){
  const seen=[];
  state.products.filter(p=>p.active).forEach(p=>{
    if(!seen.includes(p.category))seen.push(p.category);
  });
  return seen;
}

function renderPreCategoryTabs(){
  const box=$("preCategoryTabs");if(!box)return;
  const cats=getPreorderCategories();
  const valid=preorderCategory==="all"||cats.includes(preorderCategory);
  if(!valid)preorderCategory="all";
  box.innerHTML=[
    `<button type="button" class="${preorderCategory==="all"?"active":""}" data-pre-cat="all">ทั้งหมด</button>`,
    ...cats.map(cat=>`<button type="button" class="${preorderCategory===cat?"active":""}" data-pre-cat="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`)
  ].join("");
  box.querySelectorAll("[data-pre-cat]").forEach(btn=>{
    btn.onclick=()=>{
      preorderCategory=btn.dataset.preCat;
      renderPreorder();
    };
  });
}


function setPreorderPageV25(view){
  preorderPageViewV25=view==="create"?"create":"list";
  document.querySelectorAll("[data-pre-page-tab]").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.prePageTab===preorderPageViewV25);
  });
  document.querySelectorAll("[data-pre-page-panel]").forEach(panel=>{
    panel.classList.toggle("active",panel.dataset.prePagePanel===preorderPageViewV25);
  });
  if(preorderPageViewV25==="list")renderPreorderList();
  else renderPreorder();
}

function renderPreorder(){
  initPreorderDateTime();
  syncPreDateTime();

  const dtValue=$("preDateTime")?.value;
  const dt=dtValue?new Date(dtValue):tomorrowDate();
  if($("tomorrowBadge"))$("tomorrowBadge").textContent="รับ "+dt.toLocaleString("th-TH",{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});

  renderPreCategoryTabs();

  let products=state.products.filter(p=>p.active);
  if(preorderCategory!=="all")products=products.filter(p=>p.category===preorderCategory);
  products=products.slice().sort((a,b)=>a.price-b.price||a.name.localeCompare(b.name,"th"));

  $("preProducts").innerHTML=products.length?products.map(p=>{
    const r=preorderCart.find(x=>x.id===p.id),q=r?.qty||0;
    return `<div class="pre-product pre-product-v24 ${q>0?"selected":""}">
      <div class="pre-product-copy">
        <small>${escapeHtml(p.category)}</small>
        <b>${escapeHtml(p.name)}</b>
        <span>${money(p.price)}</span>
      </div>
      <div class="pre-controls">
        <button type="button" onclick="changePreQty(${p.id},-1)">−</button>
        <button type="button" class="pre-qty-input pre-qty-button" onclick="openPreQtyKeypad(${p.id})" aria-label="จำนวน ${escapeHtml(p.name)}">${q}</button>
        <button type="button" onclick="changePreQty(${p.id},1)">+</button>
      </div>
    </div>`;
  }).join(""):'<p class="empty">ไม่มีสินค้าในหมวดนี้</p>';

  $("preCartItems").innerHTML=preorderCart.length
    ?preorderCart.slice().sort((a,b)=>b.price-a.price).map(r=>`<div class="pre-row pre-row-v24"><span>${escapeHtml(r.name)} × ${r.qty}</span><b>${money(r.price*r.qty)}</b></div>`).join("")
    :'<p class="empty">ยังไม่ได้เลือกสินค้า</p>';

  $("preTotal").textContent=money(preorderCart.reduce((s,r)=>s+r.price*r.qty,0));
}

function preorderSearchText(o){
  return [
    o.customer,
    o.phone,
    o.note,
    o.staffName,
    ...(o.items||[]).flatMap(i=>[i.name,i.price,i.qty])
  ].join(" ").toLowerCase();
}

function renderPreorderList(){
  const selected=$("preListDate")?.value||"";
  const query=String($("preListSearch")?.value||"").trim().toLowerCase();

  let list=state.preorders.slice().sort((a,b)=>{
    const aCreated=Date.parse(a.createdAt||"")||Number(a.id||0);
    const bCreated=Date.parse(b.createdAt||"")||Number(b.id||0);
    if(bCreated!==aCreated)return bCreated-aCreated;
    return Number(b.id||0)-Number(a.id||0);
  });

  if(selected)list=list.filter(p=>p.date===selected);
  if(preorderStatusFilter!=="all")list=list.filter(p=>(p.status||"pending")===preorderStatusFilter);
  if(query)list=list.filter(o=>preorderSearchText(o).includes(query));

  if(selected){
    const d=new Date(selected+"T12:00:00");
    $("preListTitle").textContent="วันที่ "+d.toLocaleDateString("th-TH",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
  }else{
    $("preListTitle").textContent="รายการสั่งล่วงหน้าทั้งหมด";
  }

  const prep={};
  list.filter(x=>x.status!=="cancelled").forEach(o=>(o.items||[]).forEach(i=>prep[i.name]=(prep[i.name]||0)+i.qty));
  $("preparationSummary").textContent=Object.keys(prep).length
    ?"สรุปของที่ต้องเตรียม: "+Object.entries(prep).map(([n,q])=>`${n} ${q}`).join(" • ")
    :"ยังไม่มีรายการที่ต้องเตรียม";

  const box=$("preorderList");
  if(!list.length){
    box.innerHTML='<div class="empty preorder-empty-card">ไม่พบออเดอร์สั่งล่วงหน้า</div>';
    return;
  }

  box.innerHTML=list.map(o=>{
    const meta=preorderStatusMeta(o.status||"pending");
    const pickupDate=new Date(o.date+"T12:00:00").toLocaleDateString("th-TH",{day:"2-digit",month:"short",year:"2-digit"});
    const itemText=(o.items||[]).map(i=>`${escapeHtml(i.name)} ×${i.qty}`).join(" · ");
    const nextBtn=meta.next
      ?`<button type="button" class="pre-next-status" onclick="advancePreStatus(${o.id})">${meta.action}</button>`
      :"";
    const cancelBtn=o.status!=="cancelled"
      ?`<button type="button" class="pre-cancel-status" onclick="setPreStatus(${o.id},'cancelled')" aria-label="ยกเลิกออเดอร์">ยกเลิก</button>`
      :"";

    return `<article class="preorder-card-row">
      <div class="preorder-card-date">
        <b>${pickupDate}</b>
        <strong>${escapeHtml(o.pickup||"-")}</strong>
      </div>

      <div class="preorder-card-customer">
        <div class="preorder-card-title">
          <b>${escapeHtml(o.customer||"-")}</b>
          <span class="pre-status-badge ${meta.cls}">${meta.label}</span>
        </div>
        <small>${escapeHtml(o.phone||"ไม่มีเบอร์โทร")}</small>
        ${o.note?`<small class="pre-note">หมายเหตุ: ${escapeHtml(o.note)}</small>`:""}
      </div>

      <div class="preorder-card-items">
        <b>${(o.items||[]).reduce((s,i)=>s+Number(i.qty||0),0)} รายการ</b>
        <span>${itemText||"-"}</span>
      </div>

      <div class="preorder-card-total">
        <strong>${money(o.total)}</strong>
        <small>${escapeHtml(o.staffName||"-")}</small>
      </div>

      <div class="preorder-card-actions">
        ${nextBtn}
        ${cancelBtn}
      </div>
    </article>`;
  }).join("");
}

window.changePreQty=(id,d)=>{
  const el=currentTapElement();tapFeedback(el);playQtySound(d>0);
  const p=state.products.find(x=>x.id===id);if(!p)return;
  let r=preorderCart.find(x=>x.id===id);
  if(!r&&d>0){r={id:p.id,name:p.name,price:p.price,qty:0};preorderCart.push(r)}
  if(!r)return;
  r.qty=Math.min(100,r.qty+d);
  if(r.qty<=0)preorderCart=preorderCart.filter(x=>x.id!==id);
  renderPreorder();
};

window.setPreQty=(id,value)=>{
  const p=state.products.find(x=>x.id===id);if(!p)return;
  let qty=Math.min(100,Math.max(0,Number(String(value??"").replace(/\D/g,""))||0));
  let r=preorderCart.find(x=>x.id===id);
  if(qty<=0)preorderCart=preorderCart.filter(x=>x.id!==id);
  else if(r)r.qty=qty;
  else preorderCart.push({id:p.id,name:p.name,price:p.price,qty});
  renderPreorder();
};

window.openPreQtyKeypad=id=>{
  const p=state.products.find(x=>x.id===id);if(!p)return;
  const r=preorderCart.find(x=>x.id===id);
  openNumericKeypad({
    title:`จำนวน ${p.name}`,
    hint:"สูงสุด 100",
    value:r?.qty||0,
    min:0,max:100,maxDigits:3,
    onConfirm:n=>setPreQty(id,n)
  });
};

$("clearPreorderBtn").onclick=()=>{preorderCart=[];renderPreorder()};

if($("preDate"))$("preDate").addEventListener("change",()=>{syncPreDateTime();renderPreorder()});
if($("preHour"))$("preHour").addEventListener("change",()=>{syncPreDateTime();renderPreorder()});
if($("preMinute"))$("preMinute").addEventListener("change",()=>{syncPreDateTime();renderPreorder()});

$("savePreorderBtn").onclick=()=>{
  syncPreDateTime();
  const customer=$("preCustomer").value.trim();
  const dtValue=$("preDateTime").value;

  if(!customer){alert("กรุณาใส่ชื่อลูกค้า");return}
  if(!dtValue){alert("กรุณาเลือกวันที่และเวลารับ");return}
  if(!preorderCart.length){alert("กรุณาเลือกสินค้า");return}

  const dt=new Date(dtValue);
  const o={
    id:Date.now(),
    date:dateKey(dt),
    customer,
    phone:$("prePhone").value.trim(),
    pickup:`${$("preHour").value}:${$("preMinute").value}`,
    note:$("preNote").value.trim(),
    items:preorderCart.map(x=>({...x})),
    total:preorderCart.reduce((s,x)=>s+x.price*x.qty,0),
    status:"pending",
    createdAt:nowIso(),
    staffName:currentUser.name
  };

  state.preorders.push(o);
  saveState();

  preorderCart=[];
  ["preCustomer","prePhone","preNote"].forEach(id=>$(id).value="");

  // หลังบันทึก ให้กลับไปหน้ารายการสั่งล่วงหน้าทันที
  preorderStatusFilter="all";
  if($("preListDate"))$("preListDate").value="";
  document.querySelectorAll("#preStatusTabs [data-pre-status]").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.preStatus==="all");
  });
  renderPreorder();
  updatePreorderReminder(true);
  setPreorderPageV25("list");
  renderPreorderList();
};

window.setPreStatus=(id,status)=>{
  const allowed=["pending","confirmed","preparing","ready","cancelled"];
  if(!allowed.includes(status))return;
  const o=state.preorders.find(x=>x.id===id);if(!o)return;
  o.status=status;
  o.statusUpdatedAt=nowIso();
  saveState();
  renderPreorderList();
  updatePreorderReminder();
  renderPreorderBell();
};

window.advancePreStatus=id=>{
  const o=state.preorders.find(x=>x.id===id);if(!o)return;
  const next={pending:"confirmed",confirmed:"preparing",preparing:"ready"}[o.status||"pending"];
  if(next)setPreStatus(id,next);
};

if($("preListDate"))$("preListDate").addEventListener("change",renderPreorderList);
if($("preListSearch"))$("preListSearch").addEventListener("input",renderPreorderList);

$("preListAllBtn").onclick=()=>{$("preListDate").value="";renderPreorderList()};
$("preListTomorrowBtn").onclick=()=>{$("preListDate").value=dateKey(tomorrowDate());renderPreorderList()};


document.querySelectorAll("[data-pre-page-tab]").forEach(btn=>{
  btn.onclick=()=>setPreorderPageV25(btn.dataset.prePageTab);
});

document.querySelectorAll("#preStatusTabs [data-pre-status]").forEach(btn=>{
  btn.onclick=()=>{
    preorderStatusFilter=btn.dataset.preStatus;
    document.querySelectorAll("#preStatusTabs [data-pre-status]").forEach(x=>x.classList.toggle("active",x===btn));
    renderPreorderList();
  };
});


// Export sales CSV by selected date or all
function csvCell(v){const s=String(v??"").replaceAll('"','""');return `"${s}"`}
function paidOrdersForExport(dateValue="all"){
  return state.orders.filter(o=>o.status==="paid"&&(dateValue==="all"||dateKey(new Date(o.time))===dateValue)).slice().sort((a,b)=>new Date(a.time)-new Date(b.time));
}
function exportSalesCsv(dateValue="all"){
  const orders=paidOrdersForExport(dateValue);
  const headers=["วันที่","เวลา","เลขออเดอร์","รายการสินค้า","จำนวนรวม","ส่วนลด","ยอดสุทธิ","วิธีชำระ","เงินรับ","เงินทอน","พนักงาน","ต้นทุน","กำไรขั้นต้น"];
  const rows=orders.map(o=>{const d=new Date(o.time),qty=o.items.reduce((s,i)=>s+i.qty,0),total=Number(o.total||0),cost=Number(o.cost||0),profit=Number(o.grossProfit??(total-cost));return [d.toLocaleDateString("th-TH"),d.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),`#${o.number}`,o.items.slice().sort((a,b)=>b.price-a.price).map(i=>`${i.name} x${i.qty}`).join(" | "),qty,Number(o.discount||0),total,o.payment,Number(o.cashReceived??o.total??0),Number(o.change||0),o.staffName||"-",cost,profit]});
  const totalSales=orders.reduce((s,o)=>s+Number(o.total||0),0),totalCost=orders.reduce((s,o)=>s+Number(o.cost||0),0),cash=orders.filter(o=>o.payment==="เงินสด").reduce((s,o)=>s+Number(o.total||0),0),qr=orders.filter(o=>o.payment==="QR").reduce((s,o)=>s+Number(o.total||0),0);
  const label=dateValue==="all"?"ทั้งหมด":new Date(dateValue+"T12:00:00").toLocaleDateString("th-TH");
  const lines=[headers,...rows,[],["สรุปยอดขาย",label],["จำนวนออเดอร์",orders.length],["ยอดขายรวม",totalSales],["เงินสด",cash],["QR",qr],["ต้นทุนรวม",totalCost],["กำไรขั้นต้น",totalSales-totalCost]];
  const csv="\uFEFF"+lines.map(r=>r.map(csvCell).join(",")).join("\r\n"),blob=new Blob([csv],{type:"text/csv;charset=utf-8;"}),a=document.createElement("a"),url=URL.createObjectURL(blob);
  a.href=url;a.download=dateValue==="all"?"ยอดขาย-ทั้งหมด.csv":`ยอดขาย-${dateValue}.csv`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function initExportDate(){if($("exportSalesDate")&&!$("exportSalesDate").value)$("exportSalesDate").value=dateKey(new Date())}
$("exportSelectedCsvBtn").onclick=()=>{initExportDate();exportSalesCsv($("exportSalesDate").value)};
$("exportAllCsvBtn").onclick=()=>exportSalesCsv("all");

// Admin

function renderCategoryManager(){
  const box=$("categoryManager");if(!box)return;
  const cats=getCategoryList();
  box.innerHTML=cats.length?cats.map((cat,i)=>`<div class="category-manager-row category-manager-row-v37">
    <input id="catName_${i}" value="${escapeHtml(cat)}" aria-label="ชื่อหมวด ${escapeHtml(cat)}">
    <div class="category-manager-actions-v37">
      <button class="secondary category-arrow-v37" onclick="moveCategory(${i},-1)" ${i===0?"disabled":""} title="เลื่อนไปซ้าย">←</button>
      <button class="secondary category-arrow-v37" onclick="moveCategory(${i},1)" ${i===cats.length-1?"disabled":""} title="เลื่อนไปขวา">→</button>
      <button class="primary category-save-v37" onclick="renameCategory(${i})">บันทึกชื่อ</button>
      <button class="category-trash-v37" onclick="deleteCategoryByIndex(${i})" title="ลบหมวด" aria-label="ลบหมวด ${escapeHtml(cat)}">ลบ</button>
    </div>
  </div>`).join(""):'<p class="empty">ยังไม่มีหมวด</p>';
}
window.moveCategory=(index,dir)=>{
  const arr=getCategoryList(),next=index+dir;if(next<0||next>=arr.length)return;
  [arr[index],arr[next]]=[arr[next],arr[index]];state.settings.categoryOrder=arr;saveState();renderCategories();renderAdmin();
};
window.renameCategory=index=>{
  const arr=getCategoryList(),oldName=arr[index],input=$(`catName_${index}`),newName=String(input?.value||"").trim();
  if(!oldName||!newName)return;
  if(newName!==oldName&&arr.includes(newName)){alert("มีหมวดชื่อนี้อยู่แล้ว");return}
  state.products.forEach(p=>{if(p.category===oldName)p.category=newName});
  state.settings.customCategories=(state.settings.customCategories||[]).map(x=>x===oldName?newName:x);
  state.settings.categoryOrder=arr.map(x=>x===oldName?newName:x);
  if(currentCategory===oldName)currentCategory=newName;
  saveState();renderAll();
};
window.deleteCategoryByIndex=index=>{
  const arr=getCategoryList(),name=arr[index];
  if(!name)return;
  const used=state.products.filter(p=>p.category===name);
  const detail=used.length?`\nสินค้า ${used.length} รายการในหมวดนี้จะถูกย้ายไปหมวด “อื่นๆ”`:"";
  if(!confirm(`ลบหมวด “${name}” ใช่ไหม?${detail}`))return;

  if(used.length){
    used.forEach(p=>p.category="อื่นๆ");
    if(!Array.isArray(state.settings.customCategories))state.settings.customCategories=[];
    if(!state.settings.customCategories.includes("อื่นๆ"))state.settings.customCategories.push("อื่นๆ");
  }
  state.settings.customCategories=(state.settings.customCategories||[]).filter(x=>x!==name);
  state.settings.categoryOrder=(state.settings.categoryOrder||[]).filter(x=>x!==name);
  if(currentCategory===name)currentCategory="ทั้งหมด";
  saveState();renderAll();
};



function preserveAdminScrollV27(fn){
  const adminVisible=$("admin") && !$("admin").classList.contains("hidden");
  const y=adminVisible?(window.scrollY||0):0;
  const result=fn();
  if(adminVisible){
    requestAnimationFrame(()=>{
      window.scrollTo({top:y,left:0,behavior:"auto"});
      requestAnimationFrame(()=>window.scrollTo({top:y,left:0,behavior:"auto"}));
    });
  }
  return result;
}



function renderAdmin(){
  if(currentUser?.role!=="owner")return;
  $("shopNameInput").value=state.settings.shopName;$("nextOrderInput").value=ensureDailyOrderCounter();if($("promptPayIdInput"))$("promptPayIdInput").value=state.settings.promptPayId||"";
  $("staffInfo").innerHTML=STAFF_LIST.map(s=>`<div class="staff-admin-row"><span><b>${s.name}</b> · ${s.role==="owner"?"เจ้าของ":"พนักงาน"}</span><code>PIN ${s.pin}</code></div>`).join("");

  const cats=[...getCategoryList()];if(!cats.includes("อื่นๆ"))cats.push("อื่นๆ");
  const newSel=$("newCategory"),editSel=$("editCategory");
  if(newSel){const keep=newSel.value;newSel.innerHTML=cats.map(x=>`<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join("");if(cats.includes(keep))newSel.value=keep}
  if(editSel&&!editSel.options.length)editSel.innerHTML=cats.map(x=>`<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join("");
  renderCategoryManager();

  $("adminProducts").innerHTML=`<table><tr><th>ชื่อ</th><th>หมวด</th><th>ราคา</th><th>ต้นทุน</th><th>สต๊อก</th><th>สถานะ</th><th>จัดการ</th></tr>${state.products.slice().sort((a,b)=>b.price-a.price).map(p=>`<tr><td>${escapeHtml(p.name)}</td><td>${escapeHtml(p.category)}</td><td>${money(p.price)}</td><td>${money(p.cost)}</td><td>${p.stock} ${escapeHtml(p.unit)}</td><td>${p.active?"เปิดขาย":"ปิดขาย"}</td><td><button class="btn-secondary-orange compact" onclick="editProduct(${p.id})">แก้ไข</button> <button class="btn-neutral compact" onclick="toggleProduct(${p.id})">${p.active?"ปิดขาย":"เปิดขาย"}</button></td></tr>`).join("")}</table>`;
  updateAdminQrPreview();renderAdminDynamicQr();initExportDate();
}
$("saveShopBtn").onclick=()=>preserveAdminScrollV27(()=>{
  state.settings.shopName=$("shopNameInput").value.trim()||"ร้านทิพย์เกษรเมี่ยงปลาเผา";
  ensureDailyOrderCounter();
  saveState();
  if($("shopTitle"))$("shopTitle").textContent=state.settings.shopName;
  alert("บันทึกแล้ว");
});

$("addCategoryBtn").onclick=()=>{
  const name=$("newCategoryName").value.trim();
  if(!name){alert("กรุณาใส่ชื่อหมวด");return}
  if(!Array.isArray(state.settings.customCategories))state.settings.customCategories=[];
  if(!state.settings.customCategories.includes(name))state.settings.customCategories.push(name);
  if(!Array.isArray(state.settings.categoryOrder))state.settings.categoryOrder=[];
  if(!state.settings.categoryOrder.includes(name))state.settings.categoryOrder.push(name);
  saveState();$("newCategoryName").value="";renderAdmin();$("newCategory").value=name;renderCategories();
};


["newPrice","newCost","editPrice","editCost"].forEach(id=>{
  const el=$(id);if(!el)return;
  el.addEventListener("input",()=>{el.value=el.value.replace(/\D/g,"").slice(0,8)});
});


["newStock","editStock"].forEach(id=>{
  const el=$(id);if(!el)return;
  el.addEventListener("input",()=>{el.value=el.value.replace(/\D/g,"").slice(0,6)});
});

$("addProductBtn").onclick=()=>{
  const name=$("newName").value.trim(),category=$("newCategory").value||"อื่นๆ";if(!name){alert("กรุณาใส่ชื่อสินค้า");return}
  const id=state.products.reduce((m,p)=>Math.max(m,p.id),0)+1;
  state.products.push({id,name,category,price:Math.max(0,Number($("newPrice").value)||0),cost:Math.max(0,Number($("newCost").value)||0),stock:Math.max(0,Number($("newStock").value)||0),unit:$("newUnit").value.trim()||"ชิ้น",active:true});
  ["newName","newPrice","newCost","newStock","newUnit"].forEach(id=>$(id).value="");saveState();renderAll();
};
window.editProduct=id=>{
  const p=state.products.find(x=>x.id===id);if(!p)return;
  $("editProductId").value=id;$("editName").value=p.name;
  const editSel=$("editCategory"),cats=[...getCategoryList()];if(!cats.includes("อื่นๆ"))cats.push("อื่นๆ");
  editSel.innerHTML=cats.map(x=>`<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join("");editSel.value=p.category;
  $("editPrice").value=p.price;$("editCost").value=p.cost;$("editStock").value=p.stock;$("editUnit").value=p.unit;$("editProductModal").classList.remove("hidden");
};
$("closeEditProduct").onclick=()=>$("editProductModal").classList.add("hidden");
$("saveEditProduct").onclick=()=>{
  const p=state.products.find(x=>x.id===Number($("editProductId").value));if(!p)return;
  p.name=$("editName").value.trim()||p.name;p.category=$("editCategory").value;p.price=Math.max(0,Number($("editPrice").value)||0);p.cost=Math.max(0,Number($("editCost").value)||0);p.stock=Math.max(0,Number($("editStock").value)||0);p.unit=$("editUnit").value.trim()||p.unit;
  saveState();$("editProductModal").classList.add("hidden");renderAll();
};
window.toggleProduct=id=>{const p=state.products.find(x=>x.id===id);p.active=!p.active;saveState();renderAll()};
function updateQrDisplay(){const src=state.settings.qrImage||"";if(src){$("paymentQrImage").src=src;$("paymentQrImage").style.display="block";$("qrFullscreenImage").src=src;$("qrPlaceholder").style.display="none"}else{$("paymentQrImage").style.display="none";$("qrPlaceholder").style.display="block"}}
function updateAdminQrPreview(){if(currentUser?.role!=="owner")return;const src=state.settings.qrImage||"";if(src){$("adminQrPreview").src=src;$("adminQrPreview").style.display="block";$("adminQrEmpty").style.display="none"}else{$("adminQrPreview").style.display="none";$("adminQrEmpty").style.display="block"}}

$("savePromptPayBtn").onclick=()=>preserveAdminScrollV27(()=>{
  const value=$("promptPayIdInput").value.trim();
  if(value){
    try{normalizePromptPayTarget(value)}
    catch(e){alert(e.message);return}
  }
  state.settings.promptPayId=value;
  saveState();
  renderAdminDynamicQr();
  alert(value?"บันทึก PromptPay แล้ว":"ลบ PromptPay แล้ว");
});

$("qrFile").onchange=e=>{const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{state.settings.qrImage=String(r.result);saveState();updateQrDisplay();updateAdminQrPreview()};r.readAsDataURL(f)};
$("removeQrBtn").onclick=()=>{state.settings.qrImage="";saveState();updateQrDisplay();updateAdminQrPreview()};
$("exportBtn").onclick=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="fish-pos-backup.json";a.click();URL.revokeObjectURL(a.href)};
$("exportTodayCsvAdminBtn").onclick=()=>exportSalesCsv(dateKey(new Date()));
$("importBtn").onclick=()=>$("importFile").click();
$("importFile").onchange=e=>{const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{state=JSON.parse(r.result);state.staff=clone(STAFF_LIST);if(!Array.isArray(state.preorders))state.preorders=[];if(!state.settings)state.settings=clone(demoState.settings);if(!state.settings.dailyOrderCounters)state.settings.dailyOrderCounters={};if(!Array.isArray(state.settings.customCategories))state.settings.customCategories=[];ensureDailyOrderCounter();saveState();renderAll();alert("นำเข้าข้อมูลสำเร็จ")}catch(err){alert("ไฟล์ไม่ถูกต้อง")}};r.readAsText(f)};
$("resetBtn").onclick=()=>{if(confirm("รีเซ็ตข้อมูลทั้งหมดใช่ไหม?")){state=clone(demoState);saveState();location.reload()}};



// Navigation
function openPage(pageId){
  if(["dashboard","admin"].includes(pageId) && currentUser?.role!=="owner"){
    pageId="sale";
  }

  document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x.dataset.page===pageId));
  document.querySelectorAll(".page").forEach(x=>x.classList.add("hidden"));

  const page=$(pageId);
  if(page)page.classList.remove("hidden");

  if(pageId==="dashboard")setTimeout(()=>{renderDashboard();renderSalesCharts();initExportDate()},40);
  if(pageId==="preorder"){
    setPreorderPageV25("list");
    renderPreorder();
    renderPreorderList();
  }
  if(pageId==="admin"){
    renderAdmin();
      window.scrollTo({top:0,left:0,behavior:"auto"});
    requestAnimationFrame(()=>window.scrollTo({top:0,left:0,behavior:"auto"}));
  }
}
document.querySelectorAll(".tab").forEach(btn=>{
  btn.onclick=()=>{
    const target=btn.dataset.page;
    if(btn.classList.contains("active")){
      // Do not re-render or move the page when clicking the active sidebar tab again.
      return;
    }
    openPage(target);
  };
});

const sidebar=$("appSidebar"),sidebarToggle=$("sidebarToggle");
function setSidebarExpanded(expanded){
  if(!sidebar)return;
  sidebar.classList.toggle("collapsed",!expanded);
  sidebar.classList.toggle("expanded",expanded);
  if(sidebarToggle){
    sidebarToggle.setAttribute("aria-label",expanded?"พับเมนู":"ขยายเมนู");
    sidebarToggle.title=expanded?"พับเมนู":"ขยายเมนู";
  }
  localStorage.setItem("fish_pos_sidebar_expanded",expanded?"1":"0");
}
if(sidebar&&window.innerWidth>760)setSidebarExpanded(localStorage.getItem("fish_pos_sidebar_expanded")==="1");
if(sidebarToggle)sidebarToggle.onclick=()=>setSidebarExpanded(sidebar.classList.contains("collapsed"));
document.querySelectorAll("#mainTabs .tab").forEach(btn=>{
  const label=btn.querySelector("span")?.textContent?.trim()||"เมนู";
  btn.title=label;
  btn.setAttribute("aria-label",label);
});


function salePageActive(){return currentUser&&!$("sale").classList.contains("hidden")}
["gesturestart","gesturechange","gestureend"].forEach(type=>document.addEventListener(type,e=>{if(salePageActive())e.preventDefault()},{passive:false}));
document.addEventListener("touchmove",e=>{if(salePageActive()&&e.touches&&e.touches.length>1)e.preventDefault()},{passive:false});
document.addEventListener("wheel",e=>{if(salePageActive()&&e.ctrlKey)e.preventDefault()},{passive:false});
document.addEventListener("keydown",e=>{if(salePageActive()&&(e.ctrlKey||e.metaKey)&&["=","+","-","0"].includes(e.key))e.preventDefault()});

ensurePosUiPatch();initPaymentKeypad();initPreorderDateTime();initExportDate();initLogin();
