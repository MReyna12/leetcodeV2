function numOfStrings(patterns, word) {
  let substringCount = 0;

  for (let i = 0; i < patterns.length; i++) {
    if (word.includes(patterns[i])) substringCount++;
  }

  return substringCount;
}

numOfStrings(["a", "abc", "bc", "d"], "abc");
