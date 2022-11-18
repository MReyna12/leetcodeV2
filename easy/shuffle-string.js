function restoreString(s, indices) {
  let fixedString = new Array(s.length);

  for (let i = 0; i < s.length; i++) {
    fixedString[indices[i]] = s[i];
  }

  return fixedString.join("");
}

restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);
