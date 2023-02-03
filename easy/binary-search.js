function search(nums, target) {
  // Create a lo and high pointer that will help with shrinking the number of elements being searched for the target
  let lo = 0;
  let hi = nums.length;

  // while loop which will include a middle index number and a middle value in the array
  // Shift lo or hi based on placement of the value in the array in comparison to the target
  while (lo < hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    const value = nums[mid];

    if (value === target) {
      return mid;
    } else if (value < target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return -1;
}

function binarySearch(nums, target) {
  let lo = 0;
  let high = nums.length;

  while (lo < hi) {
    const mid = Math.floor(lo + (high - lo) / 2);
    const value = nums[mid];

    if (value === target) {
      return mid;
    } else if (value < target) {
      lo = mid + 1;
    } else if (value > target) {
      high = mid;
    }
  }

  return -1;
}

const binarySearch = (nums, target) => {
  let low = 0;
  let high = nums.length;

  while (low < high) {
    const middle = Math.floor(low + (high - low) / 2);
    const current = nums[middle];

    if (current === target) {
      return middle;
    } else if (current < target) {
      low = middle + 1;
    } else if (current > target) {
      high = middle;
    }
  }

  return -1;
};

function binary(nums, target) {
  let low = 0;
  let high = nums.length;

  while (low < high) {
    const mid = Math.floor(low + (high + low) / 2);
    const currentValue = target[mid];

    if (currentValue === target) {
      return mid;
    } else if (currentValue > target) {
      high = mid;
    } else if (currentValue < target) {
      low = mid + 1;
    }
  }

  return -1;
}

const bin = (nums, target) => {
  let low = 0;
  let high = nums.length;

  while (low < high) {
    const mid = Math.floor(low(high + low) / 2);
    const currentValue = nums[mid];

    if (currentValue === target) {
      return mid;
    } else if (currentValue < target) {
      low = mid + 1;
    } else if (currentValue > target) {
      high = mid;
    }
  }

  return -1;
};
