/**
 * You are given an array of positive ints where every element appears three 
 * times, except one that appears only once (let's call it x) and one that 
 * appears only twice (let's call it y).
 * 
 * Your task is to find x * x * y.
 */

function missingValues(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  const repeatedElements = {};
  let objectCounter = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    repeatedElements[sortedArr[i]] = 1;
    // if (sortedArr[i + 1] === sortedArr[i]) {
    //   if (repeatedElements.hasOwnProperty(sortedArr[i])) {
    //   } else {
    //     repeatedElements.sortedArr[i] = 1;
    //   }
    // }
  }

  return objectCounter;
}

// Basic tests
console.log(missingValues([1, 1, 1, 2, 2, 3]));
// console.log(missingValues([96, 56, 24, 46, 75, 46, 75, 21, 46, 21, 75, 96, 56, 96, 56]));
// console.log(missingValues([27, 65, 44, 39, 44, 21, 21, 44, 65, 39, 21, 65]));
// console.log(missingValues([66, 4, 80, 66, 4, 83, 97, 81, 19, 4, 80, 51, 83, 81, 83, 66, 51, 80, 97, 81, 97]));
// console.log(missingValues([60, 76, 86, 76, 86, 53, 60, 88, 71, 71, 71, 86, 88, 76, 88, 17, 60, 26, 17, 17, 26, 53, 98, 53]));
// console.log(missingValues([42, 23, 45, 33, 33, 19, 42, 79, 79, 23, 95, 95, 79, 19, 42, 33, 19, 23]));
// console.log(missingValues([4, 74, 41, 41, 41, 88, 63, 35, 35, 4, 88, 13, 63, 74, 63, 88, 4, 74]));