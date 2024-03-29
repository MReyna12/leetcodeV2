function minFlips(target) {
  let isFlipped = false;
  let count = 0;

  for (let i = 0; i < target.length; i++) {
    const current = target[i];
    if (current === "1" && !isFlipped) {
      count++;
      isFlipped = true;
    } else if (current === "0" && isFlipped) {
      count++;
      isFlipped = false;
    }
  }

  return count;
}

const minFlips = (target) => {
  let flipCount = 0;
  let lastDifferentChar = "0";

  for (let i = 0; i < target.length; i++) {
    const currentChar = target[i];
    if (currentChar !== lastDifferentChar) {
      lastDifferentChar = currentChar;
      flipCount++;
    }
  }

  return flipCount;
};

function minFlips(target) {
  let flipCounter = 0;
  let previousCharacter = "0";

  for (let i = 0; i < target.length; i++) {
    const current = target[i];

    if (current !== previousCharacter) {
      previousCharacter = current;
      flipCounter++;
    }
  }

  return flipCounter;
}

const minFlips = (target) => {
  let flipCounter = 0;
  let lastDifferentChar = "0";

  for (let i = 0; i < target.length; i++) {
    const currentChar = target[i];

    if (currentChar !== lastDifferentChar) {
      flipCounter++;
      lastDifferentChar = currentChar;
    }
  }

  return flipCounter;
};

function minFlips(target) {
  let flipCounter = 0;
  let previousCharacter = "0";

  for (let i = 0; i < target.length; i++) {
    const currentChar = target[i];

    if (currentChar !== previousCharacter) {
      flipCounter++;
      previousCharacter = currentChar;
    }
  }

  return flipCounter;
}
