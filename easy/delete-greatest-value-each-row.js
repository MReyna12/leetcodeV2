const deleteGreatestValue = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    grid[i].sort((a, b) => b - a);
  }

  let sum = 0;

  while (grid[0].length > 0) {
    let localMax = 0;
    for (let i = 0; i < grid.length; i++) {
      localMax = Math.max(localMax, grid[i].pop());
    }
    sum += localMax;
  }

  return sum;
};

function deleteGreatestValue(grid) {
  // Sort each array within the grid so that the numbers within each inner array are in ascending order
  for (let i = 0; i < grid.length; i++) {
    grid[i].sort((a, b) => a - b);
  }

  let sum = 0;

  // While loop that runs until there are no more elements left in the inner array
  while (grid[0].length > 0) {
    let localMax = 0;
    // Create a local max variable that will determine the max of the inner arrays
    for (let j = 0; j < grid.length; j++) {
      // Take the max of the localMax variable and the last element of each inner array
      localMax = Math.max(localMax, grid[j].pop());
    }
    // Once the max is determined for each inner array add it to the sum and continue this process until the while loop condition is met
    sum += localMax;
  }

  return sum;
}

deleteGreatestValue([
  [1, 2, 4],
  [3, 3, 1],
]);
