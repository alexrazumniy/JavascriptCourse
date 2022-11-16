const number1 = Number(prompt('Введите число 1'));
const number2 = Number(prompt('Введите число 2'));

if (number1 > number2) {
    alert(`Число ${number1} больше, чем число ${number2}`);
} else if (number1 < number2) {
    alert(`Число ${number1} меньше, чем число ${number2}`);
} else {
    alert(`Числа равны`);
}