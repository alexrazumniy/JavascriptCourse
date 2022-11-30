const salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
};

const getSalariesSum = (salaries) => {
    let sum = 0;
    for (let employee in salaries) {
        sum += +salaries[employee];
    }

    return sum;
};

const result = getSalariesSum(salaries);
console.log(result.toFixed(2))