function reverseWords(s) {
  // Put each word into an array
  // Loop through the array from the end of the word and add letters into a string that goes into a new array
  // Join the array, separated by spaces between the words

  const arrayOfWords = s.split(" ");
  let reverseWordsArray = [];

  for (let i = 0; i < arrayOfWords.length; i++) {
    let wordInReverse = "";
    for (let j = arrayOfWords[i].length - 1; j >= 0; j--) {
      const word = arrayOfWords[i];
      wordInReverse += word[j];
    }
    reverseWordsArray.push(wordInReverse);
  }

  return reverseWordsArray.join(" ");
}

reverseWords("Let's take LeetCode contest");
