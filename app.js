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
    speakThai(`รับเงินคิวอาร์ ${totalAmount} บาทค่ะ`);
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
let state=loadState(),currentUser=null,selectedStaffId=null,cart=[],selectedMethod=null,lastOrder=null,currentCategory="ปลาชุดใหญ่",dashboardRange="today",lastCashReceived=0,lastChange=0,preorderCart=[];
// V10.7 shop name migration for existing saved data
if(state.settings&&state.settings.shopName===("ร้านทิพย์เกษรเมี่ยงปลาเผา"+"ทิพย์เกษร")){state.settings.shopName="ร้านทิพย์เกษรเมี่ยงปลาเผา";saveState();}
function saveState(){state.staff=clone(STAFF_LIST);localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
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
  if(staff.role!=="owner"&&!$("dashboard").classList.contains("hidden"))openPage("sale");
  if(staff.role!=="owner"&&!$("admin").classList.contains("hidden"))openPage("sale");
  renderAll();
}
function attemptLogin(){if(!selectedStaffId){$("loginHint").textContent="กรุณาเลือกพนักงานก่อน";return}const staff=STAFF_LIST.find(s=>s.id===selectedStaffId);if(!staff||staff.pin!==$("pinInput").value){$("loginHint").textContent="PIN ไม่ถูกต้อง กรุณาลองใหม่";clearPin();return}applyCurrentUser(staff)}
$("logoutBtn").onclick=()=>location.reload();

let pendingSwitchStaffId=null;
function renderSwitchPinDots(){[...$("switchPinDots").children].forEach((d,i)=>d.classList.toggle("filled",i<$("switchPinInput").value.length))}
function clearSwitchPin(message="กรอก PIN 4 หลัก"){$("switchPinInput").value="";renderSwitchPinDots();$("switchPinHint").textContent=message}
function openStaffSwitch(id){
  const staff=STAFF_LIST.find(s=>s.id===Number(id));if(!staff||staff.id===currentUser?.id){if($("staffQuickSwitch"))$("staffQuickSwitch").value=String(currentUser?.id||"");return}
  pendingSwitchStaffId=staff.id;$("switchStaffName").textContent=staff.name;clearSwitchPin();$("staffSwitchModal").classList.remove("hidden");
}
function closeStaffSwitch(){
  $("staffSwitchModal").classList.add("hidden");pendingSwitchStaffId=null;clearSwitchPin();
  if($("staffQuickSwitch")&&currentUser)$("staffQuickSwitch").value=String(currentUser.id);
}
function confirmStaffSwitch(){
  const staff=STAFF_LIST.find(s=>s.id===pendingSwitchStaffId);if(!staff)return;
  if($("switchPinInput").value!==staff.pin){clearSwitchPin("PIN ไม่ถูกต้อง กรุณาลองใหม่");return}
  $("staffSwitchModal").classList.add("hidden");pendingSwitchStaffId=null;clearSwitchPin();applyCurrentUser(staff);
}
$("staffQuickSwitch").onchange=e=>openStaffSwitch(e.target.value);
$("closeStaffSwitch").onclick=closeStaffSwitch;
$("staffSwitchModal").addEventListener("click",e=>{if(e.target===$("staffSwitchModal"))closeStaffSwitch()});
document.querySelectorAll("[data-switch-pin]").forEach(b=>b.onclick=()=>{if($("switchPinInput").value.length<4){$("switchPinInput").value+=b.dataset.switchPin;renderSwitchPinDots();if($("switchPinInput").value.length===4)setTimeout(confirmStaffSwitch,100)}});
$("switchPinBack").onclick=()=>{$("switchPinInput").value=$("switchPinInput").value.slice(0,-1);renderSwitchPinDots()};
$("switchPinEnter").onclick=confirmStaffSwitch;


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
function filteredProducts(){const q=$("menuSearch").value.trim().toLowerCase();return state.products.filter(p=>p.active&&(currentCategory==="ทั้งหมด"||p.category===currentCategory)&&p.name.toLowerCase().includes(q)).slice().sort((a,b)=>a.price-b.price||a.name.localeCompare(b.name,"th"))}
function renderProducts(){$("products").innerHTML=filteredProducts().map(p=>`<button class="product ${p.stock<=5?"low":""}" data-cat="${p.category}" onclick="addItem(${p.id})" ${p.stock<=0?"disabled":""}><strong>${p.name}</strong><span class="price">${money(p.price)}</span>${p.stock<=0?'<small>สินค้าหมด</small>':""}</button>`).join("")||'<p class="empty">ไม่พบเมนู</p>'}
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
window.addItem=id=>{const el=currentTapElement();tapFeedback(el);playTapSound();const p=state.products.find(x=>x.id===id);if(!p||p.stock<=0)return;const row=cart.find(x=>x.id===id),qty=row?row.qty+1:1;if(qty>p.stock){alert("สต๊อกไม่พอ");return}if(row)row.qty++;else cart.push({id:p.id,name:p.name,price:p.price,cost:p.cost,qty:1});renderCart()};
window.changeQty=(id,d)=>{const el=currentTapElement();tapFeedback(el);playQtySound(d>0);const row=cart.find(x=>x.id===id);if(!row)return;const p=state.products.find(x=>x.id===id);row.qty+=d;if(row.qty<=0)cart=cart.filter(x=>x.id!==id);else{row.qty=Math.min(row.qty,p.stock,100)}renderCart()};
window.setCartQty=(id,value)=>{
  const row=cart.find(x=>x.id===id),p=state.products.find(x=>x.id===id);if(!row||!p)return;
  let qty=Math.min(100,Math.max(0,Number(String(value??"").replace(/\D/g,""))||0));
  if(qty<=0){cart=cart.filter(x=>x.id!==id)}
  else{qty=Math.min(qty,Number(p.stock)||0);row.qty=qty}
  renderCart();
};
window.openCartQtyKeypad=id=>{
  const row=cart.find(x=>x.id===id),p=state.products.find(x=>x.id===id);if(!row||!p)return;
  openNumericKeypad({title:`จำนวน ${row.name}`,hint:"สูงสุด 100",value:row.qty,min:0,max:Math.min(100,Number(p.stock)||100),maxDigits:3,onConfirm:n=>setCartQty(id,n)});
};
const subtotal=()=>cart.reduce((s,x)=>s+x.price*x.qty,0),discount=()=>Math.max(0,Number($("discountInput").value||0)),total=()=>Math.max(0,subtotal()-discount());
function renderCart(){$("cartItems").innerHTML=cart.length?cart.map(x=>`<div class="cart-item"><div><b>${x.name}</b><div class="hint">${money(x.price)} × ${x.qty}</div></div><div class="qty"><button onclick="changeQty(${x.id},-1)">−</button><button type="button" class="qty-number-input qty-number-button" onclick="openCartQtyKeypad(${x.id})" aria-label="จำนวน ${escapeHtml(x.name)}">${x.qty}</button><button onclick="changeQty(${x.id},1)">+</button></div></div>`).join(""):'<p class="empty">ยังไม่มีสินค้า</p>';$("subtotal").textContent=money(subtotal());$("discountDisplay").textContent=money(discount());$("total").textContent=money(total());$("payBtn").disabled=!cart.length;if($("holdOrderBtn"))$("holdOrderBtn").disabled=!cart.length;if($("heldOrderCount"))$("heldOrderCount").textContent=state.heldOrders?.length||0}

