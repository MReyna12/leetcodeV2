function maxProfit(prices) {
  if (prices.length === 1) return 0;

  let profit = 0;
  let leftPointer = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[leftPointer]) {
      leftPointer = i;
    } else {
      const tempProfit = prices[i] - prices[leftPointer];
      profit = Math.max(profit, tempProfit);
    }
  }

  return profit;
}

function maxProfit(prices) {
  // One pointer will stay on the lowest number
  // The other pointer will keep moving and start on the first index

  let leftPointer = 0;
  let profit = 0;

  for (let right = 1; right < prices.length; right++) {
    if (prices[leftPointer] < prices[right]) {
      const tempProfit = prices[right] - prices[leftPointer];
      profit = Math.max(profit, tempProfit);
    } else {
      leftPointer = right;
    }
  }

  return profit;
}
