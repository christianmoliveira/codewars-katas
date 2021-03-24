/**
 * Write a function that combines two arrays by alternatingly taking elements 
 * from each array in turn.
 */

function mergeArrays(a, b) {
  let mergedArr = [];

  if (a.length >= b.length) {
    for (let i = 0; i < a.length; i++) {
      if (i < b.length) {
        mergedArr.push(a[i]);
        mergedArr.push(b[i]);
      } else {
        mergedArr.push(a[i]);
      }
    }
  } else {
    for (i = 0; i < b.length; i++) {
      if (i < a.length) {
        mergedArr.push(a[i]);
        mergedArr.push(b[i]);
      } else {
        mergedArr.push(b[i]);
      }
    }
  }

  return mergedArr;
}

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']));
console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]));
console.log(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']));
console.log(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]));