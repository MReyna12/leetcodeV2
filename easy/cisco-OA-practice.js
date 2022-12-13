function howManyWords(string) {
  const test = string.replace(/[0-9,?.!]/g, "");
  const singleSpaces = test.replace(/  +/g, " ");
  const arrayOfWords = singleSpaces.split(" ");

  return arrayOfWords.length;
}

function howManyWords(string) {
  let resultArray = [];
  let tempWord = "";

  const disallowedCharacters = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    "?": "?",
    "!": "!",
    ".": ".",
    ",": ",",
    " ": " ",
  };

  for (let i = 0; i < string.length; i++) {
    if (disallowedCharacters[string[i]] === undefined) {
      tempWord += string[i];
    } else if (disallowedCharacters[string[i]] && tempWord) {
      resultArray.push(tempWord);
      tempWord = "";
    }
  }

  return resultArray.length;
}

howManyWords("how many eggs are in a half-dozen, 13?");
