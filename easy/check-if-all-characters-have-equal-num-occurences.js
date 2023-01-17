function areOccurrencesEqual(s) {
  if (s.length === 1) return true;

  const characterCounter = {};

  for (let i = 0; i < s.length; i++) {
    if (!characterCounter[s[i]]) {
      characterCounter[s[i]] = 1;
    } else {
      characterCounter[s[i]] += 1;
    }
  }

  return new Set(Object.values(characterCounter)).size === 1;
}

areOccurrencesEqual("abacbc");
