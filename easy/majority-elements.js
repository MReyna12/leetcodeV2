function majorityElement(nums) {
  let object = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    object[num] ? (object[num] += 1) : (object[num] = 1);
    if (object[num] > nums.length / 2) {
      return nums[i];
    }
  }
}

function majorityElement(nums) {
  let object = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    object[num] ? (object[num] += 1) : (object[num] = 1);
  }

  for (const key in object) {
    if (object[key] > nums.length / 2) return key;
  }
}
