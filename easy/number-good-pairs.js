function numIdenticalPairs(nums) {
  let numberOfGoodPairs = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && i < j) {
        numberOfGoodPairs++;
      }
    }
  }

  return numberOfGoodPairs;
}

function numIndenticalPairs(nums) {
  let numberOfGoodPairs = 0;
  let map = {};

  for (const num of nums) {
    if (map[num]) {
      numberOfGoodPairs += map[num];
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }

  return numberOfGoodPairs;
}

numIdenticalPairs([1, 2, 3, 1, 1, 3]);
