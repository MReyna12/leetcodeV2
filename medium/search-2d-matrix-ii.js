function searchMatrix(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
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
}
