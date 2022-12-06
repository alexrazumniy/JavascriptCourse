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
  
  filterData(data, { age: 23 });
  // [
  //     {
  //         "name": "Steve",
  //         "age": 23,
  //         "position": "middle",
  //         "isActive": true
  //     }
  // ]
  
  filterData(data, { age: 24 });
  
  // [
  //     {
  //         "name": "John",
  //         "age": 24,
  //         "position": "senior",
  //         "isActive": false
  //     },
  //     {
  //         "name": "Mary",
  //         "age": 24,
  //         "position": "middle",
  //         "isActive": false
  //     }
  // ]
  
  filterData(data, { age: 19, position: "junior" });
  // [
  //     {
  //         "name": "Sally",
  //         "age": 19,
  //         "position": "junior",
  //         "isActive": false
  //     }
  // ]
  
  // то есть, функция вернула массив со всеми работниками на позиции junior и всеми работниками, которым 19 лет