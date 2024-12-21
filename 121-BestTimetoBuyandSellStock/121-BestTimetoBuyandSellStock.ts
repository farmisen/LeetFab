const maxProfit = (prices: number[]): number => {
  // max(nums[j]-nums[i]) j > i

  let minPrice = prices[0]
  let maxPrice = prices[0]
  let profit = 0
  
  
  for (let i = 1; i < prices.length; i++) {
      const price = prices[i]
      if (price < minPrice) {
        minPrice = price
      }
      if (price < maxPrice) {
        maxPrice = price
      }
      if ( price - minPrice > profit) {
        profit = price - minPrice
      }

  }

  return profit
}