function firtUniqChar(s) {
  let characters = {};

  for (let i = 0; i < s.length; i++) {
    if (characters[s[i]]) {
      characters[s[i]]++;
    } else {
      characters[s[i]] = 1;
    }
  }

  for (let j = 0; j < s.length; j++) {
    if (characters[s[j]] === 1) {
      return j;
    }
  }

  return -1;
}

firtUniqChar("leetcode");
