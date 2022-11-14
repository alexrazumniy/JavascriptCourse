// ЗАДАНИЕ 3

function getExponentiation(a, b = 2) {
    return a ** b;
}

const exp = getExponentiation (2, 4);
alert(`результат возведения в степень равен ` + exp);