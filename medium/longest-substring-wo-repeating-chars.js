function lengthOfLongestSubstring(s) {
  //Pseudocode:
  /* 
  Use two pointers. One to loop through each character of the string and the other to slide to the index of the any repeated character
  Use the Set to create a new object. This type of object can only hold unique values and will allow us to monitor whether or not a value already exists.
  If a value does not exist in the Set, then add it, increment our right pointer by one, and set the max substring length to the max of current max substring length or the size of the set.
  If a value DOES exist in the Set, then delete said value and increment left by one. This will continue until the repeated value no longer exists in the Set (thus allowing us to create a Set with unique characters again)
  Return the maxValue once the while loop finishes running.
  */

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

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
}

const lengthOfLongestSubstring = function (s) {
  // create hash map and initialize variables
  let hashMap = {};
  let maxLen = 0,
    start = 0;

  // iterate through the string
  for (let end = 0; end < s.length; end++) {
    // hold the curr character
    const rightChar = s[end];

    // if the character already exists
    if (rightChar in hashMap) {
      // Since in the current window, we won't have any "rightChar" after it's previous occurence,
      // if the start index is already ahead of the index of the last occurrence, we'll keep the start index.

      start = Math.max(start, hashMap[rightChar] + 1);
    }

    // add the character to the map;
    hashMap[rightChar] = end;

    // evaluate the max length
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
};
