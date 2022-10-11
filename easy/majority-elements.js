function majorityElement(nums) {
  const object = {};

  for (let i = 0; i < nums.length; i++) {
    object[nums[i]] = object[nums[i]] + 1 || 1;
    if (object[nums[i]] > nums.length / 2) return nums[i];
  }
}

function majorityElement(nums) {
  let map = {};

  for (let num of nums) {
    map[num] = map[num] ? map[num] + 1 : 1;
  }

  for (const key in map) {
    if (map[key] > nums.length / 2) {
      return key;
    }
  }
}
