let minNumber = 10;
let maxNumber = 20;

const getRandomInteger = () => {
    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

const integerRandom = getRandomInteger(minNumber, maxNumber);
console.log(`Случайное целое число в промежутке от ${minNumber} до ${maxNumber} равно ${integerRandom}`);

