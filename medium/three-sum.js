const threeSum = (nums) => {
  nums.length === 3 && nums[0] + nums[1] + nums[2] === 0
    ? [[nums[0], nums[1], nums[2]]]
    : [];

  let cache = {};
  let uniqueTriplets = [];

  for (let i = 0, j = 1; j < nums.length - 1; i++, j++) {
    for (let k = j + 1; k < nums.length; k++) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        const result = [nums[i], nums[j], nums[k]].sort();
        if (cache[result] === undefined) {
          cache[result] = true;
          uniqueTriplets.push(result);
        }
      }
    }
  }
  return uniqueTriplets;
};

threeSum([3, -2, 1, 0]);
