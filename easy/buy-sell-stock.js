// P:
// R:
// E:
// P: Array length is at least 1. If array length is less than 2, return 0 because you need at least two days. If array length is 2 and the second element is less than the first element, return 0 because you buy low and then sell high.

function maxProfit(prices) {
  // Edge case testing if the length of the prices array is at least 2, if not return 0 (need two days, one to buy and one to sell)
  if (prices.length < 2) return 0;

  // Create variables to track two days and the profit
  let left = 0;
  let right = 1;
  let highestProfit = 0;

  // Right pointer will continue to increase so long as the right pointer is less than the length of the prices array
  while (right < prices.length) {
    // If the left price is lower than the right price, then calculate the profit and set highestProfit to the greater of the current value of highestProfit and the recently calculated profit
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      highestProfit = Math.max(highestProfit, profit);
    } else {
      // If the right price is lower than the left price, then we should buy at the right price, therefore we slide left to the right variable position
      left = right;
    }
    // Continue searching for best buy/sell price
    right += 1;
  }

  // Will return 0 if no profit to be made or the highest possible profit
  return highestProfit;
}
