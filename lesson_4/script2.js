// ЗАДАНИЕ 2

// ---вариант 1---

// function getSum() {
//     const a = Number(prompt("Первое число:"));
//     const b = Number(prompt("Второе число:"));
    
//     const sum = a + b;
//     alert(`сумма чисел равна ` + sum);
// }

// getSum();


// ---вариант 2---

// function getSum(a, b) {
//     return a + b;
// }

// const sum = getSum (5, 7);
// alert(`сумма чисел равна ` + sum);


// ---вариант 3---

const getSum = (a, b) => a + b;

const sum = getSum(5, 3);
alert(`сумма чисел равна ` + sum);
