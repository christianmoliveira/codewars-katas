/**
 * Write a function that rearranges an integer into its largest possible value.
 */

function superSize(num){
  if (num < 10) {
    return num;
  } else {
    return +num.toString().split('').sort((a, b) => b - a).join('');
  }
}

const testCase1 = 69;
const testCase2 = 513;
const testCase3 = 2017;
const testCase4 = 414;
const testCase5 = 6019;
const testCase6 = 123456789;
console.log(superSize(testCase1));