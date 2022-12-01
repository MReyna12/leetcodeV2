function getConcatenation(nums) {
  let concatenatedArray = [];

  for (let i = 0; i < nums.length; i++) {
    concatenatedArray[i] = nums[i];
    concatenatedArray[i + nums.length] = nums[i];
  }

  return concatenatedArray;
}

getConcatenation([1, 2, 1]);
