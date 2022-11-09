const a = 5;
const b = 10;

// Выводим в консоль переменные
console.log('a = 5');
console.log('b = 10');

let sumResult = a + b;
console.log('Результат сложения a + b = ' + sumResult); // Результат сложения

let subtractionResult = a - b;
console.log('Результат вычитания a - b = ' + subtractionResult); // Результат вычитания

let multiplicationResult = a * b;
console.log('Результат умножения a * b = ' + multiplicationResult); // Результат умножения

let divisionResult = a / b;
console.log('Результат деления a / b = ' + divisionResult); // Результат деления

let exponentiationResult = b ** a;
console.log('Результат возведения в степень b ^ a = ' + exponentiationResult); // Результат возведения в степень


// Логические операторы

console.log(`true && true                       =`, true && true);
console.log(`true && 'false'                    =`, true && 'false');
console.log(`null == undefined                  =`, null == undefined);
console.log(`1 === '1'                          =`, 1 === '1');
console.log(`true || false && true || false     =`, true || false && true || false);
console.log(`10 || 0 && 'dog' || ''             =`, 10 || 0 && 'dog' || '');
console.log(`false || true                      =`, false || true);
console.log(`0 && 1 || ' ' && 42                =`, 0 && 1 || ' ' && 42);
console.log(`'' == 0                            =`, '' == 0);
console.log(`NaN === NaN && true                =`, NaN === NaN && true);
console.log(`(true || false) && (true || false) =`, (true || false) && (true || false));
console.log(`(10 || 0) && ('dog' || '')         =`, (10 || 0) && ('dog' || ''));