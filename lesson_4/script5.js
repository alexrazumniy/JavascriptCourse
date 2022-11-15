const userName = prompt("Введите свое имя");
const userAge = +prompt("Сколько Вам лет?");

function showGreeting(userAge) {
    if ((userAge > 30) && (userAge = "number")) {
        alert(`Здравствуйте, ` + userName + `!`);
    } else if ((userAge <= 30) && (userAge = "number")) {
        alert(`Привет, ` + userName + `!`);
    } else {
        alert(`Возраст введен неверно!`);
    }
}

showGreeting(userAge);