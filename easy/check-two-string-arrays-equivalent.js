const arrayStringsAreEqual = (word1, word2) => {
  let firstString = "";
  let secondString = "";

  for (let i = 0; i < word1.length; i++) {
    firstString += word1[i];
  }

  for (let j = 0; j < word2.length; j++) {
    secondString += word2[j];
  }

  return firstString === secondString;
};
