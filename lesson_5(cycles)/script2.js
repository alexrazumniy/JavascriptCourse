let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}

// второй вариант:

// for (let i = 2; i < n; i++) {
//   for (let j = 2; j <= i; j++) {
//     if (i % j == 0 && j < i) {
//       break;
//     } else if (j === i) {
//       console.log(i);
//     }
//   }
// }