import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const myInput = document.querySelector('#datetime-picker');
const startBTn = document.querySelector('button[data-start]');
// console.log(startBTn);
let userSelectedDate;

const fp = flatpickr(myInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      return alert('Please choose a date in the future');
    } else {
      userSelectedDate = selectedDates[0];
    }
  },
});
