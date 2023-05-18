
const bodyColor = document.querySelector('body');
const btnStart = document.querySelector("button[data-start]")
const btnStop = document.querySelector("button[data-stop]");


btnStart.addEventListener("click", onClickStartEvent);

btnStop.addEventListener('click', onClickStopEvent);

// const formDataLocalStorage =
// localStorage.getItem('bgColor') || localStorage.setItem('bgColor', bodyColor.style.backgroundColor);

// if (!localStorage.getItem) {
//   localStorage.setItem('bgColor', bodyColor.style.backgroundColor);
// }


function onClickStartEvent(event) {
    isActive = 'true'
    btnStart.setAttribute("disabled", 'disabled');
    console.log(event.target);
    timerId = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
    const onlineColorBody = bodyColor.style.backgroundColor;
    console.log(onlineColorBody)
    localStorage.setItem('bgColor', onlineColorBody);
    }, 1000);
    console.log(localStorage.value);
    
};

function onClickStopEvent(event) {
    clearInterval(timerId);
    console.log(event.target);
    if (btnStart.hasAttribute("disabled")) {
        btnStart.removeAttribute('disabled');
    }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
