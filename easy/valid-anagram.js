function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let sLetterObject = {};

  for (let i = 0; i < s.length; i++) {
    const sCharacter = s[i];
    sLetterObject[sCharacter]
      ? (sLetterObject[sCharacter] += 1)
      : (sLetterObject[sCharacter] = 1);
  }

  for (const tCharacter of t) {
    if (sLetterObject[tCharacter]) {
      sLetterObject[tCharacter] -= 1;
    } else {
      return false;
    }
  }

  return true;
}
