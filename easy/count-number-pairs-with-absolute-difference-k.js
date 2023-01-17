// Two pointer to check two values
// Subtract i minus j, if a negative, then turn into a positive and check if equals k. If not a negative, then just check if equals k
// If subtraction result equals k then increase count by one

const countKDifference = (nums, k) => {
  let numberOfAbsoluteDifferencePairs = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) numberOfAbsoluteDifferencePairs++;
    }
  }

  return numberOfAbsoluteDifferencePairs;
};

function countKDifference(nums, k) {
  let numberOfAbsoluteDifferencePairs = 0;

  let i = 0;
  let j = i + 1;

  while (i < nums.length - 1) {
    if (Math.abs(nums[i] - nums[j]) === k) numberOfAbsoluteDifferencePairs++;

    j++;

    if (j === nums.length) {
      i++;
      j = i + 1;
    }
  }

  return numberOfAbsoluteDifferencePairs;
}

countKDifference([1, 2, 2, 1], 1);
