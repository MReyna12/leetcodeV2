function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let characterComparisonObject = {};

  for (let i = 0; i < s.length; i++) {
    const sCharacter = s[i];
    if (!characterComparisonObject[sCharacter]) {
      characterComparisonObject[sCharacter] = 1;
    } else if (characterComparisonObject[sCharacter]) {
      characterComparisonObject[sCharacter] += 1;
    }
  }

  for (const tCharacter of t) {
    if (!characterComparisonObject[tCharacter]) {
      return false;
    } else if (characterComparisonObject[tCharacter]) {
      characterComparisonObject[tCharacter] -= 1;
    }
  }

  return true;
}

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let characterComparison = {};

  for (let i = 0; i < t.length; i++) {
    if (characterComparison[t[i]] === undefined) {
      characterComparison[t[i]] = 1;
    } else {
      characterComparison[t[i]] += 1;
    }
  }

  for (const character of s) {
    if (!characterComparison[character]) {
      return false;
    } else {
      characterComparison[character] -= 1;
    }
  }

  return true;
}
