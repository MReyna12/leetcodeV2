function twoSum(nums, target) {
  // Create hash table to hold values when looping through array
  let hashTable = {};

  // Loop through the elements and check if target minus the element exists, if it does it means that current element plus element in hash table equal target
  for (let i = 0; i < nums.length; i++) {
    if (hashTable[target - nums[i]] !== undefined) {
      return [hashTable[target - nums[i]], i];
    } else {
      hashTable[nums[i]] = i;
    }
  }
}
