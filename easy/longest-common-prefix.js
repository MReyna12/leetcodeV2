function longestCommonPrefix(strs) {
  let firstWord = strs[0];

  for (let i = 0; i < firstWord.length; i++) {
    for (const string of strs) {
      if (string[i] !== firstWord[i]) return string.slice(0, i);
    }
  }

  return strs[0];
}
