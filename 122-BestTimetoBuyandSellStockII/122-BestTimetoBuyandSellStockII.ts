// const maxProfit = (prices: number[]): number => {
//   let minPrice = prices[0]
//   let maxPrice = prices[0]
//   let profit = 0


//   for (let i = 1; i < prices.length; i++) {
//       const price = prices[i]
//       if (price < minPrice) {
//         minPrice = price
//       }
//       if (price < maxPrice) {
//         maxPrice = price
//       }
//       if ( price - minPrice > profit) {
//         profit = price - minPrice
//       }
//   }

//   return profit
// }


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