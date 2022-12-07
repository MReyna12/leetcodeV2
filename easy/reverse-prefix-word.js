function reversePrefix(word, ch) {
  let result = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      let right = i;

      while (right >= 0) {
        result += word[right];
        right--;
      }

      result += word.substring(i + 1);
      break;
    }
  }

  if (result === "") result = word;

  return result;
}

reversePrefix("abcdefd", "d");
