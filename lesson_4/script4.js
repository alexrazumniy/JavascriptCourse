// ЗАДАНИЕ 4
// ---Вариант 1---

// const d = Number(prompt("Введите число от 1 до 7"));

// function getDayOfWeek(d) {
//     switch (d) {
//         case 1:
//             alert("Понедельник");
//             break;
//         case 2:
//             alert("Вторник");
//             break;
//         case 3:
//             alert("Среда");
//             break;
//         case 4:
//             alert("Четверг");
//             break;
//         case 5:
//             alert("Пятница");
//             break;
//         case 6:
//             alert("Суббота");
//             break;
//         case 7:
//             alert("Воскресенье");
//             break;
//         default:
//             alert("Такого дня нет!");
//     }
// }

// getDayOfWeek(d);

// ---Вариант 2---

const d = Number(prompt("Введите число от 1 до 7"));

function getDayOfWeek(d) {
    if (d === 1) {
        alert("Понедельник");
    } else if (d === 2) {
        alert("Вторник");
    } else if (d === 3) {
        alert("Среда");
    } else if (d === 4) {
        alert("Четверг");
    } else if (d === 5) {
        alert("Пятница");
    } else if (d === 6) {
        alert("Суббота");
    } else if (d === 7) {
        alert("Воскресенье");
    } else {
        alert("Такого дня нет!");
    }
}

getDayOfWeek(d);