// countTrue([true, false, false, true, false]); // -> 2
// countTrue([false, false, false, false]); // -> 0
// countTrue([]); // -> 0

const countTrue = (arr) => {
    let value = 0;

    for (let number of arr) {
        // console.log(number);
        if (number === true) {
            value += number
        }
    }
    return value;
}

const result = countTrue([true, false, false, true, false]);
console.log(`количество значений "true" в массиве равно ${result}`)
