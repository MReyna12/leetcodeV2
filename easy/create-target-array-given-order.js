function createTargetArray(nums, index) {
  let orderedArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (orderedArray[index[i]] === undefined) {
      orderedArray[index[i]] = nums[i];
    } else {
      orderedArray.splice(index[i], 0, nums[i]);
    }
  }

  return orderedArray;
}

createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]);
