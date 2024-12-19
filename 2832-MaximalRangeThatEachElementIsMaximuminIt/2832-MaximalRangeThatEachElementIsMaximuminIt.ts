const maximumLengthOfRangesV1 = (nums: number[]): number[] => {
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

    while (true) {
      const canMoveLeft = left > 0 && nums[left - 1] < val
      const canMoveRight = right < nums.length && nums[right + 1] < val
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
    }
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


// now trying to use a monotonic stack (hinted from dicussions)

const maximumLengthOfRanges = (nums: number[]): number[] => {
  const nextGreaterStack: number[] = []
  const prevGreaterStack: number[] = []
  const nextGreaterIdx: number[] = Array.from({ length: nums.length })
  const prevGreaterIdx: number[] = Array.from({ length: nums.length })

  for (let i = 0; i < nums.length; i++) {
    // console.log("----------", i)
    // console.log("1", nextGreaterIdx, nextGreaterStack)
    // console.log("1", prevGreaterIdx, prevGreaterStack)

    while (nextGreaterStack.length !== 0 && nums[i] > nums[nextGreaterStack[nextGreaterStack.length - 1]]) {
      nextGreaterIdx[nextGreaterStack.pop()] = i
    }
    nextGreaterStack.push(i)

    while (prevGreaterStack.length !== 0 && nums[i] > nums[prevGreaterStack[prevGreaterStack.length - 1]]) {
      prevGreaterStack.pop()
    }
    if (prevGreaterStack.length !== 0 && nums[prevGreaterStack[prevGreaterStack.length - 1]] > nums[i]) {
      prevGreaterIdx[i] = prevGreaterStack[prevGreaterStack.length - 1]
    }
    prevGreaterStack.push(i)
    // console.log("2", nextGreaterIdx, nextGreaterStack)
    // console.log("2", prevGreaterIdx, prevGreaterStack)
  }

  const results = []
  for (let i = 0; i < nums.length; i++) {
    const leftIdx = prevGreaterIdx[i] !== undefined ? prevGreaterIdx[i] + 1 : 0
    const rightIdx = nextGreaterIdx[i] !== undefined ? nextGreaterIdx[i] - 1 : nums.length - 1
    results.push(rightIdx - leftIdx + 1)
  }
  // console.log(results)
  // console.log(prevGreaterIdx)
  // console.log(nextGreaterIdx)

  return results
}
