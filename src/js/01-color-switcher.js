
const bodyColor = document.querySelector('body');
const btnStart = document.querySelector("button[data-start]")
const btnStop = document.querySelector("button[data-stop]");


btnStart.addEventListener("click", onClickStartEvent);

btnStop.addEventListener('click', () => {
 clearInterval(timerId);
    
    if (btnStart.hasAttribute("disabled")) {
        btnStart.removeAttribute('disabled');
    }
});

// const formDataLocalStorage =
// localStorage.getItem('bgColor') || localStorage.setItem('bgColor', bodyColor.style.backgroundColor);

// if (!localStorage.getItem) {
//   localStorage.setItem('bgColor', bodyColor.style.backgroundColor);
// }


function onClickStartEvent(event) {
    // isActive = 'true'
    btnStart.setAttribute("disabled", 'disabled');

    
    timerId = setInterval(() => {
        bodyColor.style.backgroundColor = getRandomHexColor();
        
        const onlineColorBody = bodyColor.style.backgroundColor;
        
    console.log(onlineColorBody)
    return timerId;
    }, 1000);
    
    
};

// function onClickStopEvent

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
