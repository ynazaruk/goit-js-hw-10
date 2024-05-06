import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const myInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const clockFace = document.querySelector('.value');
// console.log(startBTn);
let userSelectedDate = null;
let intervalID = null;

const fp = flatpickr(myInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    intervalID = userSelectedDate - new Date();
    if (intervalID < 1) {
      alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      myInput.disabled = true;
      startBtn.classList.add(`btn-active`);
    }
  },
});
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
const calendar = flatpickr(`#datetime-picker`, fp);

console.log(clockFace);

startBtn.disabled = true;

startBtn.addEventListener(`click`, event => {
  intervalId = setInterval(() => {
    const deltaTime = userSelectedDate - new Date();
    startBtn.classList.remove(`btn-active`);

    if (deltaTime < 1) {
      startBtn.disabled = true;
      clearInterval(intervalId);
      return;
    }
    const timer = convertMs(deltaTime);
    clockFace[0].innerText = timer.days.toString().padStart(2, '0');
    clockFace[1].innerText = timer.hours.toString().padStart(2, '0');
    clockFace[2].innerText = timer.minutes.toString().padStart(2, '0');
    clockFace[3].innerText = timer.seconds.toString().padStart(2, '0');
  }, 1000);
});
