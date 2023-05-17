const division = document.getElementById('oneAnd');

var innner = 0;

//show and disappear complete
//~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!
const stopbtn = document.getElementById('stop');
const timerbtn = document.getElementById('timer');

const stop_element = document.getElementById('stopMode');
const timer_element = document.getElementById('timerMode');

var checker_timer = 0;
var checker_stop = 0;
function shower(event_taker){
  if(event_taker.style.visibility === "visible"){
    event_taker.style.visibility="hidden";
  }else{
    event_taker.style.visibility="visible";
  }
  
}

stopbtn.addEventListener('click',function(){shower(stop_element)});
timerbtn.addEventListener('click',function(){shower(timer_element)});


// Wait for one Second
async function waitSec(){
  const sec = new Promise((resolve)=>{
    setTimeout(()=>{resolve(true)},1000);
  })

  await sec;
}


//Sample
async function timeUpper(){
  while(true){
    division.innerHTML=innner;
    await waitSec();
    innner++;
  }
}

timeUpper();

//real Timer Start

const ten = document.getElementById('temMin');
const one = document.getElementById('oneMin');
const tensec = document.getElementById('tenSec');
const onesec = document.getElementById('oneSec');

var stopChecker = false;


var num_one=0;
var num_ten = 0;
var num_tensec=0;
var num_onesec=0;

async function stopWatch(){
  while(stopChecker){
    onesec.innerHTML =num_onesec;
    tensec.innerHTML = num_tensec;
    one.innerHTML = num_one;
    ten.innerHTML = num_ten;

    if(num_onesec>=9){
      num_onesec = 0;
      if(num_tensec>=5){
        num_tensec = 0;
        if(num_one>=9){
          num_one = 0;
          if(num_ten>=5){
            console.log("error")
            break;
          }
          else{num_ten++;}
        }
        else{num_one++;}
      }
      else{num_tensec++;}
    }
    else{num_onesec++;}


    await waitSec();

  }
} 


const stop_btn = document.getElementById('stop_button');
const reset_btn = document.getElementById('stop_reset');
const fiveWait = document.getElementById('fiveWait');

function reset_stop(){
  stopChecker = false;
  onesec.innerHTML =0;
  tensec.innerHTML = 0;
  one.innerHTML = 0;
  ten.innerHTML = 0;

  num_one = 0;
  num_onesec = 0;
  num_ten = 0;
  num_tensec = 0;


}


function starter(){
  if(stopChecker ===false){
    stopChecker=true;
    
    stopWatch();
  }else{
    stopChecker=false;
  }
}
var timer_id;
async function waitFiveSec(){
  const fiveSec = new Promise((resolve)=>{
    timer_id=setTimeout(()=>{resolve(true)},5000);
  })

  await fiveSec;
}

async function realFive(){
  stopChecker = false;
  clearTimeout(timer_id);
  await waitFiveSec();

  stopChecker = true;
  stopWatch();
}


stop_btn.addEventListener('click',function(){starter()});
reset_btn.addEventListener('click',function(){reset_stop()});
fiveWait.addEventListener('click',function(){realFive()});




// Timer making!kjh