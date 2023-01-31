function kthDistinct(arr, k) {
  const distinctStrings = {};
  let uniqueCounter = 0;

  for (let i = 0; i < arr.length; i++) {
    const string = arr[i];
    if (distinctStrings[string] === undefined) {
      distinctStrings[string] = 1;
    } else if (distinctStrings[string]) {
      distinctStrings[string]++;
    }
  }

  for (char in distinctStrings) {
    if (distinctStrings[char] === 1) {
      uniqueCounter++;
    }

    if (uniqueCounter === k) return char;
  }

  return "";
}

kthDistinct(["d", "b", "c", "b", "c", "a"], 2);
