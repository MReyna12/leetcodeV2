function prefixCount(words, prefix) {
  const prefixLength = prefix.length;
  let prefixResult = 0;

  for (let i = 0; i < words.length; i++) {
    let prefixCharacterCount = 0;
    for (let j = 0; j < prefixLength; j++) {
      if (words[i][j] !== prefix[j]) {
        break;
      } else if (words[i][j] === prefix[j]) {
        prefixCharacterCount++;
      }
    }
    if (prefixCharacterCount === prefixLength) prefixResult++;
  }

  return prefixResult;
}

prefixCount(["pay", "attention", "practice", "attend"], "at");
