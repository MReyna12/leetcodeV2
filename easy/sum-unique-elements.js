function sumOfUnique(nums) {
  const uniqueElements = {};

  for (let i = 0; i < nums.length; i++) {
    if (uniqueElements[nums[i]]) {
      uniqueElements[nums[i]] = 0;
    } else if (uniqueElements[nums[i]] !== 0) {
      uniqueElements[nums[i]] = nums[i];
    }
  }

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (uniqueElements[nums[i]]) sum += uniqueElements[nums[i]];
  }

  return sum;
}

function sumOfUnique(nums) {
  const uniqueElements = {};
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    uniqueElements[nums[i]]
      ? uniqueElements[nums[i]]++
      : (uniqueElements[nums[i]] = 1);
    if (uniqueElements[nums[i]] === 1) {
      sum += nums[i];
    } else if (uniqueElements[nums[i]] === 2) {
      sum -= nums[i];
    }
  }

  return sum;
}
