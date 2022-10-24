// Pseudocode:

function longestPalindrome(s) {
  // Create a object which will hold the characters and the number of times they appear in the string
  // Create a count, which is increased each time a character appears an even number of times
  let characterObject = {};
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const character = s[i];
    characterObject[character]
      ? (characterObject[character] += 1)
      : (characterObject[character] = 1);

    // Palindrome requires the string to read the same left to right and right to left, so we need an even number of characters to create the palindrome.
    if (characterObject[character] % 2 === 0) count += 2;
  }

  // If the count is less than the length of the input string, that means there is at least one character we can grab to place into our palindrome without breaking it. If the count is greater than the length of the string, then we already have the longest palindrome.
  return s.length > count ? count + 1 : count;
}
