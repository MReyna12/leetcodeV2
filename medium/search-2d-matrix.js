const searchMatrix = (matrix, target) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }

  return false;
};

// Loop through each first array and then use binary search when inside the array since the values are sorted. If the value is never found then we go to the next array of values. Continues until we have searched all of the arrays.
// Time complexity: O(mlog n) - for loop = O(n) and binary search = O(log n), which when combined becomes O(mlog n);
const searchMatrixBinaryRow = (matrix, target) => {
  for (let i = 0; i < matrix.length; i++) {
    let start = 0;
    let end = matrix[i].length;

    while (start < end) {
      const mid = Math.floor(start + (end - start) / 2);
      const value = matrix[i][mid];

      if (value === target) {
        return true;
      } else if (value < target) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
  }

  return false;
};

searchMatrixBinaryRow(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  7
);

// Practice Attempt 2
// Loop + Binary Search

const searchMatrixBinaryRow2 = (matrix, target) => {
  // Create our first loop to look at each inner array
  for (let i = 0; i < matrix.length; i++) {
    // Use binary search to determine if the target is inside of an array
    let lo = 0;
    let hi = matrix[i].length;

    while (lo < hi) {
      const mid = Math.floor(lo + (hi - lo) / 2);
      const value = matrix[i][mid];

      if (value === target) {
        return true;
      } else if (value < target) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
  }

  return false;
};
