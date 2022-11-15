const userName = prompt("Введите свое имя");
const userAge = +prompt("Сколько Вам лет?");

function showGreeting(userAge) {
    if (userAge > 30) {
        alert(`Здравствуйте, ` + userName + `!`);
    } else {
        alert(`Привет, ` + userName + `!`);
    }
}

showGreeting(userAge);