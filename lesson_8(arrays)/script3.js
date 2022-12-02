// findExcess([0, 1, 2]); // -> 1
// findExcess([1, 2, 3]); // -> 2
// findExcess([2, 6, 8, 10, 3]); // -> 3
// findExcess([0, 0, 3, 0, 0]); // -> 3
// findExcess([1, 1, 0, 1, 1]); // -> 0


const findExcess = (arr) => {
    
    let evenNumbers = [];
    let oddNumbers = [];

    for (let number of arr) {
        if (number % 2 === 0) {
            evenNumbers.push(number)
        } else {
            oddNumbers.push(number)
        }
    }
    if (evenNumbers.length > oddNumbers.length) {
        // console.log(evenNumbers);
        alert(`лишнее число ` + oddNumbers);
    } else {
        // console.log(oddNumbers);
        alert(`лишнее число ` + evenNumbers);
    }
    return arr
}

const excess = findExcess([2, 6, 8, 10, 3]);
console.log(excess)


// ----ВАРИАНТ С ВВОДОМ ЧИСЕЛ ВРУЧНУЮ----

// const findExcess = () => {
    
//     let arrayOfInteger = [];    
//     let evenNumbers = [];
//     let oddNumbers = [];
//     let end = false;
    
//         do {
//             let number = prompt("Введите целое число");
//             if (number == null) {
//                 end = true
//             } else {
//                 arrayOfInteger.push(number);
//                 console.log(arrayOfInteger); // контроль правильности ввода чисел
//             }
//         } while (!end);
        

//     for (let number of arrayOfInteger) {
//         if (number % 2 === 0) {
//             evenNumbers.push(number)
//         } else {
//             oddNumbers.push(number)
//         }
//     }
//     if (evenNumbers.length > oddNumbers.length) {
//         // console.log(evenNumbers);
//         alert(`лишнее число ` + oddNumbers);
//     } else {
//         // console.log(oddNumbers);
//         alert(`лишнее число ` + evenNumbers);
//     }
//     return
// }

// const excess = findExcess();
// console.log(excess)
