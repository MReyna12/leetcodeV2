function countMatches(items, ruleKey, ruleValue) {
  const ruleKeyIndex = {
    type: 0,
    color: 1,
    name: 2,
  };

  let count = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i][ruleKeyIndex[ruleKey]] === ruleValue) {
      count++;
    }
  }

  return count;
}
