// ВАРИАНТ 1

// const LOGIN = "ALEX";
// const PASSWORD = "q1w2e3";

// const authorize = () => {
//     let userLogin;
//     let userPassword;
//     // let isAuthSuccess = false;
//     let i = 2;

//     while (i >= 0) {
//         userLogin = prompt("Логин:");
//         if (!userLogin) {
//             alert("Введите логин!");
//             continue;
//         }

//         userPassword = prompt("Пароль:");
//         if (!userPassword) {
//             alert("Введите пароль!");
//             continue;
//         }

//         if (userLogin === LOGIN && userPassword === PASSWORD) {
//             // isAuthSuccess = true;
//             alert("Добро пожаловать!");
//             break;

//         } else {
//             alert("Данные неверны!");
//         }
//         alert(`Оставшееся количество попыток ввода - ${i--}`);
//     }
// }

// authorize();

// ВАРИАНТ 2

// const LOGIN = "ALEX";
// const PASSWORD = "q1w2e3";

// const authorize = () => {
//     let userLogin;
//     let userPassword;
//     // let isAuthSuccess = false;

//     for (let i = 2; i >= 0; i--) {
//         userLogin = prompt("Логин:");
//         if (!userLogin) {
//             alert("Введите логин!");
//             continue;
//         }

//         userPassword = prompt("Пароль:");
//         if (!userPassword) {
//             alert("Введите пароль!");
//             continue;
//         }

//         if (userLogin === LOGIN || userPassword === PASSWORD) {
//             // isAuthSuccess = true;
//             alert("Добро пожаловать!");
//             break;

//         } else {
//             alert("Данные неверны!");
//         }
//         alert(`Оставшееся количество попыток ввода - ${i}`);
//     }
// }

// authorize();


// ВАРИАНТ 3 (Аня, разбор ДЗ)

const LOGIN = "ALEX";
const PASSWORD = "q1w2e3";

const authorize = () => {

    let isAuthSuccess = false;
    let userAttempts = 3;

    while (userAttempts !== 0) {

        let userLogin = prompt("Логин:");

        if (!userLogin) {
            alert("Введите логин!");
            continue;
        }

        let userPassword = prompt("Пароль:");

        if (!userPassword) {
            alert("Введите пароль!");
            continue;
        }

        if (userLogin === LOGIN && userPassword === PASSWORD) {
            isAuthSuccess = true;
            break;

        } else {
            userAttempts--
            alert(`Данные не верны. Оставшееся количество попыток: ` + userAttempts);
        }
    }

    if (isAuthSuccess) {
        alert("Welcome!");
    } else {
        alert("Попытки закончились!");
    }
}

authorize();