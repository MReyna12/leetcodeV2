function toLowerCase(s) {
  const alphabet = {
    A: "a",
    B: "b",
    C: "c",
    D: "d",
    E: "e",
    F: "f",
    G: "g",
    H: "h",
    I: "i",
    J: "j",
    K: "k",
    L: "l",
    M: "m",
    N: "n",
    O: "o",
    P: "p",
    Q: "q",
    R: "r",
    S: "s",
    T: "t",
    U: "u",
    V: "v",
    W: "w",
    X: "x",
    Y: "y",
    Z: "z",
  };

  let lowerCaseString = "";

  for (let i = 0; i < s.length; i++) {
    if (alphabet[s[i]]) {
      lowerCaseString += alphabet[s[i]];
    } else {
      lowerCaseString += s[i];
    }
  }

  return lowerCaseString;
}

// Using ASCII codes
// Capitalized letters are from 65 - 90, inclusive.
// Adding 32 to the capitalized letter's ASCII code will give the lowercase version of that character

const toLowerCase = (s) => {
  let lowerCaseString = "";

  for (let i = 0; i < s.length; i++) {
    const letterCode = s[i].charCodeAt();
    if (letterCode > 64 && letterCode < 91) {
      lowerCaseString += String.fromCharCode(letterCode + 32);
    } else {
      lowerCaseString += s[i];
    }
  }

  return lowerCaseString;
};
