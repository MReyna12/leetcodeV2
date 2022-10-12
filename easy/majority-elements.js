// Pseudocode: Place the number and its count into an object. If a count is more than nums.length / 2, then return that key

function majorityElement(nums) {
  let countingObject = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    countingObject[num]
      ? (countingObject[num] += 1)
      : (countingObject[num] = 1);
  }

  for (const key in countingObject) {
    if (countingObject[key] > nums.length / 2) {
      return key;
    }
  }
}
