function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const increaseCount = counter();
console.log(increaseCount());
console.log(increaseCount());
