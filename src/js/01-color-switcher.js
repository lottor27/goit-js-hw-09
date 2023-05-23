const bodyColor = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

let timerId = null;

btnStart.addEventListener('click', onClickStartEvent);

btnStop.addEventListener('click', onClickStopEvent);

btnStop.setAttribute('disabled', 'disabled');

function onClickStartEvent(event) {
  
  btnStart.setAttribute('disabled', 'disabled');
  btnStop.removeAttribute('disabled');

  timerId = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();

    const onlineColorBody = bodyColor.style.backgroundColor;
  }, 1000);
}

function onClickStopEvent(event) {
  clearInterval(timerId);
  if (btnStart.hasAttribute('disabled')) {
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', 'disabled');
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
