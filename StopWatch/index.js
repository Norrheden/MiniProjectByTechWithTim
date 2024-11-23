function startClock() {
    // Start the clock
    if (interval) stopClock()
    interval = setInterval(timer, 1000) 

}

function padStart(value) {
    return String(value).padStart(2,"0");
}
function setTime() {
    const minutes = Math.floor(secondsElapsed/60);
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;

}

function timer() {
    secondsElapsed++;
    setTime();
}

function stopClock() {
    // Stop the clock
    clearInterval(interval)
}

function resetClock() {
    // Reset the clock
    stopClock();
    secondsElapsed = 0;
    setTime()
}


let secondsElapsed = 0;
let interval = null;
const time = document.getElementById('time');


