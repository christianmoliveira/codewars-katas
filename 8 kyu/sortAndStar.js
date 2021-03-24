/**
 * You will be given an vector of string(s). You must sort it alphabetically (case-sensitive, and based 
 * on the ASCII values of the chars) and then return the first value.
 * The returned value must be a string, and have "***" between each of its letters.
 */

function twoSort(s) {
  let sortedList = s.sort();
  let threeStarsString = sortedList[0].split('').join('***');

  return threeStarsString;
}

const testCase1 = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"];
const testCase2 = ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"];

console.log(twoSort(testCase2));