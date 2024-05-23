import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const delayInput = document.querySelector('input[name="delay"]');
  const delay = parseInt(delayInput.value);

  const stateInput = document.querySelector('input[name="state"]:checked');
  const state = stateInput ? stateInput.value : null;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Notification',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topCenter',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Notification',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topCenter',
      });
    });
});
