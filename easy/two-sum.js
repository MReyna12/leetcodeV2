// P: first param - array of integers. second param - an integer target.
// R: return the indices of the two numbers such that they add up to the target
// E: [2, 7, 11, 15], target = 9. Should return [0, 1] because 2 + 7 = 9.
// P:

function twoSum(nums, target) {
  // Create an empty object that will hold keys (numbers in the array) and values (their respective index position in said array)
  const numsObject = {};

  // Run a for loop with a conditional. The conditional checks to see if target minus each num in the array exists in the numsObject. Ex: numsObject[target - nums[i]] !== undefined.
  // If the key/value does exist in the object, then return the value and the current i value, which will represent the two indices that equate to the target.
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    if (numsObject[target - number] !== undefined) {
      return [numsObject[target - number], i];
    }

    numsObject[number] = i;
  }
}
