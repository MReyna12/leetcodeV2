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

insertion([3, 2, 4, 6, 8, 1]);
