const removeElement = (nums: number[], val: number): number => {
  let removed = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = Number.MAX_SAFE_INTEGER
      removed++
    }
  }
  nums.sort()
  return nums.length - removed
}