function sortSentence(s) {
  let numbers = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  let tempArray = s.split(" ");
  let tempWord = "";

  let sortedSentence = new Array(tempArray.length);

  for (let i = 0; i < s.length; i++) {
    if (numbers[s[i]]) {
      const index = Number(s[i]) - 1;
      sortedSentence[index] = tempWord;
      tempWord = "";
    } else if (s[i] !== " ") {
      tempWord += s[i];
    }
  }

  return sortedSentence.join(" ");
}

sortSentence("is2 sentence4 This1 a3");
