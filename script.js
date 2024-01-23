let timer;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;
alert("Press start to start the stop-watch and press stop to disable it,maybe i will add the reset button,but we will see")
const timerDisplay = document.getElementById('timer');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 10); // Update every 10 milliseconds
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function updateTimer() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }

    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    const displayMilliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds;

    timerDisplay.textContent = `${displaySeconds}:${displayMilliseconds}`;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
