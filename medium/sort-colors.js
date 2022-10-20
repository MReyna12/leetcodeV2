function sortColors(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const prev = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = prev;
      }
    }
  }

  return nums;
}
