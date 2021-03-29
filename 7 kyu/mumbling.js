/**
 * This time no story, no theory. The examples below show you how to write function accum:
 * accum("abcd") -> "A-Bb-Ccc-Dddd"
 * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt") -> "C-Ww-Aaa-Tttt"
 */

function accum(s) {
	const counter = s.length;
  const stringCopy = [...s.split('')];
  let mumbling = '';

  for (let i = 0; i < counter; i++) {
    for (j = 0; j <= i; j++) {
      if (j === 0) {
        mumbling += stringCopy[i].toUpperCase();
      } else {
        mumbling += stringCopy[i].toLowerCase();
      }
    }
    if (i !== (s.length - 1)) {
      mumbling += '-';
    }
  }

  return mumbling;
}

console.log(accum('ZpglnRxqenU'));
console.log(accum('MjtkuBovqrU'));