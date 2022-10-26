function search(nums, target) {
  let lo = 0;
  let hi = nums.length;

  while (lo < hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    const value = nums[mid];

    if (value === target) {
      return mid;
    } else if (value < target) {
      lo = mid + 1;
    } else if (value > target) {
      hi = mid;
    }
  }

  return -1;
}
