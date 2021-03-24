// When provided with a letter, return its position in the alphabet.

function position(letter){
  return `Position of alphabet: ${letter.charCodeAt() - 96}`;
}

console.log(position('a'));
console.log(position('z'));
console.log(position('e'));
