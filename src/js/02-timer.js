import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';


const inputField = document.querySelector('#datetime-picker');

const startBtn = document.querySelector('button[data-start]');
// const days = document.querySelector('[data-days]');
// const hours = document.querySelector('[data-hours]');
// const minutes = document.querySelector('[data-minutes]');
// const seconds = document.querySelector('[data-seconds]');



// startBtn.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const qqq = timer.input.value;
      console.log(qqq);
      // console.log(selectedDates[0].input.value);
    //   console.dir(selectedDates[0].getSeconds);
    //   console.log(selectedDates[0].getSeconds);
  },
};

// const date = new Date();
// console.log(date.getTime());
const timer = flatpickr(inputField, options);
const wwww = timer.input.value;

console.log(wwww);
































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









