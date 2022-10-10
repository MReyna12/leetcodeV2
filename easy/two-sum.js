// P: first param - array of integers. second param - an integer target.
// R: return the indices of the two numbers such that they add up to the target
// E: [2, 7, 11, 15], target = 9. Should return [0, 1] because 2 + 7 = 9.
// P:

function twoSum(nums, target) {
  const numsObject = {};

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    if (numsObject[target - number] !== undefined) {
      return [numsObject[target - number], i];
    }

    numsObject[number] = i;
  }
}
