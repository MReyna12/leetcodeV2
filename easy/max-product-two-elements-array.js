function maxProduct(nums) {
  let maxValue = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const currentValue = nums[i] - 1;
      const nextValue = nums[j] - 1;
      const tempProduct = currentValue * nextValue;
      maxValue = Math.max(maxValue, tempProduct);
    }
  }

  return maxValue;
}
