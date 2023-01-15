// Split the string in half
// Create an object with lower case and upper case vowels
// Create a left half count and right half count, if number of vowels are equal then true otherwise false

function halvesAreAlike(s) {
  const leftHalf = s.slice(0, s.length / 2);
  const rightHalf = s.slice(s.length / 2);

  const vowels = {
    a: "a",
    A: "A",
    e: "e",
    E: "E",
    i: "i",
    I: "I",
    o: "o",
    O: "O",
    u: "u",
    U: "U",
  };

  let leftHalfVowels = 0;
  let rightHalfVowels = 0;

  for (let i = 0; i < leftHalf.length; i++) {
    if (vowels[leftHalf[i]]) {
      leftHalfVowels++;
    }

    if (vowels[rightHalf[i]]) {
      rightHalfVowels++;
    }
  }

  return leftHalfVowels === rightHalfVowels;
}

function halvesAreAlike(s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  const leftHalf = s.slice(0, s.length / 2);
  const rightHalf = s.slice(s.length / 2);

  let vowelCount = 0;

  for (let i = 0; i < leftHalf.length; i++) {
    if (vowels.has(leftHalf[i])) vowelCount++;
    if (vowels.has(rightHalf[i])) vowelCount--;
  }

  return vowelCount === 0;
}
