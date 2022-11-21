function countConsistentStrings(allowed, words) {
  let allowedCharacters = {};
  let consistentStringsTotal = words.length;

  for (let i = 0; i < allowed.length; i++) {
    const character = allowed[i];
    allowedCharacters[character] = true;
  }

  for (const word of words) {
    if (word.length > 1) {
      for (let j = 0; j < word.length; j++) {
        if (allowedCharacters[word[j]] === undefined) {
          consistentStringsTotal--;
          break;
        }
      }
    } else if (allowedCharacters[word] === undefined) {
      consistentStringsTotal--;
    }
  }

  return consistentStringsTotal;
}
