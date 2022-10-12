// Pseudocode: Loop through a string, add each character to a new string. If the character is a space, then add "%20" instead.

function spaceReplacement(s) {
  let noSpaceString = "";

  for (let i = 0; i < s.length; i++) {
    const character = s[i];

    if (character === " ") {
      noSpaceString += "%20";
    } else {
      noSpaceString += character;
    }
  }

  return noSpaceString;
}
