const arr = [3, 2, 8, 0, 1, 3, 2, 6, 3, 9, 5, 8, 2, 8];
const obj = arr.reduce((accumulator, nextValue) => {
  if (nextValue in accumulator) {
    accumulator[nextValue]++;
  } else {
    accumulator[nextValue] = 1;
  }
  return accumulator;
}, {});
console.log(obj);
