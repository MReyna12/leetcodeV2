function canConstruct(ransomNote, magazine) {
  // Magazine has to have at least the same number of letters as ransomNote, if it does not then it cannot match ransomNote
  if (magazine.length < ransomNote.length) return false;

  // Create an object that will hold all of the letters of magazine
  let message = {};

  // For loop to place each letter of magazine into the message
  for (let i = 0; i < magazine.length; i++) {
    const character = magazine[i];

    message[character] ? (message[character] += 1) : (message[character] = 1);
  }

  // Loop through each character of ransomNote string and confirm that it is in the message object. If the loop completes without failing then we know magainze can build ransomNote
  for (const char of ransomNote) {
    if (!message[char]) {
      return false;
    } else if (message[char]) {
      message[char] -= 1;
    }
  }

  return true;
}

function canConstruct(ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;

  let characterCount = {};

  for (let i = 0; i < magazine.length; i++) {
    if (characterCount[magazine[i]] === undefined) {
      characterCount[magazine[i]] = 1;
    } else {
      characterCount[magazine[i]] += 1;
    }
  }

  for (const letter of ransomNote) {
    if (!characterCount[letter]) {
      return false;
    } else {
      characterCount[letter] -= 1;
    }
  }

  return true;
}
