// P: first param - array of integers. second param - an integer target.
// R: return the indices of the two numbers such that they add up to the target
// E: [2, 7, 11, 15], target = 9. Should return [0, 1] because 2 + 7 = 9.
// P:

function twoSum(nums, target) {
  // Create an object that will hold an element of the nums array, as a key, and its index, as its value.
  let indexObject = {};

  // For loop that will add an element from the nums array and its index position until two elements equate to the target
  for (let i = 0; i < nums.length; i++) {
    if (indexObject[target - nums[i]] !== undefined) {
      return [indexObject[target - nums[i]], i];
    } else {
      indexObject[nums[i]] = i;
    }
  }
}
