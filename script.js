let timerDisplay = document.querySelector('.timer-display');
let stopBtn = document.getElementById('stop');
let startBtn = document.getElementById('start');
let resetBtn = document.getElementById('reset');

let msec = 0, sec = 0, min = 0;
let timerId = null;

function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
  }
   
  let msecString = msec < 10 ? `0${msec}` : msec;
  let secString = sec < 10 ? `0${sec}` : sec;
  let minString = min < 10 ? `0${min}` : min;

  timerDisplay.innerHTML = `${minString} : ${secString} : ${msecString}`;
}

startBtn.addEventListener('click', function() {
  if (timerId !== null) clearInterval(timerId);
  timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function() {
  clearInterval(timerId);
});

resetBtn.addEventListener('click', function() {
  clearInterval(timerId);
  timerDisplay.innerHTML = `00 : 00 : 00`;
  msec = 0;
  sec = 0;
  min = 0;
});
