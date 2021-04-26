function disenvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let disenvowelStr = '';

  return disenvowelStr = str.split('')
                            .filter(element => !vowels.includes(element))
                            .join('');
}

// Tests
disenvowel("This website is for losers LOL!")
disenvowel("No offense but,\nYour writing is among the worst I've ever read")
disenvowel("What are you, a communist?")