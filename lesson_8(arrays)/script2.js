// getOccurrencesCount(["a", "v", "a", "b", "b"]);
// // {
// //   a: 2,
// //   v: 1,
// //   b: 2,
// // }

// getOccurrencesCount([
//   "apples",
//   "oranges",
//   "pears",
//   "pears",
//   "apples",
//   "oranges",
//   "oranges",
//   "pears",
// ]);
// {
//   apples: 2,
//   oranges: 3,
//   pears: 3,
// }


const getOccurrencesCount = (arr) => {
    let countElement1 = 0;  // "a" or "apples"
    let countElement2 = 0;  // "b" or "oranges"
    let countElement3 = 0;  // "v" or "pears"
    let occurrencesNumber = {};

    for (let element of arr) {
        if (element === "apples") {
            countElement1 += 1;
            occurrencesNumber[element] = countElement1
        }
        if (element === "oranges") {
            countElement2 += 1;
            occurrencesNumber[element] = countElement2
        }
        if (element === "pears") {
            countElement3 += 1;
            occurrencesNumber[element] = countElement3
        }
    }
    return occurrencesNumber;
}

// const result = getOccurrencesCount(["a", "v", "a", "b", "b"]);
const result = getOccurrencesCount([
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