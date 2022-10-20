function search(nums, target) {
  let low = 0;
  let hi = nums.length;

  while (low < hi) {
    const mid = Math.floor(low + (hi - low) / 2);
    const value = nums[mid];

    if (value === target) {
      return mid;
    } else if (value > target) {
      hi = mid;
    } else if (value < target) {
      low = mid + 1;
    }
  }

  return -1;
}
