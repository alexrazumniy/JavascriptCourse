const number1 = Number(prompt("Введите число 1"));
const mathOperation = prompt("Введите действие, которое хотите выполнить (+ - / *)");
const number2 = Number(prompt("Введите число 2"));
// let result;
let sum;
let subtraction;
let multiplication;
let division;

switch (mathOperation) {
    case `+`:
        sum = number1 + number2;
        alert(`сумма чисел равна = ` + sum);
        break;
    case `-`:
        subtraction = number1 - number2;
        alert(`разность чисел равна = ` + subtraction);
        break;
    case `/`:
        multiplication = number1 / number2;
        alert(`результат деления равен = ` + multiplication);
        break;
    case `*`:
        division = number1 * number2;
        alert(`произведение чисел равно = ` + division);
        break;
}