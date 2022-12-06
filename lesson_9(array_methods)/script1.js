// ----- task 1.1

// const numbers = [1, 2, -10, -2, 7];

// const isTrue = numbers.map((num) => num > 0);
// console.log(isTrue);



// ----- task 1.2

// const users = [
//     {
//         name: 'Sam',
//         role: 'admin',
//         age: 25,
//     },
//     {
//         name: 'Peter',
//         role: 'admin',
//         age: 16,
//     },
//     {
//         name: 'Pablo',
//         role: 'admin',
//         age: 32,
//     },
//     {
//         name: 'Enrico',
//         role: 'client',
//         age: 43,
//     },
//     {
//         name: 'Mary',
//         role: 'client',
//         age: 34,
//     },
//     {
//         name: 'Katerine',
//         role: 'guest',
//         age: 17,
//     },
// ]

// const adultAdmins = (arr) => {
//     return arr
//         .filter((user) => user.age > 18 && user.role === 'admin')
//         .map((user) => user.name)
// }

// const result = adultAdmins(users);
// console.log(result)



// ----- task 1.3

const numbers = [1, 10, 17, 24, 45];

const averageValue = numbers.reduce((sum, value) => {
    return sum + value / numbers.length;
}, 0);

console.log(averageValue)


// Решение из разбора ДЗ

// const countAverage = (arr) => {
//     // total - общее значение
//     // amount - текущее значение (число)
//     // index - количество итераций
//     // array - массив, который перебираем

//     return arr.reduce((total, amount, index, array) => {
//         total += amount;
//         if (index === array.length - 1) {
//             return total / array.length;
//         } else {
//             return total;
//         }
//     });
// }

// const averageResult = countAverage([1, 10, 17, 24, 45]);
// console.log(averageResult)