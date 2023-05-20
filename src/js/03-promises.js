import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const bntSubmit = document.querySelector('button[type="submit"]');
const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');


bntSubmit.addEventListener("click", onSubmit);

  const firstDelay = delayInput.value
const delay = stepInput.value;
const position = amountInput.value;

  function onSubmit(event) {
    event.preventDefault();
    
    const promises = amountInput.value
   
    const array = promises.map(promise => {
      function createPromise(position, delay) {
        const shouldResolve = Math.random() > 0.3;
         setTimeout(() => 
        if (shouldResolve) {
          fulfilled(`✅ Fulfilled promise ${position} in ${delay}ms`);
        } else {
          rejected(`❌ Rejected promise ${position} in ${delay}ms`)
        }
      } 
    });
   
}






