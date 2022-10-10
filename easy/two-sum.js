// P: first param - array of integers. second param - an integer target.
// R: return the indices of the two numbers such that they add up to the target
// E: [2, 7, 11, 15], target = 9. Should return [0, 1] because 2 + 7 = 9.
// P:

function twoSum(nums, target) {
  // Create object to hold keys (number in the array) and values (number's index)
  let indexObject = {};

  // For loop to check if the target - number exists as a key in the indexObject. If it does, return the index of target - number and the current value of i (which represents the index of the current number in the array)
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    if (indexObject[target - number] !== undefined) {
      return [indexObject[target - number], i];
    } else {
      indexObject[number] = i;
    }
  }
}
