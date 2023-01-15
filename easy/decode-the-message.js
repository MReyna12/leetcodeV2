function decodeMessage(key, message) {
  //97-122
  const alpha = Array.from(Array(26)).map((i) => i + 97);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  let charObject = {};
  let alphabetIndex = 0;

  for (let i = 0; i < key.length; i++) {
    if (key[i] !== " " && !charObject[key[i]]) {
      charObject[key[i]] = alphabet[alphabetIndex];
      alphabetIndex++;
    }
  }

  let decodedText = "";
  for (let j = 0; j < message.length; j++) {
    if (charObject[message[j]]) {
      decodedText += charObject[message[j]];
    } else {
      decodedText += " ";
    }
  }

  return decodedText;
}
