import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const bntSubmit = document.querySelector('button[type="submit"]');
const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');


form.addEventListener('submit', onSubmit);

// bntSubmit.setAttribute('disabled', 'disabled');  

function onSubmit(event) {
  event.preventDefault();

  const firstDelay = delayInput.value;
  const inputDelay = stepInput.value;
  const amount = amountInput.value;
let delay = firstDelay;
  for (let i = 1; i <= amount; i += 1) {
    let delay = Number(i * inputDelay) + Number(inputDelay); 

    const promise = createPromise(amount, delay);

    promise
      .then(({ amount, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${i} in ${delay} ms`);
      })
      .catch(({ amount, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${i} in ${delay} ms`);
      });
  }




}
function createPromise(amount, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ amount, delay });
      } else {
        reject({ amount, delay });
      }
    }, delay);
  });
}

 