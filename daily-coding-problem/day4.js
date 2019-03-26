// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.

function findPositiveInteger(arr) {
  let positiveArr = arr.filter(number => {
    return number > 0;
  });
  let positivesortedArr = positiveArr.sort((a, b) => {
    return a - b;
  });
  positivesortedArr = positivesortedArr.filter(function(item, index) {
    return positivesortedArr.indexOf(item) >= index;
  });
  console.log(positivesortedArr);
  for (let i = 0; i < positivesortedArr[positivesortedArr.length - 1]; i++) {
    if (i + 1 !== positivesortedArr[i]) {
      return i + 1;
    }
  }
  return positivesortedArr.length + 1;
}
console.log(
  findPositiveInteger([1, 2, 0, 2, 3, 1, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0])
);
