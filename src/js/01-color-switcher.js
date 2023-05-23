
const bodyColor = document.querySelector('body');
const btnStart = document.querySelector("button[data-start]")
const btnStop = document.querySelector("button[data-stop]");
let timerId = null;

btnStart.addEventListener("click", () => {
    btnStart.setAttribute('disabled', 'disabled');

    timerIder = setInterval(() => {
      bodyColor.style.backgroundColor = getRandomHexColor();

      const onlineColorBody = bodyColor.style.backgroundColor;

      console.log(onlineColorBody);
    }, 1000);
    
    
});

btnStop.addEventListener('click', () => {
    clearInterval(timerIder);
    
    if (btnStart.hasAttribute("disabled")) {
        btnStart.removeAttribute('disabled');
    }
});

// const formDataLocalStorage =
// localStorage.getItem('bgColor') || localStorage.setItem('bgColor', bodyColor.style.backgroundColor);

// if (!localStorage.getItem) {
//   localStorage.setItem('bgColor', bodyColor.style.backgroundColor);
// }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
