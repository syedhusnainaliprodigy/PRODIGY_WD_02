const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");

let ih, im, is;
let th = 0,
  tm = 0,
  ts = 0;
let bool = true;

function start() {
  is = setInterval(() => {
    if(ts==60) ts=0;
    if (ts < 9) s.innerText = "0" + ++ts;
    else s.innerText = ++ts;
  }, 1000);
  im = setInterval(() => {
    if(tm==60) tm=0;
    if (tm < 9) m.innerText = "0" + ++tm;
    else m.innerText = ++tm;
  }, 60000);
  ih = setInterval(() => {
    if (th < 9) h.innerText = "0" + ++th;
    else h.innerText = ++th;
  }, 3600000);
}

function stop() {
  if (bool) {
    bool = false;
    clearInterval(is);
    clearInterval(im);
    clearInterval(ih);
}
else{
    bool=true;
    is = setInterval(() => {
        if (ts < 9) s.innerText = "0" + ++ts;
        else s.innerText = ++ts;
      }, 1000);
      im = setInterval(() => {
        if (tm < 9) m.innerText = "0" + ++tm;
        else m.innerText = ++tm;
      }, 60000);
      ih = setInterval(() => {
        if (th < 9) h.innerText = "0" + ++th;
        else h.innerText = ++th;
      }, 3600000);
  }
}

function reset(){
  if(!bool){
    clearInterval(is);
    clearInterval(im);
    clearInterval(ih);
    th=0;
    tm=0;
    ts=0;
    h.innerText="00";
    m.innerText="00";
    s.innerText="00";
  }
  else{
    document.getElementById('btn').innerText="Stop Then Reset";
    setTimeout(()=>{
      document.getElementById('btn').innerText="Reset";     
    }, 2000);
  }
}
