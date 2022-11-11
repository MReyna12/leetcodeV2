var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (n === 1) return 1;

    let lo = 1;
    let hi = n;

    while (lo < hi) {
      const mid = Math.floor(lo + (hi - lo) / 2);
      const value = isBadVersion(mid);

      if (value) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }

    return lo;
  };
};
