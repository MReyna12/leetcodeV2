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
