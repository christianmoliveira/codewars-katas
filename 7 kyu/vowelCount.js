function getCount(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  str.split('').map(elem => {
    if (vowels.includes(elem))
      vowelsCount += 1;
  });

  return vowelsCount;
}

console.log(getCount('abracadabra'));