function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const anagramObject = {};

  for (let i = 0; i < s.length; i++) {
    if (anagramObject[s[i]]) {
      anagramObject[s[i]] += 1;
    } else {
      anagramObject[s[i]] = 1;
    }
  }

  for (const character of t) {
    if (anagramObject[character]) {
      anagramObject[character] -= 1;
    } else if (!anagramObject[character]) {
      return false;
    }
  }

  return true;
}
