// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// function containsPairWithSum(numbers, k) {
//   let newNumbers = numbers;
//   for (let i = 1; i < newNumbers.length; i++) {
//     console.log(newNumbers[i]);
//     if (newNumbers[0] + newNumbers[i] === k) {
//       return console.log(true);
//     }
//   }
//   newNumbers.shift();
//   if (newNumbers.length != 0) {
//     containsPairWithSum(newNumbers, k);
//   } else {
//     return console.log(false);
//   }
// }
// containsPairWithSum([15, 17, 7, 3, 0], 17);

function containsPairWithSum(numbers, k) {
  numbers.sort(function(a, b) {
    return a - b;
  });
  console.log(numbers);
  let j = numbers.length - 1;
  for (let i = 0; i < j; ) {
    console.log(numbers[i], numbers[j], j);
    let sum = numbers[i] + numbers[j];
    console.log("sum", sum);
    if (sum < k) i++;
    else if (sum > k) j--;
    else return true;
  }
  return false;
}
console.log(containsPairWithSum([18, 15, 2, 3, 1, 0, 0], 17));
