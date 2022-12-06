// const ownForEach = (arr, logger) => {
//     for (let num of arr) {
//         logger(num, arr.indexOf(num), arr)
//     }
// }

// const logger = (element, index, array) => {
//     console.log(`In array [${array}] on position ${index}: ${element}`);
// }; // callback function

// ownForEach([1, 2, 3], logger);


// // Решение в одну строчку

// let arr = [1, 2, 3]
// const logger = (element, index, array) => {
//     console.log(`In array [${array}] on position ${index}: ${element}`);
// }
// let test1 = arr.forEach((num) => logger(num, arr.indexOf(num), arr))


// --------------------------

// const ownMap = (arr, increment) => {
//     let arrClone = [];
//     for (let num of arr) {
//         arrClone.push(increment(num))
//     }
//     return arrClone
// }

// const increment = (number) => number + 1; // callback function

// let resOwnMap = ownMap([1, 2, 3], increment); // [2, 3, 4]
// console.log(resOwnMap)


// // Решение в одну строчку

// let arr2 = [1, 2, 3];
// const increment = (number) => number + 1;
// let test2 = arr2.map((num) => increment(num));
// console.log(test2);


// --------------------------

const ownFilter = (arr, isNegative) => {
    let arrClone = [];
    for (let num of arr) {
        if (isNegative(num)) {
            arrClone.push(num)
        }
    }
    return arrClone
}

const isNegative = (number) => number < 0; // callback function

let resOwnFilter = ownFilter([-2, 4, -1], isNegative); // [-2, -1]
console.log(resOwnFilter);


// // Решение в одну строчку
// let arr3 = [-2, 4, -1];
// const isNegative = (number) => number < 0;
// let test3 = arr3.filter((num) => isNegative(num));
// console.log(test3);
