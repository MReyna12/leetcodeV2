function lengthOfLongestSubstring(s) {
  //Pseudocode:
  /* 
  Use two pointers. One to loop through each character of the string and the other to slide to the index of the any repeated character
  Use the Set to create a new object. This type of object can only hold unique values and will allow us to monitor whether or not a value already exists.
  If a value does not exist in the Set, then add it, increment our right pointer by one, and set the max substring length to the max of current max substring length or the size of the set.
  If a value DOES exist in the Set, then delete said value and increment left by one. This will continue until the repeated value no longer exists in the Set (thus allowing us to create a Set with unique characters again)
  Return the maxValue once the while loop finishes running.
  */

  // Since the string length cannot go below zero AND if the length is 1 we know we can just return 1, create conditional to cover s.length of 0 and 1
  if (s.length < 2) return s.length;

  // Initialize four variables:
  // - Create set object (only unique values can be placed in a set object)
  // - Create two pointers, a left and right
  // - Create a maxSubstringLength variable that will return the largest substring w/o repeating characters

  let substringObject = new Set();
  let left = 0;
  let right = 0;
  let maxSubstringLength = 0;

  // Create a while loop that runs until the right pointer is no longer less than the input string length
  while (right < s.length) {
    const rightCharacter = s[right];
    // Conditional that checks to see if the rightCharacter is part of the substringObject, if not then add it to the object, increase right pointer by 1, and calculate the maxSubstringLength
    if (!substringObject.has(rightCharacter)) {
      substringObject.add(rightCharacter);
      right++;
      maxSubstringLength = Math.max(maxSubstringLength, substringObject.size);
    } else {
      const leftCharacter = s[left];
      substringObject.delete(leftCharacter);
      left++;
    }
  }

  return maxSubstringLength;
}

const lengthOfLongestSubstring = (s) => {
  if (s.length < 2) return s.length;

  let characterObject = new Set();
  let left = 0;
  let right = 0;
  let maxSubstringLength = 0;

  while (right < s.length) {
    const rightCharacter = s[right];
    if (!characterObject.has(rightCharacter)) {
      characterObject.add(rightCharacter);
      right++;
      maxSubstringLength = Math.max(maxSubstringLength, characterObject.size);
    } else {
      const leftCharacter = s[left];
      characterObject.delete(leftCharacter);
      left++;
    }
  }

  return maxSubstringLength;
};
