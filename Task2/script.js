let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;
let running = false;

function updateDisplay() {
  document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById('milliseconds').innerText = milliseconds < 10 ? '0' + milliseconds : milliseconds;
}

document.getElementById('start').addEventListener('click', () => {
  if (!running) {
    timer = setInterval(() => {
      milliseconds++;
      if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      updateDisplay();
    }, 10);
    running = true;
  }
});

document.getElementById('pause').addEventListener('click', () => {
  clearInterval(timer);
  running = false;
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timer);
  running = false;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
});
