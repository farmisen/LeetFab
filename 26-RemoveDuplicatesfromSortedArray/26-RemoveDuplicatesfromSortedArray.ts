const removeDuplicates = (nums: number[]): number => {

  for (let i = 1; i < nums.length; i++) {
    console.log(i)
    if (nums[i - 1] === nums[i]) {
      nums[i - 1] = Number.MAX_SAFE_INTEGER
    }
  }
  nums.sort((a, b) => a - b)
  const idx = nums.indexOf(Number.MAX_SAFE_INTEGER)
  if (idx === -1) {
    return nums.length
  }

  return idx
}