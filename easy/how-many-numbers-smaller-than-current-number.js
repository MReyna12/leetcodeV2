const smallerNumbersThanCurrent = (nums) => {
  // Create the array that will hold the results for each integer in the nums array
  let result = [];
  // Create the object that will store the current number being evaluated (as a key) and give it a value equal to the number of integers that are less than said current number
  let resultCount = {};

  // First loop determines the current number and will check if we have already seen this number. If we have, then we can just push the value stored in the resultCount object associated with said current number
  // If we have no seen the number before, we initialize our smaller number count and compare the current number against all integers in the nums array
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    if (resultCount[currentNum]) {
      result.push(resultCount[currentNum]);
      continue;
    }
    let smallerNumberCount = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < currentNum) {
        smallerNumberCount++;
      }
    }
    result.push(smallerNumberCount);
    resultCount[currentNum] = smallerNumberCount;
  }

  return result;
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
