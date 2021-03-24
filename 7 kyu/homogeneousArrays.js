/**
 * Challenge:
 * 
 * Given a two-dimensional array, return a new array which carries over only 
 * those arrays from the original, which were not empty and whose items are all 
 * of the same type (i.e. homogenous). For simplicity, the arrays inside the 
 * array will only contain characters and integers.
 * 
 * Example:
 * 
 * Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function 
 * should return [[1, 5, 4], ['b']].
 */

function filterHomogenous(arrays) {
  let typeOfFirstElement;
  let filteredArray = [];
  let arrayCounter = 0;

  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].length !== 0) {
      typeOfFirstElement = typeof arrays[i][0];
      for (let j = 0; j < arrays[i].length; j++) {
        if (typeof arrays[i][j] === typeOfFirstElement) {
          arrayCounter++;
        }
      }

      if (arrayCounter === arrays[i].length) filteredArray.push(arrays[i]);
      arrayCounter = 0;
    }
  }

  return filteredArray;
}

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));
console.log(filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []]));