$("discountInput").addEventListener("input",renderCart);$("clearBtn").onclick=()=>{if(cart.length&&confirm("ล้างออเดอร์นี้ใช่ไหม?")){cart=[];$("discountInput").value=0;renderCart()}};

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
        <button class="primary" onclick="restoreHeldOrder(${o.id})">กลับมาขายต่อ</button>
        <button class="text-danger" onclick="deleteHeldOrder(${o.id})">ลบ</button>
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
function openCashKeypad(){updateCashDisplays();$("cashKeypadPopup").classList.remove("hidden")}
function closeCashKeypad(){$("cashKeypadPopup").classList.add("hidden")}
function initPaymentKeypad(){
  $("cashReceivedButton").onclick=()=>{playTapSound();openCashKeypad()};
  document.querySelectorAll("[data-popup-key]").forEach(btn=>btn.onclick=()=>{tapFeedback(btn);appendCashDigit(btn.dataset.popupKey)});
  $("popupCashBack").onclick=()=>{tapFeedback($("popupCashBack"));backspaceCash()};
  $("popupCashClear").onclick=()=>{tapFeedback($("popupCashClear"));clearCash()};
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

// Payment
function openPayment(){
  if(!cart.length)return;
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
  $("successModal").classList.add("hidden");cart=[];$("discountInput").value=0;lastCashReceived=0;lastChange=0;renderCart();$("orderNo").textContent="#"+currentDailyOrderNumber();
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
function renderOrders(){const q=$("orderSearch").value.trim().toLowerCase(),list=state.orders.filter(o=>(o.number+" "+orderItemsText(o)+" "+(o.receiptNote||"")+" "+(o.staffName||"")).toLowerCase().includes(q));if(!list.length){$("ordersList").innerHTML='<p class="empty">ยังไม่มีออเดอร์ที่ตรงกับคำค้น</p>';return}$("ordersList").innerHTML=`<table><tr><th>เลข</th><th>เวลา</th><th>รายการ</th><th>ชื่อ/ข้อความ</th><th>ยอด</th><th>ชำระ</th><th>พนักงาน</th><th>สถานะ</th><th>จัดการ</th></tr>${list.map(o=>`<tr><td><b>#${o.number}</b></td><td>${new Date(o.time).toLocaleString("th-TH")}</td><td>${orderItemsText(o)}</td><td>${escapeHtml(o.receiptNote||"-")}</td><td>${money(o.total)}</td><td>${o.payment}</td><td>${o.staffName||"-"}</td><td><span class="status ${o.status}">${o.status==="paid"?"สำเร็จ":"ยกเลิก"}</span></td><td><button class="reprint-btn" onclick="printOrderById(${o.id})">พิมพ์ซ้ำ</button> ${o.status==="paid"&&currentUser?.role==="owner"?`<button class="danger" onclick="cancelOrder(${o.id})">ยกเลิก</button>`:""}</td></tr>`).join("")}</table>`}
$("orderSearch").addEventListener("input",renderOrders);window.cancelOrder=id=>{const o=state.orders.find(x=>x.id===id);if(!o||o.status!=="paid")return;if(!confirm(`ยกเลิกออเดอร์ #${o.number} และคืนสต๊อกใช่ไหม?`))return;o.status="cancelled";o.cancelledAt=nowIso();o.items.forEach(row=>{const p=state.products.find(x=>x.id===row.id);if(p)p.stock+=row.qty});saveState();renderAll()};window.printOrderById=id=>printOrder(state.orders.find(x=>x.id===id),true);
function printOrder(o,isCopy=false){
  const note=String(o.receiptNote||"").trim();
  const noteRow=note?`<div class="customer-note">${escapeHtml(note)}</div>`:"";
  if(!o)return;
  const receiptNumber=String(o.number).padStart(3,"0");
  const received=o.payment==="เงินสด"?Number(o.cashReceived??o.total):Number(o.total);
  const change=o.payment==="เงินสด"?Number(o.change??0):0;
  const itemRows=o.items.slice().sort((a,b)=>b.price-a.price).map(i=>`
    <tr><td class="item-name">${escapeHtml(i.name)}</td><td class="item-qty">×${Number(i.qty||0)}</td><td class="amount">${money(i.price*i.qty)}</td></tr>`).join("");
  const discountRow=Number(o.discount||0)>0?`<tr><td class="label">ส่วนลด</td><td class="value">${money(o.discount)}</td></tr>`:"";
  const cashRows=o.payment==="เงินสด"?`
    <tr><td class="label">รับเงิน</td><td class="value">${money(received)}</td></tr>
    <tr><td class="label">เงินทอน</td><td class="value"><b>${money(change)}</b></td></tr>`:"";

  const w=window.open("",`receipt-${receiptNumber}`,"width=520,height=820");
  if(!w){alert("กรุณาอนุญาต Pop-up เพื่อพิมพ์ใบเสร็จ");return}
  w.document.write(`<!doctype html><html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Receipt #${receiptNumber}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
  @page{margin:7mm;size:auto}*{box-sizing:border-box}body{margin:0;background:#f8f5f0;color:#111;font-family:"Sarabun","TH Sarabun New","Noto Sans Thai",Tahoma,sans-serif}
  .toolbar{position:sticky;top:0;z-index:5;display:flex;gap:10px;padding:12px;background:#fff;border-bottom:1px solid #eadfce}.toolbar button{flex:1;min-height:48px;border:0;border-radius:12px;font-size:16px;font-weight:800}.back-btn{background:#f2eadf;color:#6f5942}.print-btn{background:#e96512;color:#fff}
  .receipt-wrap{width:360px;max-width:100%;margin:16px auto;background:#fff;box-shadow:0 8px 28px rgba(59,39,20,.10)}.receipt{width:100%;padding:14px 12px;font-size:16px;line-height:1.45}
  .shop,.shop-address,.shop-phone{font-family:"Sarabun","TH Sarabun New","Noto Sans Thai",sans-serif}.shop{text-align:center;font-size:20px;font-weight:700}.shop-address{text-align:center;font-size:15px;margin-top:2px}.shop-phone{text-align:center;font-size:15px;margin-top:1px}.copy-mark{text-align:center;margin:5px auto 2px;width:max-content;padding:3px 8px;border:1px solid #111;border-radius:5px;font-size:12px;font-weight:800}.order{text-align:center;font-size:17px;font-weight:800;margin-top:5px;margin-bottom:9px}.rule{border-top:1.5px dashed #222;margin:8px 0}table{width:100%;border-collapse:collapse;table-layout:fixed}td{padding:3px 0;vertical-align:top}
  .item-name{text-align:left;padding-right:8px;word-break:break-word}.item-qty{width:46px;text-align:center}.amount{width:82px;text-align:right;font-weight:650}.label{text-align:left;font-weight:600}.value{text-align:right;white-space:nowrap}.total-row td{font-size:18px;font-weight:800;padding-top:5px}.meta td{font-size:14px}.customer-note{border:1px solid #ddd0c0;border-radius:8px;padding:8px;margin:8px 0;font-size:14px}.customer-note b{display:block;margin-bottom:3px}.thanks{text-align:center;margin-top:14px;font-weight:600}
  @media print{body{background:#fff}.toolbar{display:none!important}.receipt-wrap{width:100%;margin:0;box-shadow:none}.receipt{padding:0}}
  </style></head><body>
  <div class="toolbar"><button class="back-btn" id="backToOrders">← กลับไปหน้าออเดอร์</button><button class="print-btn" id="printAgain">พิมพ์ใบเสร็จ</button></div>
  <div class="receipt-wrap"><div class="receipt"><div class="shop">${escapeHtml(state.settings.shopName)}</div><div class="shop-address">บ้านดุง อุดรธานี 41190</div><div class="shop-phone">โทรศัพท์ 0897109954</div>${isCopy?'<div class="copy-mark">สำเนาใบเสร็จ</div>':""}<div class="order">ORDER #${receiptNumber}</div><div class="rule"></div>
  <table><tbody>${itemRows}</tbody></table><div class="rule"></div>
  <table><tbody>${discountRow}<tr class="total-row"><td class="label">ยอดรวม</td><td class="value">${money(o.total)}</td></tr><tr><td class="label">ชำระ</td><td class="value">${escapeHtml(o.payment||"-")}</td></tr>${cashRows}</tbody></table>
  ${noteRow}<div class="rule"></div><table class="meta"><tbody><tr><td class="label">พนักงาน</td><td class="value">${escapeHtml(o.staffName||"-")}</td></tr><tr><td class="label">วันที่/เวลา</td><td class="value">${new Date(o.time).toLocaleString("th-TH")}</td></tr></tbody></table><div class="thanks">ขอบคุณค่ะ</div>
  </div></div><script>
  document.getElementById("backToOrders").onclick=function(){try{if(window.opener&&!window.opener.closed){const t=window.opener.document.querySelector('.tab[data-page="orders"]');if(t)t.click();window.opener.focus();window.close();return}}catch(e){}history.back()};
  document.getElementById("printAgain").onclick=function(){window.print()};window.onload=function(){const go=()=>setTimeout(function(){window.print()},120);if(document.fonts&&document.fonts.ready){document.fonts.ready.then(go).catch(go)}else{go()}};
  <\/script></body></html>`);
  w.document.close();
}

// Dashboard / realtime 1 second
function paidOrders(){return state.orders.filter(o=>o.status==="paid")}
function ordersForRange(){const valid=paidOrders();if(dashboardRange==="all")return valid;const now=new Date();if(dashboardRange==="today")return valid.filter(o=>new Date(o.time).toDateString()===now.toDateString());const days=Number(dashboardRange),min=new Date(now.getTime()-days*86400000);return valid.filter(o=>new Date(o.time)>=min)}
function secondSeries(){const now=new Date(),labels=[],values=[],orders=paidOrders();for(let off=59;off>=0;off--){const t=new Date(now.getTime()-off*1000);t.setMilliseconds(0);const next=new Date(t.getTime()+1000);labels.push(t.toLocaleTimeString("th-TH",{hour12:false,hour:"2-digit",minute:"2-digit",second:"2-digit"}));values.push(orders.filter(o=>{const d=new Date(o.time);return d>=t&&d<next}).reduce((s,o)=>s+o.total,0))}return{labels,values}}
function todayHourly(){const now=new Date(),labels=[],values=[];for(let h=8;h<=22;h++){labels.push(String(h).padStart(2,"0")+":00");values.push(paidOrders().filter(o=>{const d=new Date(o.time);return d.toDateString()===now.toDateString()&&d.getHours()===h}).reduce((s,o)=>s+o.total,0))}return{labels,values}}
function dailySeries(days){const labels=[],values=[],orders=paidOrders();for(let off=days-1;off>=0;off--){const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()-off);const next=new Date(d);next.setDate(next.getDate()+1);labels.push(d.toLocaleDateString("th-TH",{day:"2-digit",month:"2-digit"}));values.push(orders.filter(o=>{const t=new Date(o.time);return t>=d&&t<next}).reduce((s,o)=>s+o.total,0))}return{labels,values}}
function drawBarChart(canvasId,labels,values,height=230,showEvery=1){const canvas=$(canvasId);if(!canvas||!canvas.parentElement)return;const width=Math.max(280,canvas.parentElement.clientWidth-30),dpr=window.devicePixelRatio||1;canvas.width=width*dpr;canvas.height=height*dpr;canvas.style.width=width+"px";canvas.style.height=height+"px";const ctx=canvas.getContext("2d");ctx.scale(dpr,dpr);ctx.clearRect(0,0,width,height);const pad={l:46,r:12,t:12,b:34},W=width-pad.l-pad.r,H=height-pad.t-pad.b,max=Math.max(...values,1),nice=Math.max(100,Math.ceil(max/100)*100);ctx.font="9px -apple-system,Segoe UI,sans-serif";ctx.strokeStyle="#eee4d8";ctx.fillStyle="#8a735e";for(let i=0;i<=4;i++){const y=pad.t+H-H*i/4;ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(width-pad.r,y);ctx.stroke();ctx.fillText("฿"+Math.round(nice*i/4),2,y+3)}const slot=W/Math.max(values.length,1),barW=Math.max(2,Math.min(24,slot*.62));values.forEach((v,i)=>{const bh=H*(v/nice),x=pad.l+i*slot+(slot-barW)/2,y=pad.t+H-bh;ctx.fillStyle="#df5f0d";ctx.beginPath();ctx.roundRect(x,y,barW,Math.max(1,bh),Math.min(4,barW/2));ctx.fill();if(i%showEvery===0||i===values.length-1){ctx.fillStyle="#8a735e";ctx.textAlign="center";ctx.fillText(labels[i],x+barW/2,pad.t+H+15)}})}
function renderSalesCharts(){const a=secondSeries(),b=todayHourly(),c=dailySeries(7),d=dailySeries(30);requestAnimationFrame(()=>{drawBarChart("secondChart",a.labels,a.values,235,10);drawBarChart("todayChart",b.labels,b.values,210,2);drawBarChart("weekChart",c.labels,c.values,210,1);drawBarChart("monthChart",d.labels,d.values,210,5)})}

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
  $("paymentSummary").innerHTML=`<div class="pay-line"><span>💵 เงินสด</span><b>${money(cash)} · ${cashOrders.length} ครั้ง</b></div><div class="pay-line"><span>▦ QR</span><b>${money(qr)} · ${qrOrders.length} ครั้ง</b></div>`;
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
  return state.preorders.filter(o=>o.date===key&&o.status==="waiting").sort((a,b)=>a.pickup.localeCompare(b.pickup));
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
  if(!dot||!btn||!sub||!body)return;
  const has=s.orders.length>0;
  dot.classList.toggle("hidden",!has);
  btn.classList.toggle("has-unread",has);
  sub.textContent=has?`พรุ่งนี้มี ${s.orders.length} ออเดอร์ · รวม ${s.itemQty} ชิ้น`:"ยังไม่มีออเดอร์ล่วงหน้า";
  if(!has){body.innerHTML='<div class="bell-empty">ยังไม่มีรายการสั่งล่วงหน้า</div>';return}
  body.innerHTML=s.orders.slice(0,4).map(o=>{
    const title=o.customer||o.note||"ไม่ระบุชื่อ";
    const items=(o.items||[]).map(i=>`${i.name} x${i.qty}`).join(", ");
    return `<div class="bell-order"><div><b>${o.pickup||"--:--"} · ${title}</b><small>${items}</small></div><strong>${money(o.total||0)}</strong></div>`;
  }).join("")+(s.orders.length>4?`<div class="bell-more">และอีก ${s.orders.length-4} รายการ</div>`:"");
}
function togglePreorderBell(force){
  const pop=$("preorderBellPopover");if(!pop)return;
  const show=typeof force==="boolean"?force:pop.classList.contains("hidden");
  pop.classList.toggle("hidden",!show);
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
    try{new Notification("🐟 พรุ่งนี้มีออเดอร์ปลาเผา",{body:`${s.orders.length} ออเดอร์ • ${s.itemQty} ชิ้น • เริ่มรับ ${s.first}`})}catch(e){}
  }
  lastReminderSignature=s.signature;
}
$("openPreorderReminder").onclick=()=>{window.__preListExplicitDate=true;openPage("preorderListPage");$("preListDate").value=dateKey(tomorrowDate());renderPreorderList()};

