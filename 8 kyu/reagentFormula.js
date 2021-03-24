/**
 * You are given a integer array formula. Array contains only digits 1-8 that
 * represents material 1-8. Your task is to determine if the formula is valid.
 * Returns true if it's valid, false otherwise.
 *
 * ! Rules:
 * material1 and material2 cannot be selected at the same time
 * material3 and material4 cannot be selected at the same time
 * material5 and material6 must be selected at the same time
 * material7 or  material8 must be selected(at least one, or both)
 */
function isValid(formula) {
  const rules = [
    [[1, 2], 1],
    [[3, 4], 1],
    [[5, 6], 2],
    [[7, 8], 1],
  ];

  for (let i = 0; i < rules.length; i++ ) {
    if ( formula.includes ) {

    }
  }
  
}

isValid([1, 3, 7]);
// [1,3,5,7] => false
// [5,6,7] => true
// [6,7,8] => false
// [7, 8] => true
