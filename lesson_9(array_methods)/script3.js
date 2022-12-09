const data = [
  {
    name: "John",
    age: 24,
    position: "senior",
    isActive: false,
  },
  {
    name: "Peter",
    age: 33,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sam",
    age: 29,
    position: "junior",
    isActive: true,
  },
  {
    name: "Mary",
    age: 24,
    position: "middle",
    isActive: false,
  },
  {
    name: "Steve",
    age: 23,
    position: "middle",
    isActive: true,
  },
  {
    name: "Kate",
    age: 31,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sally",
    age: 19,
    position: "junior",
    isActive: false,
  },
  {
    name: "Jack",
    age: 19,
    position: "middle",
    isActive: true,
  },
];

// ----Для варианта с вводом вручную----
// const name = prompt("name");
// const age = prompt("age");
// const position = prompt("position");
// const isActive = prompt("isActive");
  
// let objectToFilter = {
//   name,
//   age,
//   position,
//   isActive
// };

let objectToFilter = {age: 19};

console.log(objectToFilter);

const filter = (data, objectToFilter) => {

    let filterData = []

    for (let user of data) {
      if (user.key === objectToFilter.key) { 
    }
    filterData.push(user)
    console.log(filterData);
  }
  return filterData
}
  
  let resFiltered = filter(data, objectToFilter)
  console.log(resFiltered);




// Решение из разбора ДЗ 

// Вариант 1

// const filterData = (dataArray, objectToFilter) => {
//   let result = dataArray.filter(item => {

//     console.log("keys:", Object.keys(objectToFilter));
    
//     return Object.keys(objectToFilter).every(key => {

//       return item[key] === objectToFilter[key]
//     })
//   });
//   return result;
// }

// let resFiltered = filterData(data, {position: "middle"})
// console.log(resFiltered);

// Вариант 2 Короткий

// const filterData = (dataArray, objectToFilter) => dataArray.filter(item =>
//   Object.keys(objectToFilter).every(key =>
//     item[key] === objectToFilter[key]));

// console.log(filterData(data, { age: 19, position: "junior" }));

