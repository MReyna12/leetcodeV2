/* 
Pseudocode:
  - 0 is always included in the array. So the start of the range of possible nums[i] is 0
  - nums.length is the end of the range
  - range = [0, nums.length];
  - 
*/

function missingNumber(nums) {
  const maxRange = nums.length;
  const expectedSumOfAllNums = (maxRange * (maxRange + 1)) / 2;

  let actualSum = 0;

  for (let i = 0; i < maxRange; i++) {
    actualSum += nums[i];
  }

  const number = expectedSumOfAllNums - actualSum;

  return number;
}
