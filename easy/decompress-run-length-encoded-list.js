function decompressRLElist(nums) {
  let decompressedList = [];

  for (let i = 0; i < nums.length; i += 2) {
    const frequency = nums[i];
    const value = nums[i + 1];
    for (let j = 0; j < frequency; j++) {
      decompressedList.push(value);
    }
  }

  return decompressedList;
}

decompressRLElist([1, 2, 3, 4]);
