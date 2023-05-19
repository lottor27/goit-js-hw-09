import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const inputField = document.querySelector('#datetime-picker');

const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

startBtn.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const startTime = Date.now();
    const currentTime = selectedDates[0];

    const deltaTime = currentTime - startTime;
    const timeComponents = convertMs(deltaTime);

    if (timeComponents.seconds <= 0) {
      window.alert('Please choose a date in the future');
      return;
    } else {
      startBtn.removeAttribute('disabled');
      days.textContent = timeComponents.days;
      hours.textContent = timeComponents.hours;
      minutes.textContent = timeComponents.minutes;
      seconds.textContent = timeComponents.seconds;
    }
  },
};

const timerFlat = flatpickr(inputField, options);
const wwww = timerFlat.value;

console.log(wwww);

const timer = {
  start() {
    const startTimeTimer = timeComponents;
    setInterval(() => {
      const currentTimeTimer = this.selectedDates;
      const deltaTimeTimer = currentTimeTimer - startTimeTimer;
      const timeComponentsTimer = convertMs(deltaTimeTimer);
    }, 1000);
  },
};

//  timer.start();

startBtn.addEventListener('click', timer.start());

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

























// console.log(qqq.split(''));
// const days = [];
// const hour = [];
// const minute = [];
// const Seconds = [];
// console.log(timer.minuteElement.value);
// console.log(timer.hourElement.value);
// console.log(timer);
// console.log(timer.input.value);
// const qqq = timer.input.value;
// console.log(typeof qqq);
// console.dir(timer.dayElement);

// console.dir(inputField.element);
// function selectedDates() {
// console.log(1);
// };

// days.part.value
