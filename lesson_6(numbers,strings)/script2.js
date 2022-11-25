

// Math.random()
const random = Math.random();

// console.log(`random`, random);

const getRandomInteger = (max) => {
  return Math.round(Math.random() * max);
};

const integerRandom = getRandomInteger(1000);
console.log(`integerRandom`, integerRandom);

