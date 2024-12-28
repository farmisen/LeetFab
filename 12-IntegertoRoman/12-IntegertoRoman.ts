

const lut = {
  1000: "M",
  500: "D",
  100: "C",
  50: "L",
  10: "X",
  5: "V",
  1: "I"
}


const subLut = {
  900: "CM",
  400: "CD",
  90: "XC",
  40: "XL",
  9: "IX",
  4: "IV",
}


const intToRoman = (num: number): string => {

  if (num === 0) {
    return ""
  }
  // console.log(num)
  const numAsStr = num.toString()
  let leftishDigit = Number(numAsStr[0])
  let highestValue = leftishDigit
  for (let i = 0; i < numAsStr.length - 1; i++) {
    highestValue *= 10
  }

  // console.log(highestValue, leftishDigit)

  if (leftishDigit === 9 || leftishDigit === 4) {
    // If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted 
    // from the following symbol.
    // Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
    const romanNumeral = subLut[highestValue]
    // console.log(romanNumeral)
    return romanNumeral + intToRoman(num - highestValue)
  }

  if (leftishDigit < 5) {
    // If the value does not start with 4 or 9, select the symbol of the maximal value
    // that can be subtracted from the input, append that symbol to the result, 
    // subtract its value, and convert the remainder to a Roman numeral.
    let romanNumeral = ""
    for (let i = 0; i < leftishDigit; i++) {
          romanNumeral = romanNumeral + lut[highestValue / leftishDigit]
    }
    // console.log(romanNumeral)
    return romanNumeral + intToRoman(num - highestValue)
  }

  //  If you need to append a symbol 4 times use the subtractive form.
  
  highestValue /= leftishDigit
  highestValue *= 5
  // console.log(highestValue, leftishDigit)
  let romanNumeral = lut[highestValue]
  // console.log(romanNumeral)
  return romanNumeral + intToRoman(num - highestValue)
}