function countWords(words1, words2) {
  let words1Object = {};
  let commonCount = 0;

  for (let i = 0; i < words1.length; i++) {
    const word = words1[i];
    if (words1Object[word] === undefined) {
      words1Object[word] = 1;
    } else if (words1Object[word]) {
      words1Object[word]++;
    }
  }

  for (let j = 0; j < words2.length; j++) {
    const word = words2[j];
    if (words1Object[word] === 1) {
      commonCount++;
      words1Object[word] -= 1;
    } else if (words1Object[word] === 0) {
      commonCount--;
      words1Object[word] = false;
    }
  }

  return commonCount;
}
