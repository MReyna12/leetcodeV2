function checkIfPangram(sentence) {
  if (sentence.length < 26) return false;

  // Since only letters, then if letter didn't exist increase count by 1 and set letter's value to true. If already exist, do nothing. Return if count === 26.
  let alphabetCount = 0;

  let alphabet = {};

  for (let i = 0; i < sentence.length; i++) {
    if (alphabet[sentence[i]] === undefined) {
      alphabet[sentence[i]] = true;
      alphabetCount++;
    }

    if (alphabetCount === 26) break;
  }

  return alphabetCount === 26;
}

function checkIfPangram(sentence) {
  if (sentence.length < 26) return false;
  return new Set(sentence).size === 26;
}

function checkIfPangram(sentence) {
  let alphabet = new Set();

  for (let i = 0; i < sentence.length; i++) {
    alphabet.add(sentence[i]);
  }

  return alphabet.size === 26;
}
