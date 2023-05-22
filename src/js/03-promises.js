import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const bntSubmit = document.querySelector('button[type="submit"]');
const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');

form.addEventListener('submit', onSubmit);

bntSubmit.setAttribute('disabled', 'disabled');

function onSubmit(event) {
  event.preventDefault();

  const firstDelay = delayInput.value;
  const inputDelay = stepInput.value;
  const amount = amountInput.value;
  if (amount <= 0 && inputDelay <= 0 && firstDelay <= 0) {
    Notiflix.Notify.warning("No");
  } else {
    for (let i = 0; i <= amount - 1; i += 1) {
      let delay = Number(i * inputDelay) + Number(firstDelay);
      const promise = createPromise(amount, delay);
      promise
        .then(({ amount, delay }) => {
          Notiflix.Notify.success(`Fulfilled promise ${i + 1} in ${delay} ms`);
        })
        .catch(({ amount, delay }) => {
          Notiflix.Notify.failure(`Rejected promise ${i + 1} in ${delay} ms`);
        });
    }
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

form.addEventListener('keyup', checkValid);

function checkValid() {
  
  const firstCheckValid = delayInput.value.length;
  const delayStepValid = stepInput.value.length;
  console.log(firstCheckValid);
  console.log(delayStepValid);
  if (firstCheckValid !== 0 && delayStepValid !== 0) {
    bntSubmit.removeAttribute('disabled');
  } else if (firstCheckValid === 0 || delayStepValid === 0) {
    bntSubmit.setAttribute('disabled', 'disabled');
  }
}



// function checkValid() {
//   console.log(delayInput.validity.valid);
//   console.log(stepInput.validity.valid);

//   if (delayInput.validity.valid && stepInput.validity.valid) {
//     bntSubmit.removeAttribute('disabled');
//   } else if (!delayInput.validity.valid || !stepInput.validity.valid) {
//     bntSubmit.setAttribute('disabled', 'disabled');
//   }
// }
