var seconds=00;
var tens=00;                                         
var SecondShow=document.getElementById('Secondvalue');
var TensShow=document.getElementById('TensValue');
var buttonStart=document.getElementById('Start');
var buttonStop=document.getElementById('Stop');
var buttonReset=document.getElementById('Reset');
var Interval;
buttonStart.addEventListener('click',()=>{    //adding event listener for start button,so when the event is triggered clear interval function is called first
   clearInterval(Interval);        //clear interval stops the event which is called by set interval   
  Interval=setInterval(startTime,10);   //set interval calls the start time function
});
 //clearing the interval
buttonStop.addEventListener('click',()=>{
clearInterval(Interval);    
});
buttonReset.addEventListener('click',()=>{
clearInterval(Interval);
tens="00";
seconds="00";
SecondShow.innerHTML=seconds;   
TensShow.innerHTML=tens;
});
//function displaying d value in d watch.
function startTime(){    
tens++;
if(tens<9)
TensShow.innerHTML="0"+tens;
if(tens>9)
TensShow.innerHTML=tens;
if(tens>99){
seconds++;
SecondShow.innerHTML="0"+seconds;
tens="0";
TensShow.innerHTML="0"+tens;

}
if(seconds>99){
    SecondShow.innerHTML=seconds;
}
}
