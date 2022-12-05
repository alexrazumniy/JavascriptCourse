// ----- task 1.1

// const numbers = [1, 2, -10, -2, 7];

// const isTrue = numbers.map((num) => num > 0);
// console.log(isTrue);



// ----- task 1.2

const users = [
    {
      name: 'Sam',
      role: 'admin',
      age: 25,
    },
      {
      name: 'Peter',
      role: 'admin',
      age: 16,
    },
      {
      name: 'Pablo',
      role: 'admin',
      age: 32,
    },
      {
      name: 'Enrico',
      role: 'client',
      age: 43,
    },
      {
      name: 'Mary',
      role: 'client',
      age: 34,
    },
      {
      name: 'Katerine',
      role: 'guest',
      age: 17,
    },
  ]
  
  const adultAdmins = users.filter((user) => role === 'admin' && age > 18);

//   adultAdmins(users)
    // .map(user)
    console.log(adultAdmins);