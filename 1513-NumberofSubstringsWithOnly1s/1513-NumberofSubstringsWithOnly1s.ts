
const subCount = (len: number, memo: number[]): number => {
  if (len === 0) {
    return 0
  }
  if (memo[len]) {
    return memo[len]
  }

  const count = len + subCount(len - 1, memo)
  memo[len] = count
  return count

}

const numSub = (s: string): number => {
  const ones = s.split("0").filter(s => s.length !== 0).sort((a, b) => a.length - b.length)
  console.log(ones)
  if (ones.length === 0) {
    return 0
  }

  const maxLen = ones[ones.length - 1].length
  const memo = Array(maxLen)
  let result = 0
  for (let i = 0; i < ones.length; i++) {
    const count = subCount(ones[i].length, memo)
    console.log(i, ones[i].length, count)
    result += count % 1000000007
  }

  return result
}