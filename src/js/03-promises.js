import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const bntSubmit = document.querySelector('button[type="submit"]');
const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');


bntSubmit.addEventListener("click", onSubmit);

  

function onSubmit(event) {
  event.preventDefault();

  const firstDelay = delayInput.value;
  const inputDelay = stepInput.value;
  const position = amountInput.value;
  
  console.log(firstDelay);
  // console.log(delay);
  console.log(position);
  
  let delay = firstDelay;

    for (let i = 0; i <= position; i += 1) {
      setTimeout(() => {
        createPromise();
        console.log(i);
       
      }, `${delay}`);
       delay += `${inputDelay}`;
      // 
    }
    // const timerId = setTimeout(conter, `${firstDelay}`);


}
    

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve('Good');
      }
      reject('Bad');
    }, `${delay}`);
  })
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
};


// createPromise(2, 1500)
  

//  const conter = () => {
//     for (let i = 0; i < position; i++) {
//       console.log(i);
//       createPromise(position, delay);
//     }
//     console.log('Конец работы');
//   }
//   const timerId = setTimeout(conter, `${firstDelay}`);


