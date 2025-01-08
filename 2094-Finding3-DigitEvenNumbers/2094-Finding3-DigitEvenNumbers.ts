
const makePairs = (digits: number[], takenIdx: number): number[][] => {
  const results = []
  for (let i = 0; i < digits.length - 1; i++) {
    if (i === takenIdx) {
      continue
    }
    for (let j = i + 1; j < digits.length; j++) {
      if (j === takenIdx) {
        continue
      }
      results.push([digits[i], digits[j]], [digits[j], digits[i]])
    }
  }
  return results
}


const findEvenNumbers = (digits: number[]): number[] => {
  const set =  new Set<number>()
  if (digits.length < 3) {
    return []
  }
  // all combination of 3 out of n digits
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 0) {
      continue
    }
    makePairs(digits, i).forEach( (pair) => {
      if ((pair[1] & 1) === 0) {
      set.add(digits[i] * 100 + pair[0] * 10 + pair[1])
      }
    })
  }
  const results = [...set]
  results.sort((a,b) => a - b)
  
  return results
};