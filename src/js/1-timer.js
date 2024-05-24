import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const myInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

// console.log(startBTn);
let selectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topCenter',
      });
      startBtn.disabled = true;
      startBtn.classList.remove(`btn-active`);
    } else {
      startBtn.disabled = false;
      startBtn.classList.add(`btn-active`);
    }
  },
};

flatpickr('#datetime-picker', options);
startBtn.disabled = true;
startBtn.addEventListener('click', startTimer);

function startTimer() {
  myInput.disabled = true;
  startBtn.disabled = true;
  startBtn.classList.remove(`btn-active`);
  const timerInterval = setInterval(
    () => updateTimer(selectedDate, timerInterval),
    1000
  );
  updateTimer(selectedDate, timerInterval);
}
function updateTimer(selectedDate, timerInterval) {
  const diff = selectedDate - new Date();
  if (diff <= 0) {
    clearInterval(timerInterval);
    myInput.disabled = false;
    startBtn.disabled = false;
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(diff);
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent =
    addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent =
    addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (value < 10) {
    return (value = `0${value}`);
  } else {
    return value;
  }
}
