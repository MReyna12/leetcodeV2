// P: first param - array of integers. second param - an integer target.
// R: return the indices of the two numbers such that they add up to the target
// E: [2, 7, 11, 15], target = 9. Should return [0, 1] because 2 + 7 = 9.
// P: Create empty object; run a for loop that checks to see if target minus num in array exists(so the value of target - num will be the key), if not, then add number from array as key and i as the value (which represents the index).
//    if it does exist, then return the object[target-num], i. So we would be returning the index position of the key/value pair in the object, plus the current num in the array based on i.

function twoSum(nums, target) {
  const numsObject = {};

  for (let i = 0; i < nums.length; i++) {
    if (numsObject[target - nums[i]] !== undefined) {
      return [numsObject[target - nums[i]], i];
    }
    numsObject[nums[i]] = i;
  }
}
