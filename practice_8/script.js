// ---Задача 1---
// 1. Написать функцию, которая находит в массиве минимальное
// и максимальные значения:

// - масиив всегда состоит из чисел
// - массив обязательно содержит как минимум один элемент

// Алгоритм:
// - создать переменные для хранения минимума и максимума
// - каждое значение массива проверять - больше ли оно или меньше
//   текущих значений минимума и максимума
// - вернуть результат в виде объекта


const getMinMax = (arr) => {

    // if (arr.length === 1) {
    //     return [arr[0], arr[0]]
    // }

    // let min = 0;
    // let max = 0;

    const res = {
        min: arr[0],
        max: arr[0],
    };

    for (let number of arr) {
        console.log(`number`, number);
        if (number < res.min) {
            res.min = number
        }

        if (number > res.max) {
            res.max = number
        }
    }

    return res;
}

// const minAndMaxArray = getMinMax([2, 3, 6, 1, -10]);

// const minMax = getMinMax([2, 3, 6, 1, -10]);
// console.log(`MinMax`, minMax);


// ---Задача 2---
// 2. Написать функцию, которая развовачивает многовложенный
// массив в "плоский".

// - Простой уровень: массив имеет 2 уровня вложенности
// - Сложный уровень: массиив может иметь неопределенное
//   количество вложенностей от 1 до ...
// - функция должна вернуть новый массив
// - в результирующем массиве должен быть сохранен порядок
//   элементов

// const flat = (arr) => {
//     const res = [];

//     for (let elem of arr) {
//         if (Array.isArray(elem)) {
//             // console.log(`elem is array`, elem);
//             for (let nestedElem of elem) {
//                 res.push(nestedElem)
//             }
//         } else {
//             res.push(elem)
//             // console.log(`elem is primitive`, elem);
//         }
//     }

//     return res;
// }

// const flatArray = flat([[1, 2], [3, 4], 5, [6, 7, 8]]);
// const flatArray = flat([[1, 2], [3, 4, [11, 12]], 5, [6, 7, 8]]);
// console.log(`flatArray`, flatArray);


const flat = (arr, res = []) => {
    // const res = [];

    for (let elem of arr) {
        if (Array.isArray(elem)) {
            console.log(`res`, res);
            flat(elem, res)
        } else {
            res.push(elem)
            // console.log(`arr`, arr);
            // console.log(`elem is primitive`, elem);
        }
    }

    return res;
}

// const flatArray = flat([[1, 2], [3, 4, [11, 12]], 5, [6, 7, 8]]);
// console.log(`flatArray`, flatArray);



// ---Задача 3---
// 3. К кассам самообслуживания в супермаркете стоит очередь.
// Ваша задача - написать функцию для расчета общего времени,
// необходимого всем клиентам, чтобы оформить заказ!

// Вводные данные:
// - Клиенты: массив положительных целых чисел, представляющий
//   очередь. Каждое целое число представляет покупателя, а его
//   значение - это время, необходимое каждому клиенту для
//   оформления заказа.

// - кассы: положительное целое число, количество касс.

// Ожидаемый результат:
// Функция должна возвращать целое число - общее необходимое время.

// [5, 3, 4], 1
// - 1 -
//   5  5
//   3  8
//   4  12

// [10, 2, 3, 3], 2
// - 1    - 2 -
//   10 10  2 2
//          3 5
//          3 8

// Алгоритм:
// - разделить очередь на 2 группы: те которые сразу займут
//   все доступные кассы и оставшиеся покупатели
// - распределить всех оставшихся покупателей по их
//   потенциальным кассам, каждый последующий покупатель проходит
//   на кассу с наименьшим временим ожидания
// - если покупатель становится в определенную очередь, ее
//   суммарное время ожидания увеличивается
// - как только все покупатели распределены, найти самую
//   длинную очередь (очередь с самым большим временем ожидания)


const queueTime = (customers, pointsQuantity) => {
    if (!customers.length) {
        return 0;
    }

    const cashPoints = [];
    const restQueue = [];

    for (let i = 0; i < customers.length; i++) {
        const currentCustomer = customers[i];
        if (i < pointsQuantity) {
            cashPoints.push(currentCustomer);
        } else {
            restQueue.push(currentCustomer);

        }
    }
    // console.log(`cashPoints`, cashPoints);
    // console.log(`restQueue`, restQueue);

    for (let i = 0; i < restQueue.length; i++) {
        const shortestQueue = getMinMax(cashPoints).min;
        const currentCustomerTime = restQueue[i]

        console.log(`shortestQueue`, shortestQueue);

        for (j = 0; j < cashPoints.length; j++) {
            if (cashPoints[j] === shortestQueue) {
                cashPoints[j] += currentCustomerTime;
            }
        }

        console.log(`cashPoints`, cashPoints);
    }

    return getMinMax(cashPoints).max
};

// const time = queueTime([10, 2, 3, 3], 2);
const time = queueTime([5, 3, 4], 2);
console.log(`time`, time);