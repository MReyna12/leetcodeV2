function majorityElement(nums) {
  // Edge case if nums.length === 1;
  if (nums.length === 1) return nums[0];

  // Create a hashtable to store the elements from the array and the number of times in which they appear
  let hashTable = {};

  // Loop through the array, adding the elements and their appearance count to the hashtable. If a element already exists in the hashtable, check if it appears more than Math.floor(n/2).
  const lengthToBeat = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    if (hashTable[nums[i]] === undefined) {
      hashTable[nums[i]] = 1;
    } else {
      hashTable[nums[i]] += 1;
      if (hashTable[nums[i]] > lengthToBeat) {
        return nums[i];
      }
    }
  }
}

function majorityElement(nums) {
  if (nums.length === 1) return nums[0];

  const majority = Math.floor(nums.length / 2);

  let elementCounter = {};

  for (let i = 0; i < nums.length; i++) {
    if (elementCounter[nums[i]] === undefined) {
      elementCounter[nums[i]] = 1;
    } else {
      elementCounter[nums[i]] += 1;
    }

    if (elementCounter[nums[i]] > majority) {
      return nums[i];
    }
  }
}
