const getOccurrencesCount = (arr) => {
    let occurrencesNumber = {};

    for (let element of arr) {
        if (!occurrencesNumber[element]) {
            occurrencesNumber[element] = 1
        } else {
            occurrencesNumber[element] = occurrencesNumber[element] + 1
        }
    }
    return occurrencesNumber;
}

// const result = getOccurrencesCount(["a", "v", "a", "b", "b"]);
const result = getOccurrencesCount([
    "apples",
    "apples",
    "oranges",
    "pears",
    "pears",
    "apples",
    "oranges",
    "oranges",
    "pears",
]);
console.log(result)