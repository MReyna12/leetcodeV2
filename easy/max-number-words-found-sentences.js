const mostWordsFound = (sentences) => {
  let maxWords = 0;

  for (let i = 0; i < sentences.length; i++) {
    let tempMaxWords = 0;
    for (let j = 0; j < sentences[i].length; j++) {
      if (sentences[i][j] === " ") {
        tempMaxWords += 1;
      }
    }
    tempMaxWords += 1;
    maxWords = Math.max(maxWords, tempMaxWords);
  }

  return maxWords;
};

const mostWordsFound2 = (sentences) => {
  let maxWords = 0;
  for (let i = 0; i < sentences.length; i++) {
    const arrayOfWords = sentences[i].split(" ").length;
    maxWords = Math.max(maxWords, arrayOfWords);
  }

  return maxWords;
};

mostWordsFound([
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
]);
