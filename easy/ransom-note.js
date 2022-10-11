function canConstruct(ransomNote, magazine) {
  // If there are not enough letters in the magazine to create the ransomNote, then we know to return false.
  if (magazine.length < ransomNote.length) return false;

  // Create an object that will hold all of the characters from the magazine string.
  let message = {};

  // Add all the letters from magazine into an object.
  for (let i = 0; i < magazine.length; i++) {
    const character = magazine[i];

    message[character] ? (message[character] += 1) : (message[character] = 1);
  }

  // Each letter from the ransom note needs to be in the magazine, so loop through each character of the ransom note and check it against the message object. If there are too many characters or a new character in the ransom note, then return false
  for (const character of ransomNote) {
    if (!message[character]) {
      return false;
    } else if (message[character]) {
      message[character] -= 1;
    }
  }

  return true;
}
