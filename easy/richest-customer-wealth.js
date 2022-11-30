function maximumWealth(accounts) {
  let totalWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let moneyInAccounts = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      moneyInAccounts += accounts[i][j];
    }
    totalWealth = Math.max(totalWealth, moneyInAccounts);
  }

  return totalWealth;
}
