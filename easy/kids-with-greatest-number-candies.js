function kidsWithCandies(candies, extraCandies) {
  const greatestNumCandies = Math.max(...candies);

  let booleanResults = [];

  for (let i = 0; i < candies.length; i++) {
    const candiesPlusExtras = candies[i] + extraCandies;
    if (candiesPlusExtras >= greatestNumCandies) {
      booleanResults.push(true);
    } else {
      booleanResults.push(false);
    }
  }

  return booleanResults;
}

function kidsWithCandies(candies, extraCandies) {
  const greatestNumCandies = Math.max(...candies);
  const result = candies.map(
    (numOfCandies) => numOfCandies + extraCandies >= greatestNumCandies
  );

  return result;
}

kidsWithCandies([2, 3, 5, 1, 3], 3);
