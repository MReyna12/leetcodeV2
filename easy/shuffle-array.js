function shuffle(nums, n) {
  if (n === 1) return nums;

  // Loop runs so long as i is less than n
  let shuffledArray = [];

  for (let i = 0; i < n; i++) {
    shuffledArray.push(nums[i], nums[i + n]);
  }

  return shuffledArray;
}
