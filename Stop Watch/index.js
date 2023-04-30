let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

"use strict";

let msec = 00;
let secs= 00;
let mins = 00;

let timerId = null;

startBtn.addEventListener('click',function(){
    if(timerId!==null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer , 10);
});

stopBtn.addEventListener('click',function(){
    clearInterval(timerId)
});


resetBtn.addEventListener('click',function(){
    clearInterval(timerId)
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 00;
});



function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
                secs= 0;
                mins++;
        }
    }

        let msecString = msec < 10 ? `0${msec}` : msec;
        let secsString = msec < 10 ? `0${secs}` : secs;
        let minsString = mins < 10 ? `0${mins}` : mins;


        timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

            
}

const typed = new Typed('.multiple-text',{
    strings:['Chirag','Girawale'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})