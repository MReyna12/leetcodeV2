function isAnagram(s, t) {
  // If both strings do not have the same length, then they cannot be an anagram.
  if (s.length !== t.length) return false;

  // Create an object that will hold each character and the number of times they appear in the s string.
  let characterCount = {};

  // For loop that adds the characters from the s string to the characterCount object
  for (let i = 0; i < s.length; i++) {
    characterCount[s[i]]
      ? (characterCount[s[i]] += 1)
      : (characterCount[s[i]] = 1);
  }

  for (const character of t) {
    if (characterCount[character]) {
      characterCount[character] -= 1;
    } else if (!characterCount[character]) {
      return false;
    }
  }

  return true;
}
