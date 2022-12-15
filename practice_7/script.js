const num1 = 10;
let num2 = num1;

num2 = 22;
console.log(`num1`, num1);
console.log(`num2`, num2);

const a = {
    x: 'y'
}

// меняем ссылку в дочернем объекте => меняются значения и в родительском!
const b = a;
const c = b;

c.x = 'z';

console.log('b', b);
console.log('a', a);
console.log('c', c);

// ---Глубокое клонирование/копирование объектов---

const cube = {
    color: "black",
    dimensions: {
        height: 100,
        width: 200,
    },
};

const user = {
    name: "John",
};

const userClone = {};
userClone.name = user.name;

userClone.name = 'Peter';

console.log(`user`, user);
console.log(`userClone`, userClone)


// копирование одноуровневого объекта

const car = {
    name: "BMW",
    year: 2020,
    price: 30000,
};

const makeClone = (obj) => {
    const clone = {};

    for (let key in obj) {
        // console.log(`key`, key);
        // console.log(`obj[key]`, obj[key]);
        clone[key] = obj[key]

    }
    return clone;
}

const carClone = makeClone(car);

carClone.year = 2021;
console.log(`car`, car);
console.log(`carClone`, carClone);

const cubeClone = makeClone(cube);
cubeClone.color = 'white';
// cubeClone.dimensions.height = 1000;
console.log(`cube`, cube);
console.log(`cubeClone`, cubeClone);


// ---РЕКУРСИЯ (вызов в функции самой себя)---

// вычисление факториала обычным методом
const loopFactorial = (n) => {
    let result = 1;

    for (let i = 0; i < n; i++) {
        // result = result * (n - i);
        result *= n - i;
    }

    return result
}

const factorial = loopFactorial(5);
console.log(`factorial`, factorial);

// вычисление факториала РЕКУРСИВНЫМ методом

const recursiveFactorial = (n) => {
    if (n === 1) { // это БАЗА РЕКУРСИИ или УСЛОВИЕ ВЫХОДА ИЗ РЕКУРСИИ
        return n;
    }

    return n * recursiveFactorial(n - 1);
};

// 5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)

console.log(`recursiveFactorial(5)`, recursiveFactorial(5));


//  Рекурсивное клонирование или Глубокое копирование объектов

const makeDeepClone = (obj) => {
    const clone = {};

    console.log(`obj`, obj);

    for (let key in obj) {
        if (typeof obj[key] !== 'object') {
            clone[key] = obj[key];
        } else {
            // console.log(`obj[key]`, obj[key]);

            clone[key] = makeDeepClone(obj[key]);
        }
    }

    return clone;
}

const cubeDeepClone = makeDeepClone(cube);

cubeDeepClone.dimensions.height = 1000;
console.log(`cube`, cube);
console.log(`cubeDeepClone`, cubeDeepClone);


const deepObject = {
    a: {
      b: {
        c: {
          d: {
            e: 1,
          },
        },
      },
    },
    f: 2,
  };
  
  const deepClone = makeDeepClone(deepObject);
  deepClone.a.b.c.d.e = 2;
  
  console.log(`deepObject`, deepObject);
  console.log(`deepClone`, deepClone);