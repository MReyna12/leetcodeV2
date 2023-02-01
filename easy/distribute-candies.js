function distributeCandies(candyType) {
  const maxNumCandies = candyType.length / 2;
  const typesOfCandies = new Set(candyType);

  return typesOfCandies.size <= maxNumCandies
    ? typesOfCandies.size
    : maxNumCandies;
}

distributeCandies([1, 1, 2, 2, 3, 3]);
