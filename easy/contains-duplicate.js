// Pseudocode: Add elements to object as a key, with their respective values being the number of times they appear in the array. Check if the count of any element is greater than 1, if so return true otherwise return false

const containsDuplicate = (nums) => {
  let numCounter = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (numCounter[num]) {
      return true;
    } else {
      numCounter[num] = true;
    }
  }

  return false;
};

const containsDuplicate2 = (nums) => {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    } else {
      set.add(nums[i]);
    }
  }

  return false;
};
