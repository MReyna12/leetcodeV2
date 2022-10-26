// Pseudocode:

function longestPalindrome(s) {
  if (s.length === 1) return 1;

  let characterCountObject = {};
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const character = s[i];
    if (!characterCountObject[character]) {
      characterCountObject[character] = 1;
    } else if (characterCountObject[character]) {
      characterCountObject[character] += 1;
    }

    if (characterCountObject[character] % 2 === 0) count += 2;
  }

  return count > s.length ? count : count + 1;
}
