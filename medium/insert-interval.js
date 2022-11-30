/*
Cases:
  1. If newInterval is already added or current interval ends before the new one starts
  2. If newInterval ends before the current one starts
  3. If there is an overlap that requires merging
*/

function insert(intervals, newInterval) {
  const result = [];

  for (const [start, end] of intervals) {
    if (!newInterval || end < newInterval[0]) {
      result.push([start, end]);
    } else if (newInterval[1] < start) {
      result.push(newInterval);
      newInterval = null;
      result.push([start, end]);
    } else {
      newInterval[0] = Math.min(newInterval[0], start);
      newInterval[1] = Math.max(newInterval[1], end);
    }
  }

  if (newInterval) {
    result.push(newInterval);
  }

  return result;
}

const insert = (intervals, newInterval) => {
  // Create an array that will hold the inserted/merged newIntervals array
  const result = [];

  // For loop that loops throw each set of intervals
  for (const [start, end] of intervals) {
    // If newInterval is falsy (because we've used both values already) or newInterval[0] is greater than end
    if (!newInterval || end < newInterval[0]) {
      result.push([start, end]);
    } else if (newInterval[1] < start) {
      result.push(newInterval);
      newInterval = null;
      result.push([start, end]);
    } else {
      newInterval[0] = Math.min(start, newInterval[0]);
      newInterval[1] = Math.max(end, newInterval[1]);
    }
  }

  if (newInterval) {
    result.push(newInterval);
  }

  return result;
};

function insert(intervals, newInterval) {
  const result = [];

  for (const [start, end] of intervals) {
    if (!newInterval || end < newInterval[0]) {
      result.push([start, end]);
    } else if (newInterval[1] < start) {
      result.push(newInterval);
      newInterval = null;
      result.push([start, end]);
    } else {
      newInterval[0] = Math.min(start, newInterval[0]);
      newInterval[1] = Math.max(end, newInterval[1]);
    }
  }

  if (newInterval) {
    result.push(newInterval);
  }

  return result;
}
