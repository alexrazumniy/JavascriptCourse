
const form = document.getElementById('form-timer-input');
const timerInput = document.getElementById('timer_input');
const submitButton = document.getElementById('btn-submit');
const errorMessage = document.getElementById('error_message')
const startButton = document.getElementById('start_btn');
const pauseButton = document.getElementById('pause_btn');
const timerWrapper = document.getElementById('timer');
const timerHours = document.querySelector('.hours');
const timerMinutes = document.querySelector('.minutes');
const timerSeconds = document.querySelector('.seconds');

let intervalID = null;
let isActive = false;

// Валидация заполнения формы (требует доработки!)
const handleSubmit = (event) => {
    event.preventDefault();

    const time = Number(timerInput.value);
    let isTimeValid = true;
    errorMessage.innerText = "";

    if (time <= 0) {
        isTimeValid = false;
        errorMessage.innerText = "Значение должно быть положительное от 1 до 3600";
        return
    }

    if (time > 3600) {
        isTimeValid = false;
        errorMessage.innerText = "Значение должно быть от 1 до 3600";
        return
    }

    if (!time) {
        isTimeValid = false;
        errorMessage.innerText = "Введите корректное значение от 1 до 3600";
        return
    }
    getTimeLeft(time);
    intervalID = time;
    timerInput.value = "" // Очищаем инпут после запуска таймера
}
form.addEventListener("submit", handleSubmit);

// Корректировка 0 -> 00
const formatTime = (timerItem) => {
    return String(timerItem).length < 2 ? `0${timerItem}` : timerItem;
}

// Создание и появление таймера
const createTimer = (hours, minutes, seconds) => {
    timerWrapper.classList.remove("hidden");

    timerHours.innerText = `${formatTime(hours)}`;
    timerMinutes.innerText = `${formatTime(minutes)}`;
    timerSeconds.innerText = `${formatTime(seconds)}`;
}

// Перевод введенных секунд в часы, минуты, секунды
const getTimeLeft = (secondsLeft) => {
    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft - hours * 3600) / 60);
    const seconds = secondsLeft - hours * 3600 - minutes * 60;

    createTimer(hours, minutes, seconds);
}


const startTimer = () => {

    isActive = true;

    getTimeLeft(intervalID);
    const time = setInterval(startTimer, 1000);
    intervalID--;

    // if (!intervalID) {
    //     const time = setInterval(startTimer, 1000);
    //     intervalID--
    // }
    // console.log(intervalID);

    if (intervalID < -1) {
        clearInterval(intervalID);
        intervalID = null;
        alert("Время вышло!");
        return
    } else return

}
startButton.addEventListener("click", startTimer);


const stopTimer = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, delay)
      })
}
pauseButton.addEventListener("click", stopTimer);
