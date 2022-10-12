// Pseudocode:

function longestPalindrome(s) {
  let letterCounter = {};
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const character = s[i];

    letterCounter[character]
      ? (letterCounter[character] += 1)
      : (letterCounter[character] = 1);
    if (letterCounter[character] % 2 === 0) count += 2;
  }

  return s.length > count ? count + 1 : count; // If the count is even and the length of the string is larger than count, that means there is at least one letter we could use to increase the palindrome by 1, so we add 1. If count is the same as or greater than
  // s.length, then we know the longest palindrome we could create is count.
}
