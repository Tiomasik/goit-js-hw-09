import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    inputEl: document.querySelector('input[id="datetime-picker"]'),
    btnStart: document.querySelector('button[data-start]'),
    timeDays: document.querySelector('span[data-days]'),
    timeHours: document.querySelector('span[data-hours]'),
    timeMinutes: document.querySelector('span[data-minutes]'),
    timeSeconds: document.querySelector('span[data-seconds]')
}

refs.timeDays.style.color = "green";
refs.timeHours.style.color = "violet";
refs.timeMinutes.style.color = "yellow";
refs.timeSeconds.style.color = "red";

const timeStart = () => {
    console.log('Пустили таймер');
    refs.btnStart.setAttribute('disabled', 'disabled');
}

const clickBtn = refs.btnStart.addEventListener('click', timeStart);

const dateNow = new Date();
console.log(dateNow.getTime());

const fp = flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (dateNow >= selectedDates[0].getTime()) {
            Notiflix.Notify.failure("Please choose a date in the future");
        } else {
            refs.btnStart.removeAttribute('disabled');
            console.log(selectedDates[0].getTime());
        }
    },
});

class Timer {
    constructor() {
        
    }
}

const timer = new Timer();