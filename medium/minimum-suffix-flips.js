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
