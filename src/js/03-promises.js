import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget;
  let firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const amountPromises = Number(amount.value);
  for (let position = 1; position <= amountPromises; position += 1) {
    createPromise(position, firstDelay);
    firstDelay += delayStep;
  }
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
}
