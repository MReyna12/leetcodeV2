function longestPalindrome(s) {
  /*
  Pseudocode:
    - Create an empty string that will hold our longest substring palindrome
    - Create a function that takes three arguements: the string being passed to the main function, index, index.
    - While loop within the new function that runs only if three conditions exist: index1 is greater than or equal to 0 and index2 is less than str length and str[index1] === str[index2]. Allows us to pick a letter as the middle point and then check if
    the neighbor is the same (to make a palindrome). If initial neighbors are the same, then check their neighbors and so on. Continues until neighbors are not the same or one of the other two conditions doesn't apply.
    - Create a for loop:
      - Create two variables to hold palindrome results passing the new function with arguments as its value
      - Create a new palindrome variable that will hold the longer of the two previously mentioned variables
      - If this new palindrome variable is longer than the empty string variable, then empty string variable = new palindrome variable, otherwise keep the original palindrome variable
    - Return the longest palindrome
  */

  if (s.length === 1) return s;

  // Create the longest substring variable
  let longestPalindromicSubstring = "";

  // Create a helper function that will use two pointers to check the characters next to a middle character
  const findPalindrome = (str, i, j) => {
    while (i >= 0 && j < s.length && str[i] === str[j]) {
      i -= 1;
      j += 1;
    }
    return str.slice(i + 1, j); // The last two valid indices before the loop breaks. We do not need to do j - 1 because j is non-inclusive.
  };

  for (let i = 0; i < s.length; i++) {
    const oddCharacterPalindrome = findPalindrome(s, i, i);
    const evenCharacterPalindrome = findPalindrome(s, i, i + 1);

    const longestComparisonPalindrome =
      oddCharacterPalindrome.length > evenCharacterPalindrome.length
        ? oddCharacterPalindrome
        : evenCharacterPalindrome;

    if (
      longestComparisonPalindrome.length > longestPalindromicSubstring.length
    ) {
      longestPalindromicSubstring = longestComparisonPalindrome;
    }
  }

  return longestPalindromicSubstring;
}
