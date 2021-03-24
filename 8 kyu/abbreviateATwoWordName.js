/**
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
 * The output should be two capital letters with a dot separating them.
 */

function abbrevName(name) {
  const separatedWords = name.split(' ');
  let initials = [];

  for (let i = 0; i < separatedWords.length; i++) {
    initials[i] = separatedWords[i][0].toUpperCase();
  }

  initials = initials.join('.');
  
  return initials;
}

abbrevName('christian Menezes');
