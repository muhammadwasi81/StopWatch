//Developer: Muhammad wasi


//start of code
var ms = 0; s = 0; m = 0; //milli,seconds,minutes are  = 0
var timer;//take name as timer..//

var stopwatch = document.querySelector('.stopwatch');
var lapsContainer = document.querySelector('.laps');//we take class in html and put here//


function start(){
    if(!timer){
        timer = setInterval(run,10);  
    }

}

function run(){
    stopwatch.textContent = getTimer()
    ms++;
    if(ms == 100){
        ms = 0;
        s++;
    }
    if(s == 60){
        s = 0;
        m++;

    }
}//for start the function

function pause(){
    stopTimer();
}//pause

function stop(){
    stopTimer();
    ms = 0;
    s = 0;
    m = 0;
    stopwatch.textContent = getTimer()
}//stop and reset to factory mode

function stopTimer(){
    clearInterval(timer);
    timer = false;
}//pause the function

function getTimer(){
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}//for no less then 10 we take 0 before that like 02:09:60...//

function restart(){
    stop();
    start();
}//restart 

function laps(){
    if(timer){
        var li = document.createElement('li');
        li.innerText = getTimer();
        lapsContainer.appendChild(li);
    }
}//laps

function resetlaps(){
    lapsContainer.innerHTML = '';
}//reset laps

//end of code