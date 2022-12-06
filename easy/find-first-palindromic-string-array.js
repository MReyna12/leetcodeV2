function firstPalindrome(words) {
  let palindrome = "";

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let tempWord = "";

    for (let j = words[i].length - 1; j >= 0; j--) {
      tempWord += words[i][j];
    }
    if (currentWord === tempWord) {
      palindrome = currentWord;
      break;
    }
  }

  return palindrome;
}

firstPalindrome(["abc", "car", "ada", "racecar", "cool"]);
