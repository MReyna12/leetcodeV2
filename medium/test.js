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

const memoClosureTimes10 = memoizedClosureTimes10();

memoClosureTimes10(10);
