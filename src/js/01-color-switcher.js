function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;
stopBtn.disabled = true;

function changeBodyBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
    timerId = setInterval(changeBodyBackgroundColor, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;

}

function onStopClick() {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}