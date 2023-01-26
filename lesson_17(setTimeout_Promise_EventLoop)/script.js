
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

let timeout = null;
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
        timerInput.value = "" // Очищаем инпут
        return
    }

    if (time > 3600) {
        isTimeValid = false;
        errorMessage.innerText = "Значение должно быть от 1 до 3600";
        timerInput.value = "" // Очищаем инпут
        return
    }

    if (!time) {
        isTimeValid = false;
        errorMessage.innerText = "Введите корректное значение от 1 до 3600";
        timerInput.value = "" // Очищаем инпут
        return
    }
    getTimeLeft(time);
    timeout = time;
    timerInput.value = "" // Очищаем инпут после запуска таймера
}
form.addEventListener("submit", handleSubmit);

const formatTime = (timerItem) => {
    return String(timerItem).length < 2 ? `0${timerItem}` : timerItem;
}

const createTimer = (hours, minutes, seconds) => {
    timerWrapper.classList.remove("hidden");

    timerHours.innerText = `${formatTime(hours)}`;
    timerMinutes.innerText = `${formatTime(minutes)}`;
    timerSeconds.innerText = `${formatTime(seconds)}`;
}

const getTimeLeft = (secondsLeft) => {
    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft - hours * 3600) / 60);
    const seconds = secondsLeft - hours * 3600 - minutes * 60;

    createTimer(hours, minutes, seconds);
}

const startTimer = () => {
    isActive = true;

    return new Promise((resolve) => {
        intervalID = setInterval(() => {
            timeout--
            console.log(timeout);

            if (timeout <= 0) {
                clearInterval(intervalID);
                isActive = false;
                intervalID = null;
                resolve();
            }
            const time = getTimeLeft(timeout);
        }, 1000)
    })
}

startButton.addEventListener("click", () => {
    if (isActive) {
        return
    }

    startTimer().then(() => {
        alert('Timer end')
    })
});

pauseButton.addEventListener("click", () => {
    if (isActive) {
        clearInterval(intervalID);
        isActive = false;
    } else {
        startTimer();
        isActive = true;
    }
})