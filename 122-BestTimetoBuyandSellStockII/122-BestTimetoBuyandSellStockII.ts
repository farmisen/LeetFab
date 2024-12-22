const maxProfit = (prices: number[]): number => {
  let profit = 0

  let i = 0
  while (i < prices.length - 1) {
    let j = i
    while (j < prices.length - 1 && prices[j] < prices[j+1]) {
      j++
    }
    if (j === i) {
      i++
      continue
    }

    profit += prices[j] - prices[i]
    i = j + 1
  }

  return profit
}