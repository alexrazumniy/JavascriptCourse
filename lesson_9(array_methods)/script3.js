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


const name = prompt("name");
const age = prompt("age");
const position = prompt("position");
const isActive = prompt("isActive");
  

const objectToFilter = {
  name,
  age,
  position,
  isActive
};

console.log(objectToFilter);



const filter = (data, objectToFilter) => {

    let filterData = []
    if (data.filter((item) => Object.keys(objectToFilter).every(key =>
          item[key] === data[key]))) {
      filterData.push(data.item)
    }
    return filterData
  }
  
  let resFiltered = filter(data, objectToFilter)
  console.log(resFiltered);



// 3 завданні буде два перебираючих метода, Filter, який збере підходящі. А в ньому every, який перевірить, щоб кожне значення в объекті співпало з фільтром (бо їх може бути декілька, age і position наприклад, і кожен повинен співпадати).

// Тобто ми в методі фільтр будемо перевіряти кожен объект, на повне співпадіння зі значеннями фільтру




// const filterData = (dataArray, objectToFilter) => dataArray.filter(item =>
//   Object.keys(objectToFilter).every(key =>
//     item[key] === objectToFilter[key]));


// console.log(filterData(data, { age: 19, position: "junior" }));




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