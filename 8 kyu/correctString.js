function correct(string) {
  let characters = string.split('');

  for (let i = 0; i < characters.length; i++) {
    switch(characters[i]) {
      case '0':
        characters.splice(i, 1, 'O');
        break;
      case '1':
        characters.splice(i, 1, 'I');
        break;
      case '5':
        characters.splice(i, 1, 'S');
        break;
    }
  }

  return characters.join('');
}

const testCase1 = 'L0ND0N';
const testCase2 = 'DUBL1N';
const testCase3 = '51NGAP0RE';
const testCase4 = 'BUDAPE5T';
const testCase5 = 'PAR15';

console.log(correct(testCase2));
