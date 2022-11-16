function insertion(array) {
  // Create outer loop to track the currentValue
  for (let i = 1; i < array.length; i++) {
    const currentValue = array[i];

    let leftPointer = i - 1;

    while (leftPointer >= 0 && array[leftPointer] > currentValue) {
      array[leftPointer + 1] = array[leftPointer];
      leftPointer--;
    }
    array[leftPointer + 1] = currentValue;
  }

  return array;
}

function insertionTwo(array) {
  for (let i = 1; i < array.length; i++) {
    const currentValue = array[i];

    let leftPointer = i - 1;

    while (leftPointer >= 0 && array[leftPointer] > currentValue) {
      array[leftPointer + 1] = array[leftPointer];
      leftPointer--;
    }
    array[leftPointer + 1] = currentValue;
  }

  return array;
}

function insertionThree(array) {
  // Create for loop that goes through each value of the array
  for (let i = 1; i < array.length; i++) {
    // Create current value that will be moved towards the beginning of the array if its value is less than the value to its left
    const currentValue = array[i];

    // Create a leftPointer to check how far down the array the currentValue needs to slide
    let leftPointer = i - 1;

    // While loop that will shift values greater than currentValue over to the right
    while (leftPointer >= 0 && array[leftPointer] > currentValue) {
      array[leftPointer + 1] = array[leftPointer];
      leftPointer--;
    }
    array[leftPointer + 1] = currentValue; // If we get to end of array, then this will put the currentValue in the zeroeth index position
  }

  return array;
}

insertionThree([3, 2, 4, 6, 8, 1]);
