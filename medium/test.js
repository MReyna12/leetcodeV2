// Practice breadcrumbs (saving whether we've seen a value in an object)
function uniqSort(arr) {
  const breadcrumbs = {};
  const resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!breadcrumbs[arr[i]]) {
      resultArray.push(arr[i]);
      breadcrumbs[arr[i]] = true;
    }
  }

  return resultArray.sort((a, b) => a - b);
}

// Memoization Exercise

// Task 1: Write a function, times10, that takes an argument, n, and multiplies n times 10

const times10 = (n) => {
  return n * 10;
};

// Task 2: Use an object to cache the results of your times10 function.
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {};

const memoTimes10 = (n) => {
  if (n in cache) {
    return cache[n];
  } else {
    const result = times10(n);
    cache[n] = result;
    return result;
  }
};

// Task 3: Clean up the global scope by moving cache inside the function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosureTimes10 = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log(cache);
      return cache[n];
    } else {
      let result = n * 10;
      cache[n] = result;
      console.log(cache);
      return result;
    }
  };
};

// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pull it in from the global scope.
// protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.

const times11 = (n) => {
  return n * 11;
};

const memoize = (callback) => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    } else {
      let result = callback(n);
      cache[n] = result;
      console.log(cache);
      return result;
    }
  };
};

// Recursion
//  1. Identify base case(s)
//  2. Identify recursive case(s)
//  3. Return where appropriate
//  4. Write procedures for each case that bring you closer to the base case(s)

// Exercise 1: Turn the following recursive function into an iterative version
function joinElements(array, joinString) {
  function recurse(index, resulSoFar) {
    resulSoFar += array[index];

    if (index === array.length - 1) {
      return resulSoFar;
    } else {
      return recurse(index + 1, resulSoFar + joinString);
    }
  }

  return recurse(0, "");
}

function iterativeJoinElements(array, joinString) {
  let result = "";

  for (let i = 0; i < array.length - 1; i++) {
    result += array[i] + joinString;
  }

  return result + array[array.length - 1];
}

// Exercise 2: Write your own recursive factorial method and memoize it
const memoizer = (callbackFN) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let result = callbackFN(n);
      cache[n] = result;
      return cache[n];
    }
  };
};

const factorial = memoizer((x) => {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
});

//factorial(5) - 5 becomes the argument of the function in memoizer

const memoizer1 = (callbackFN) => {
  let cache = {};
  return (...args) => {
    const n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      const result = callbackFN(n);
      cache[n] = result;
      return cache[n];
    }
  };
};

const factorial1 = memoizer1((x) => {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial1(x - 1);
  }
});

//factorial1(5);

// Divide and Conquer

function binarySearch(array, num) {
  let lo = 0;
  let hi = array.length;

  while (lo < hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);
    let value = array[mid];

    if (value === num) {
      return true;
    } else if (value < num) {
      lo = mid + 1;
    } else if (value > num) {
      hi = mid;
    }
  }

  return false;
}

// Exercise 1: Implement linear search
function linearSearch(list, item) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return i;
    }
  }

  return -1;
}
