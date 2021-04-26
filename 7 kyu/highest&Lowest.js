function highAndLow(numbers){
  let max = -Infinity;
  let min = Infinity;
  let maxMinStr = '';

  numbers.split(' ').map(element => {
    if (parseInt(element) > max) max = element;
    if (parseInt(element) < min) min = element;
  });

  maxMinStr = `${max} ${min}`;
  
  console.log(maxMinStr);
  // return (maxMinStr
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")