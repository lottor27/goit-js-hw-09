import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
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
      Notiflix.Report.failure(
        'Please choose a date in the future',
        'Travel to the past will break the space-time continuum',
        'Ok, I will not do it again'
      );
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


const timer = {
  timerId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return
    }
    const startTimeTimer = timerFlat.selectedDates[0];
    this.timerId = setInterval(() => {
      this.isActive = true;
      const currentTimeTimer = Date.now();
      const deltaTimeTimer = (currentTimeTimer - startTimeTimer) * -1;
      const timeComponentsTimer = convertMs(deltaTimeTimer);
      if (deltaTimeTimer <= 0) {
        clearInterval(this.timerId);
        console.log('Ну все же');
        this.isActive = false;
        startBtn.setAttribute('disabled', 'disabled');
        return
      }
      console.log(timeComponentsTimer);
      days.textContent = timeComponentsTimer.days;
      hours.textContent = timeComponentsTimer.hours;
      minutes.textContent = timeComponentsTimer.minutes;
      seconds.textContent = timeComponentsTimer.seconds;
    }, 1000);
  },
  stop() {

  }
};


startBtn.addEventListener('click', timer.start);

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
