function groupThePeople(groupSizes) {
  let result = [];
  const groups = {};

  for (let i = 0; i < groupSizes.length; i++) {
    const num = groupSizes[i];

    if (groups[num]) {
      groups[num].push(i);
    } else {
      groups[num] = [i];
    }

    if (groups[num].length === num) {
      result.push(groups[num]);
      delete groups[num];
    }
  }
  return result;
}

const groupThePeople = (groupSizes) => {
  let result = [];
  let groups = {};

  for (let i = 0; i < groupSizes.length; i++) {
    const num = groupSizes[i];

    if (groups[num]) {
      groups[num].push(i);
    } else {
      groups[num] = [i];
    }

    if (groups[num].length === num) {
      result.push(groups[num]);
      delete groups[num];
    }
  }

  return result;
};

groupThePeople([3, 3, 3, 3, 3, 1, 3]);
