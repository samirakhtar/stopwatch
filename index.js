div = document.querySelector('.timer');
input = document.querySelector('input');

let count = 0;
let timerTill = 0;
let isPausedTimer = false;
let timerIntervel;

const fromatString = (count) => {
  let stringtoFormat = count.toString();
  if (stringtoFormat.length < 4) {
    stringtoFormat = stringtoFormat.padStart(4, '0');
  }
  let str = stringtoFormat.split('');
  str.splice(stringtoFormat.length - 3, 0, ':');
  str = str.join(' ');
  return str;
};

const startTimer = () => {
  timerTill = parseInt(input.value) * 1000;
  timerIntervel = setInterval(() => {
    if (count >= timerTill) {
      clearInterval(timerIntervel);
      count = 0;
      timerTill = 0;
    } else {
      if (!isPausedTimer) {
        count += 10;
        let str = fromatString(count);
        div.innerHTML = str;
      }
    }
  }, 10);
};

const pauseTimer = () => {
  isPausedTimer = !isPausedTimer;
};

const resetTimer = () => {
  clearInterval(timerIntervel);
  count = 0;
  timerTill = 0;
  let str = fromatString(count);
  div.innerHTML = str;
};

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.pause').addEventListener('click', pauseTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