$("preorderBellBtn").onclick=()=>togglePreorderBell();
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
function initPreorderDateTime(){if(!$("preDateTime").value){const d=tomorrowDate();d.setHours(17,0,0,0);$("preDateTime").value=localDateTimeValue(d)}if(!$("preListDate").value)$("preListDate").value=dateKey(tomorrowDate())}
function renderPreorder(){
  initPreorderDateTime();
  const dt=new Date($("preDateTime").value||tomorrowDate());
  $("tomorrowBadge").textContent="รับ "+dt.toLocaleString("th-TH",{weekday:"short",day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"});
  const products=state.products.filter(p=>p.active).slice().sort((a,b)=>a.price-b.price||a.name.localeCompare(b.name,"th"));
  $("preProducts").innerHTML=products.map(p=>{const r=preorderCart.find(x=>x.id===p.id),q=r?.qty||0;return `<div class="pre-product"><b>${p.name}</b><span>${money(p.price)}</span><div class="pre-controls"><button onclick="changePreQty(${p.id},-1)">−</button><button type="button" class="pre-qty-input pre-qty-button" onclick="openPreQtyKeypad(${p.id})" aria-label="จำนวน ${escapeHtml(p.name)}">${q}</button><button onclick="changePreQty(${p.id},1)">+</button></div></div>`}).join("");
  $("preCartItems").innerHTML=preorderCart.length?preorderCart.slice().sort((a,b)=>b.price-a.price).map(r=>`<div class="pre-row"><span>${r.name} × ${r.qty}</span><b>${money(r.price*r.qty)}</b></div>`).join(""):'<p class="empty">ยังไม่ได้เลือกสินค้า</p>';
  $("preTotal").textContent=money(preorderCart.reduce((s,r)=>s+r.price*r.qty,0));
}
function renderPreorderList(){
  const selected=$("preListDate").value;
  let list=state.preorders.slice().sort((a,b)=>String(a.date).localeCompare(String(b.date))||String(a.pickup).localeCompare(String(b.pickup)));
  if(selected)list=list.filter(p=>p.date===selected);
  if(selected){
    const d=new Date(selected+"T12:00:00");
    $("preListTitle").textContent="รายการวันที่ "+d.toLocaleDateString("th-TH",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
  }else{
    $("preListTitle").textContent="รายการสั่งล่วงหน้าทั้งหมด";
  }
  const prep={};list.filter(x=>x.status!=="cancelled").forEach(o=>o.items.forEach(i=>prep[i.name]=(prep[i.name]||0)+i.qty));
  $("preparationSummary").textContent=Object.keys(prep).length?"เตรียม: "+Object.entries(prep).map(([n,q])=>`${n} ${q}`).join(" • "):"ยังไม่มีรายการเตรียม";
  $("preorderList").innerHTML=list.length?`<table><tr><th>วันที่</th><th>เวลา</th><th>ลูกค้า</th><th>โทร</th><th>รายการ</th><th>ยอด</th><th>หมายเหตุ</th><th>พนักงาน</th><th>สถานะ</th><th>จัดการ</th></tr>${list.map(o=>`<tr><td><b>${new Date(o.date+"T12:00:00").toLocaleDateString("th-TH",{day:"2-digit",month:"short",year:"2-digit"})}</b></td><td><b>${o.pickup}</b></td><td>${escapeHtml(o.customer)}</td><td>${escapeHtml(o.phone||"-")}</td><td>${o.items.slice().sort((a,b)=>b.price-a.price).map(i=>`${escapeHtml(i.name)} ×${i.qty}`).join(", ")}</td><td>${money(o.total)}</td><td>${escapeHtml(o.note||"-")}</td><td>${escapeHtml(o.staffName||"-")}</td><td><span class="status ${o.status}">${o.status==="waiting"?"รอรับ":o.status==="ready"?"รับแล้ว":"ยกเลิก"}</span></td><td>${o.status==="waiting"?`<button onclick="setPreStatus(${o.id},'ready')">รับแล้ว</button> <button class="danger" onclick="setPreStatus(${o.id},'cancelled')">ยกเลิก</button>`:""}</td></tr>`).join("")}</table>`:'<p class="empty">ยังไม่มีออเดอร์ล่วงหน้า</p>';
}
window.changePreQty=(id,d)=>{const el=currentTapElement();tapFeedback(el);playQtySound(d>0);const p=state.products.find(x=>x.id===id);let r=preorderCart.find(x=>x.id===id);if(!r&&d>0){r={id:p.id,name:p.name,price:p.price,qty:0};preorderCart.push(r)}if(!r)return;r.qty=Math.min(100,r.qty+d);if(r.qty<=0)preorderCart=preorderCart.filter(x=>x.id!==id);renderPreorder()};
window.setPreQty=(id,value)=>{
  const p=state.products.find(x=>x.id===id);if(!p)return;
  let qty=Math.min(100,Math.max(0,Number(String(value??"").replace(/\D/g,""))||0)),r=preorderCart.find(x=>x.id===id);
  if(qty<=0){preorderCart=preorderCart.filter(x=>x.id!==id)}
  else if(r){r.qty=qty}else{preorderCart.push({id:p.id,name:p.name,price:p.price,qty})}
  renderPreorder();
};
window.openPreQtyKeypad=id=>{
  const p=state.products.find(x=>x.id===id);if(!p)return;
  const r=preorderCart.find(x=>x.id===id);
  openNumericKeypad({title:`จำนวน ${p.name}`,hint:"สูงสุด 100",value:r?.qty||0,min:0,max:100,maxDigits:3,onConfirm:n=>setPreQty(id,n)});
};
$("clearPreorderBtn").onclick=()=>{preorderCart=[];renderPreorder()};
$("preDateTime").addEventListener("change",renderPreorder);
$("savePreorderBtn").onclick=()=>{
  const customer=$("preCustomer").value.trim(),dtValue=$("preDateTime").value;
  if(!customer){alert("กรุณาใส่ชื่อลูกค้า");return}
  if(!dtValue){alert("กรุณาเลือกวันที่และเวลารับ");return}
  if(!preorderCart.length){alert("กรุณาเลือกสินค้า");return}
  const dt=new Date(dtValue);
  const o={id:Date.now(),date:dateKey(dt),customer,phone:$("prePhone").value.trim(),pickup:dt.toTimeString().slice(0,5),note:$("preNote").value.trim(),items:preorderCart.map(x=>({...x})),total:preorderCart.reduce((s,x)=>s+x.price*x.qty,0),status:"waiting",createdAt:nowIso(),staffName:currentUser.name};
  state.preorders.push(o);saveState();preorderCart=[];["preCustomer","prePhone","preNote"].forEach(id=>$(id).value="");
  $("preListDate").value=o.date;renderPreorder();updatePreorderReminder(true);window.__preListExplicitDate=true;openPage("preorderListPage");$("preListDate").value=o.date;renderPreorderList();
};
window.setPreStatus=(id,status)=>{const o=state.preorders.find(x=>x.id===id);if(!o)return;o.status=status;saveState();renderPreorderList();updatePreorderReminder()};
$("preListDate").addEventListener("change",renderPreorderList);
$("preListAllBtn").onclick=()=>{$("preListDate").value="";renderPreorderList()};
$("preListTomorrowBtn").onclick=()=>{$("preListDate").value=dateKey(tomorrowDate());renderPreorderList()};
$("newPreorderFromListBtn").onclick=()=>openPage("preorder");

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
  box.innerHTML=cats.length?cats.map((cat,i)=>`<div class="category-manager-row">
    <input id="catName_${i}" value="${escapeHtml(cat)}" aria-label="ชื่อหมวด ${escapeHtml(cat)}">
    <button class="secondary" onclick="moveCategory(${i},-1)" ${i===0?"disabled":""}>←</button>
    <button class="secondary" onclick="moveCategory(${i},1)" ${i===cats.length-1?"disabled":""}>→</button>
    <button class="primary" onclick="renameCategory(${i})">บันทึกชื่อ</button>
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
function renderAdmin(){
  if(currentUser?.role!=="owner")return;
  $("shopNameInput").value=state.settings.shopName;$("nextOrderInput").value=ensureDailyOrderCounter();if($("promptPayIdInput"))$("promptPayIdInput").value=state.settings.promptPayId||"";
  $("staffInfo").innerHTML=STAFF_LIST.map(s=>`<div class="staff-admin-row"><span><b>${s.name}</b> · ${s.role==="owner"?"เจ้าของ":"พนักงาน"}</span><code>PIN ${s.pin}</code></div>`).join("");

  const cats=[...getCategoryList()];if(!cats.includes("อื่นๆ"))cats.push("อื่นๆ");
  const newSel=$("newCategory"),editSel=$("editCategory");
  if(newSel){const keep=newSel.value;newSel.innerHTML=cats.map(x=>`<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join("");if(cats.includes(keep))newSel.value=keep}
  if(editSel&&!editSel.options.length)editSel.innerHTML=cats.map(x=>`<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join("");
  renderCategoryManager();

  $("adminProducts").innerHTML=`<table><tr><th>ชื่อ</th><th>หมวด</th><th>ราคา</th><th>ต้นทุน</th><th>สต๊อก</th><th>สถานะ</th><th>จัดการ</th></tr>${state.products.slice().sort((a,b)=>b.price-a.price).map(p=>`<tr><td>${escapeHtml(p.name)}</td><td>${escapeHtml(p.category)}</td><td>${money(p.price)}</td><td>${money(p.cost)}</td><td>${p.stock} ${escapeHtml(p.unit)}</td><td>${p.active?"เปิดขาย":"ปิดขาย"}</td><td><button onclick="editProduct(${p.id})">แก้ไข</button> <button onclick="toggleProduct(${p.id})">${p.active?"ปิดขาย":"เปิดขาย"}</button></td></tr>`).join("")}</table>`;
  updateAdminQrPreview();renderAdminDynamicQr();initExportDate();
}
$("saveShopBtn").onclick=()=>{state.settings.shopName=$("shopNameInput").value.trim()||"ร้านทิพย์เกษรเมี่ยงปลาเผา";ensureDailyOrderCounter();saveState();renderAll();alert("บันทึกแล้ว")};

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

$("savePromptPayBtn").onclick=()=>{
  const value=$("promptPayIdInput").value.trim();
  if(value){
    try{normalizePromptPayTarget(value)}
    catch(e){alert(e.message);return}
  }
  state.settings.promptPayId=value;
  saveState();
  renderAdminDynamicQr();
  alert(value?"บันทึก PromptPay แล้ว":"ลบ PromptPay แล้ว");
};

$("qrFile").onchange=e=>{const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{state.settings.qrImage=String(r.result);saveState();updateQrDisplay();updateAdminQrPreview()};r.readAsDataURL(f)};
$("removeQrBtn").onclick=()=>{state.settings.qrImage="";saveState();updateQrDisplay();updateAdminQrPreview()};
$("exportBtn").onclick=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="fish-pos-backup.json";a.click();URL.revokeObjectURL(a.href)};
$("exportTodayCsvAdminBtn").onclick=()=>exportSalesCsv(dateKey(new Date()));
$("importBtn").onclick=()=>$("importFile").click();
$("importFile").onchange=e=>{const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{state=JSON.parse(r.result);state.staff=clone(STAFF_LIST);if(!Array.isArray(state.preorders))state.preorders=[];if(!state.settings)state.settings=clone(demoState.settings);if(!state.settings.dailyOrderCounters)state.settings.dailyOrderCounters={};if(!Array.isArray(state.settings.customCategories))state.settings.customCategories=[];ensureDailyOrderCounter();saveState();renderAll();alert("นำเข้าข้อมูลสำเร็จ")}catch(err){alert("ไฟล์ไม่ถูกต้อง")}};r.readAsText(f)};
$("resetBtn").onclick=()=>{if(confirm("รีเซ็ตข้อมูลทั้งหมดใช่ไหม?")){state=clone(demoState);saveState();location.reload()}};

// Navigation
function openPage(pageId){
  document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x.dataset.page===pageId));
  document.querySelectorAll(".page").forEach(x=>x.classList.add("hidden"));
  const page=$(pageId);if(page)page.classList.remove("hidden");
  if(pageId==="dashboard")setTimeout(()=>{renderDashboard();renderSalesCharts();initExportDate()},40);
  if(pageId==="preorder")renderPreorder();
  if(pageId==="preorderListPage"){
    if(!window.__preListExplicitDate)$("preListDate").value="";
    window.__preListExplicitDate=false;
    renderPreorderList();
  }
  if(pageId==="admin")renderAdmin();
}
document.querySelectorAll(".tab").forEach(btn=>btn.onclick=()=>openPage(btn.dataset.page));

function salePageActive(){return currentUser&&!$("sale").classList.contains("hidden")}
["gesturestart","gesturechange","gestureend"].forEach(type=>document.addEventListener(type,e=>{if(salePageActive())e.preventDefault()},{passive:false}));
document.addEventListener("touchmove",e=>{if(salePageActive()&&e.touches&&e.touches.length>1)e.preventDefault()},{passive:false});
document.addEventListener("wheel",e=>{if(salePageActive()&&e.ctrlKey)e.preventDefault()},{passive:false});
document.addEventListener("keydown",e=>{if(salePageActive()&&(e.ctrlKey||e.metaKey)&&["=","+","-","0"].includes(e.key))e.preventDefault()});

ensurePosUiPatch();initPaymentKeypad();initPreorderDateTime();initExportDate();initLogin();
