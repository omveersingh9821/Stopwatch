//global variables
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let seconds = 0;
let interval = null;

//Event Listeners
startBtn.addEventListener('click',start);
stopBtn.addEventListener('click',stop);
resetBtn.addEventListener('click',reset);


//Update the timer
function timer(){
    seconds++;

    //format time
    let hrs = Math.floor(seconds/3600);
    let mins = Math.floor((seconds-(hrs*3600))/60);
    let secs = seconds % 60;
    if(secs < 10){
        secs = '0'+secs;
    }
    if(mins < 10){
        mins = '0'+mins;
    }
    if(hrs < 10){
        hrs = '0'+hrs;
    }
    timeDisplay.innerText = `${hrs}:${mins}:${secs}`;
}


//start function for button
function start(){
    if(interval){
        return;
    }
    interval = setInterval(timer,1000);
}


// Stop function to stop the timer 
function stop(){
    clearInterval(interval);
    interval = null;
}

//reset function to reset the timer
function reset(){
    stop();
    seconds = 0;
    timeDisplay.innerText = `00:00:00`;
}