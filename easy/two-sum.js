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

function twoSum(nums, target) {
  if (nums.length === 2) return [0, 1];

  let hash = {};

  // Loop through the nums array
  // Store the current number + its index position in the hash object
  // If target minus current number in array exists in the hash, then return the index of the current number + the index stored with the

  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      return [hash[target - nums[i]], i];
    }

    hash[nums[i]] = i;
  }
}

const twoSum = (nums, target) => {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      return [hash[target - nums[i]], i];
    } else {
      hash[nums[i]] = i;
    }
  }
};
