function countPoints(rings) {
  // The rings string has to be at least six or else it cannot have at least 3 ring/color combos
  if (rings.length < 8) return 0;

  // Make the keys the ring number and their respective values an array that holds the colors.
  // Only add colors to the array that have not been added already.
  // If array length is 3 then increase count by 1.

  let ringCombos = {};
  let ringCounter = 0;

  for (let i = 0; i < rings.length - 1; i += 2) {
    const color = rings[i];
    const ring = rings[i + 1];

    if (ringCombos[ring] === undefined) {
      ringCombos[ring] = [color];
    } else if (!ringCombos[ring].includes(color)) {
      const temp = ringCombos[ring];
      temp.push(color);
      if (ringCombos[ring].length === 3) ringCounter++;
    }
  }

  return ringCounter;
}

countPoints("B0R0G0R9R0B0G0");

const countPoints = (rings) => {
  if (rings.length < 8) return 0;

  let ringCombos = {};
  let ringCounter = 0;

  for (let i = 0; i < rings.length - 1; i += 2) {
    const color = rings[i];
    const ring = rings[i + 1];

    if (ringCombos[ring] === undefined) {
      ringCombos[ring] = new Set(color);
    } else if (!ringCombos[ring].has(color)) {
      const temp = ringCombos[ring];
      temp.add(color);
      if (temp.size === 3) ringCounter++;
    }
  }

  return ringCounter;
};

countPoints("B0R0G0R9R0B0G0");
