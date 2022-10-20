// Pseudocode:
/* 
lo = 0;
hi = 0;

while(lo < hi) {
  mid = Math.floor(lo + (hi - lo) / 2)
  value = arr[mid]
  check three conditions:
    - value === target then return mid (aka the index position of target in the array)
    - value > target then target must be less than the midpoint, so hi = mid;
    - value < target then target must be greater than the midpoint, so lo = mid + 1
  if the target is never found in the array, then I can return either lo or hi, as they will both equal either 0 or array.length depending on if the target is lower than all integers in the array or higher than all integers in the array 
} 
*/

function searchInsert(nums, target) {
  let low = 0;
  let hi = nums.length;

  while (lo < hi) {
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

  return low;
}
