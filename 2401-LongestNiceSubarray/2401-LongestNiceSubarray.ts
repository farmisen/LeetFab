const longestNiceSubarray = (nums: number[]): number => {
  if (nums.length < 1) {
    return 0
  }

  if (nums.length === 1) {
    return 1
  }

  let result = 1
  let current = 1
  let i = 1
  let bitsAccu = nums[0]
  while (i < nums.length) {
    if ((nums[i] & bitsAccu) === 0) {
      current++
      bitsAccu |= nums[i]
      result = Math.max(current, result)
            i++
      continue
    }

    // backtrack while bitsAccu === 0
    let j = i
    current = 1
    bitsAccu = nums[i]
    while (j > 1 && (bitsAccu & nums[j - 1]) === 0) {
      bitsAccu |= nums[j - 1]  
      current++
      j--
    }
    i++
  }

  return result
};