const romanToInt = (s: string): number => {
  let result = 0
  let i = 0
  const len = s.length

  while (i < len) {
    const resultCpy = result
    if (i < len - 1) {
      switch (s.slice(i, i + 2)) {
        case "IV":
          result += 4
          break
        case "IX":
          result += 9
          break
        case "XL":
          result += 40
          break
        case "XC":
          result += 90
          break
        case "CD":
          result += 400
          break
        case "CM":
          result += 900
          break
      }
      if (resultCpy !== result) {
        i += 2
        continue
      }
    }

    switch (s[i]) {
      case "I":
        result += 1
        break
      case "V":
        result += 5
        break
      case "X":
        result += 10
        break
      case "L":
        result += 50
        break
      case "C":
        result += 100
        break
      case "D":
        result += 500
        break
      case "M":
        result += 1000
        break
    }
    i++
  }
  return result
}