function twoSum(nums, target) {
  // Create a hash table that will hold elements and their respective indices
  let hashTable = {};

  // Run a for loop to check if the target - the current element exists in the table, if it does that means current element + table property = target
  for (let i = 0; i < nums.length; i++) {
    if (hashTable[target - nums[i]] !== undefined) {
      return [hashTable[target - nums[i]], i];
    } else {
      hashTable[nums[i]] = i;
    }
  }
}
