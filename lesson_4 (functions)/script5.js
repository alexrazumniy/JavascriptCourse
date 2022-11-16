const userName = prompt("Введите свое имя");
const userAge = Number(prompt("Сколько Вам лет?"));
// const userAge = +prompt("Сколько Вам лет?"); ---вариант с +prompt

function showGreeting(userAge) {
    if (userName == '' || userName == ' ' || userAge == '' || userAge == ' ') {
        alert(`Недостаточно данных!`);
    } else if (userAge > 30) {
        alert(`Здравствуйте, ${userName}!`);
    } else if (userAge <= 30) {
        alert(`Привет, ${userName}!`);
    } else if (userAge !== "number") {
        alert(`Данные о возрасте введены неверно!`);
    } else {
        return;
    }
}

showGreeting(userAge);