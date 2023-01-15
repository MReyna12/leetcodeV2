function numOfStrings(patterns, word) {
  let substringCount = 0;

  for (let i = 0; i < patterns.length; i++) {
    if (word.includes(patterns[i])) substringCount++;
  }

  return substringCount;
}

function numOfStrings(patterns, word) {
  let substringCount = 0;

  for (let i = 0; i < patterns.length; i++) {
    if (word.split(patterns[i]).length - 1) {
      substringCount++;
    }
  }

  return substringCount;
}
