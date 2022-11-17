function numJewelsInStones(jewels, stones) {
  let jewelTypeAndAmount = {};
  let jewelCount = 0;

  for (let i = 0; i < jewels.length; i++) {
    if (!jewelTypeAndAmount[jewels[i]]) jewelTypeAndAmount[jewels[i]] = true;
  }

  for (const stone of stones) {
    if (jewelTypeAndAmount[stone]) jewelCount++;
  }

  return jewelCount;
}

function numJewelsInStones(jewels, stones) {
  let jewelCount = 0;

  for (let i = 0; i < jewels.length; i++) {
    for (const stone of stones) {
      if (jewels[i] === stone) jewelCount++;
    }
  }

  return jewelCount;
}

numJewelsInStones("aA", "aAAbbbb");
