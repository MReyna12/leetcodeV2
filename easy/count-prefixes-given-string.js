function countPrefixes(words, s) {
  let prefixResult = 0;

  for (let i = 0; i < words.length; i++) {
    if (helper(words[i], s)) {
      prefixResult++;
    }
  }

  return prefixResult;
}

function helper(word, s) {
  for (let j = 0; j < word.length; j++) {
    if (word[j] !== s[j]) {
      return false;
    }
  }

  return true;
}

countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc");
