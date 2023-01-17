function destCity(paths) {
  const startingPoints = new Set();

  for (const path of paths) startingPoints.add(path[0]);
  for (const path of paths) {
    if (!startingPoints.has(path[1])) return path[1];
  }
}

const destCity = (paths) => {
  const startingPoints = {};

  // Add all starting points to the object
  for (let i = 0; i < paths.length; i++) {
    const startingDestination = paths[i][0];
    if (!startingPoints[startingDestination]) {
      startingPoints[startingDestination] = true;
    }
  }

  for (let i = 0; i < paths.length; i++) {
    const endingDestination = paths[i][1];
    if (!startingPoints[endingDestination]) return endingDestination;
  }
};

destCity([
  ["London", "New York"],
  ["New York", "Lima"],
  ["Lima", "Sao Paulo"],
]);
