

const magnitudes = {
  1: "Thousand",
  2: "Million",
  3: "Billion"
}

const oneToTen = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
}

const elevenToNineteen = {
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen"
}

const twentyToNinety = {
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety"
}



const twoDigitsToWord = (num: number): string => {
  if (num < 11) {
    return oneToTen[num]
  }

  if (num < 20) {
    return elevenToNineteen[num]
  }

  const tensDigit = Math.floor(num / 10)
  const onesDigit = num - tensDigit * 10

  return (twentyToNinety[tensDigit * 10] + " " + (onesDigit > 0 ? oneToTen[onesDigit] : "")).trim()
}

const threeDigitsToWord = (num: number): string => {
  if (num < 100) {
    return twoDigitsToWord(num)
  }

  const hundredsDigit = Math.floor(num / 100)
  const rem = num - hundredsDigit * 100
  return (oneToTen[hundredsDigit] + " Hundred" + " " + (rem > 0 ? twoDigitsToWord(rem) : "")).trim()
}

const numberToWords = (num: number): string => {
  if (num === 0) {
    return "Zero"
  }

  // chunk the number in chunks of three three digits
  const chunks: number[] = []
  while (num > 0) {
    const rem = Math.floor(num / 1000)
    const chunk = num - rem * 1000
    chunks.push(chunk)
    num = rem
  }

  const stringifiedChunks = chunks.map((chunk, idx) => {
    if (chunk === 0) {
      return ""
    }
    const magnitude = idx > 0 ? magnitudes[idx] : ""
    return (threeDigitsToWord(chunk) + " " + magnitude).trim()
  })
  
  return stringifiedChunks.filter(Boolean).reverse().join(" ")
}