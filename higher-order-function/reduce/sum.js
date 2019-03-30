const arr = [1, 2, 3, 4, 5, 6, 10];
const sum = arr.reduce((sum, number) => {
  return sum + number;
}, 0);
console.log(sum);
