const finalValueAfterOperations = (operations) => {
  let x = 0;

  for (const operation of operations) {
    if (operation === "--X" || operation === "X--") {
      x--;
    } else {
      x++;
    }
  }

  return x;
};

finalValueAfterOperations(["--X", "X++", "X++"]);
