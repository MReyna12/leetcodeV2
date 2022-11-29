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

function longestPalindrome(s) {
  // Create a hash table that holds the chacters and their count
  // If the count is an even number, then add two to the palindrome count
  // After the loop is complete, check if count is less than the string size, if it is, then add 1 to the count otherwise return count as is (we add 1 because that means there is one extra letter we can put in the middle to slightly increase the palindrome)

  let charcterCounter = {};
  let palindromeCounter = 0;

  for (let i = 0; i < s.length; i++) {
    if (charcterCounter[s[i]]) {
      charcterCounter[s[i]] += 1;
      if (charcterCounter[s[i]] % 2 === 0) {
        palindromeCounter += 2;
      }
    } else {
      charcterCounter[s[i]] = 1;
    }
  }

  return palindromeCounter < s.length
    ? (palindromeCounter += 1)
    : palindromeCounter;
}
