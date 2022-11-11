const number1 = Number(prompt("Введите число 1"));
const mathOperation = prompt("Введите действие, которое хотите выполнить (+ - * / **)");
const number2 = Number(prompt("Введите число 2"));

switch (mathOperation) {
    case `+`:
        const sum = number1 + number2;
        alert(`сумма чисел = ` + sum);
        break;
    case `-`:
        const subtraction = number1 - number2;
        alert(`разность чисел = ` + subtraction);
        break;
    case `*`:
        const multiplication = number1 * number2;
        alert(`произведение чисел = ` + multiplication);
        break;
    case `/`:
        const division = number1 / number2;
        alert(`результат деления = ` + division);
        break;
    case `**`:
        const exponentiation = number1 ** number2;
        alert(`результат возведения в степень = ` + exponentiation);
        break;
}