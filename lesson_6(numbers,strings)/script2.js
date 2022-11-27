let min = 5;
let max = 10;

const getRandomInteger = () => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const integerRandom = getRandomInteger(min, max);
console.log(`Случайное целое число в промежутке от ${min} до ${max} равно ${integerRandom}`);


// Вариант Ани

// const getRandomNumber = (min, max) => {
//     const random = min + Math.random(min) * (max + 1 - min);
//     return Math.floor(random);
// };

// const resRandom = getRandomNumber(1, 5);
// console.log(resRandom);