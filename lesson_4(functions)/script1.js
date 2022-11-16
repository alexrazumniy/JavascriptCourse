// ЗАДАНИЕ 1

// ---вариант 1---

// function areEqual() {
//     const a = Number(prompt("Первое число:"));
//     const b = Number(prompt("Второе число:"));
//     if (a === b) {
//         alert (true);
//     } else {
//         alert (false);
//     }    
// }

// areEqual();


// ---вариант 2---

// function areEqual(a, b) {    
//     if (a === b) {
//         alert(true);
//     } else {
//         alert(false);
//     }    
// }

// areEqual(5, 5);


// ---вариант 3---

function areEqual(a, b) {
    return a === b ? alert(true) : alert(false);
}

areEqual(5, 5);