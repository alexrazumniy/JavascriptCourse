// Callback functions
const array = [1, -2, 3, -4, 5];

const ownFilter = (array, isNegative) => {
    for (let number of array) {
        if (number > 0) {
            console.log("Invalid numbers");

            return 0;
        }

        return isNegative(array);
    }
}
    const result = (array) => number + 1;

    const res = isNegative(array, result);

    console.log(res);

// const isNegative = (number) => number < 0;





//   callback();

// // const testFunction = (cb) => {
// //     cb();
// // };

// // testFunction(callback)





// const averageValue = array.reduce((sum, value) => {
//     return sum += value / array.length;
// }, 0);

// console.log(averageValue)



// const numbers = [37, 12, 28, 4, 9] 
// const total = numbers.reduce((total, n) => total + n)
// console.log(total) // 90
