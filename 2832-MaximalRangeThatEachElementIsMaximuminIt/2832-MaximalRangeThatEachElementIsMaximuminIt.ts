const maximumLengthOfRanges = (nums: number[]): number[] => {
  // for each nums[i]
  // starts at i and grow left and right while nums[i-1] and nums[i+1] < nums[i]
  // while growing toward the right
  // if nums[right] val is < to cur val  
  //   - if nums[right] is > to nums[right - 1]
  //      right++
  //   - if nums[right] is < to nums[right - 1]
  //      - calc result for right and memo it
  //      - increment val by result[right]

  // while growing toward the left
  // if nums[left] val is < to cur val  
  //   - if nums[left] is > to nums[left - 1]
  //      left--
  //   - if nums[left] is < to nums[left - 1]
  //      - decrement val by result[left]



  const results = Array.from<number>({ length: nums.length })


  const substringLenAt = (idx: number): number => {
    let left = idx
    let right = idx
    const val = nums[idx]
    // console.log("-----", i)

    while (true) {
      // !stopping conditions
      const canMoveLeft = left > 0 && nums[left - 1] < val
      const canMoveRight = right < nums.length && nums[right + 1] < val
      // console.log("1", left, right)
      if (canMoveLeft) {
        if (nums[left - 1] < nums[left]) {
          left -= results[left - 1]
        } else {
          left--
        }
      }

      if (canMoveRight) {
        if (nums[right + 1] < nums[right]) {
          right += substringLenAt(right + 1)
        } else {
          right++
        }
      }

      if (!canMoveLeft && !canMoveRight) {
        break
      }
      // console.log("2", left, right)
    }
    // console.log("+", left, right)
    const len = right - left + 1
    results[idx] = len
    return len
  }


  for (let i = 0; i < nums.length; i++) {
    if (results[i]) {
      continue
    }
    results[i] = substringLenAt(i)
  }


  return results
};