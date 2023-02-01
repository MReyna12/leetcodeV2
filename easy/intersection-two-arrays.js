function intersection(nums1, nums2) {
  let nums1Object = new Set();
  let intersectionArray = [];

  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    if (!nums1Object.has(num)) {
      nums1Object.add(num);
    }
  }

  for (let j = 0; j < nums2.length; j++) {
    const num = nums2[j];
    if (nums1Object.has(num)) {
      intersectionArray.push(num);
      nums1Object.delete(num);
    }
  }

  return intersectionArray;
}

function intersection(nums1, nums2) {
  let setOne = new Set(nums1);
  let setTwo = new Set(nums2);

  let intersectionArray = [];

  setOne.forEach((num) => {
    if (setTwo.has(num)) {
      intersectionArray.push(num);
    }
  });

  return intersectionArray;
}

function setIntersection(set1, set2) {
  let intersectionArray = [];
  const setOneArray = Array.from(set1);

  for (let num of setOneArray) {
    if (set2.has(num)) intersectionArray.push(num);
  }

  return intersectionArray;
}

function intersection(nums1, nums2) {
  const setOne = new Set(nums1);
  const setTwo = new Set(nums2);

  if (setOne.size < setTwo.size) {
    return setIntersection(setOne, setTwo);
  } else {
    return setIntersection(setTwo, setOne);
  }
}
