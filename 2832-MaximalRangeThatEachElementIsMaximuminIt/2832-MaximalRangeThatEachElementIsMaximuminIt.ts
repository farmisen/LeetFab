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

const empty = (array: number[]) => array.length === 0
const peek = (array: number[]) => array[array.length - 1]


const maximumLengthOfRanges = (nums: number[]): number[] => {
  const numsLen = nums.length
  const nextGreaterStack: number[] = []
  const prevGreaterStack: number[] = []
  const nextGreaterIdx: number[] = Array.from({ length: numsLen })
  const prevGreaterIdx: number[] = Array.from({ length: numsLen })

  for (let i = 0; i < numsLen; i++) {

    // maintain a stack of growing values idx 
    // when the curr idx value is > top of the stack value
    // this current idx is the next greatest for the idx on the top of the stack
    while (nextGreaterStack.length > 0 && nums[i] > nums[nextGreaterStack[nextGreaterStack.length - 1]]) {
      const topIdx = nextGreaterStack.pop()!
      nextGreaterIdx[topIdx] = i
    }
    nextGreaterStack.push(i)

    // maintain a stack of decreasing values
    // when the curr idx value is > top of the stack value
    // pop all the idx until the stack is empty or the top
    // of the stack value is > to the current value
    while (prevGreaterStack.length > 0 && nums[i] > nums[prevGreaterStack[prevGreaterStack.length - 1]]) {
      prevGreaterStack.pop()
    }

    // if the current value is < top of the stack value then the
    // top of the stack value is the prev number for the current value
    if (prevGreaterStack.length > 0 && nums[i] < nums[prevGreaterStack[prevGreaterStack.length - 1]]) {
      prevGreaterIdx[i] = prevGreaterStack[prevGreaterStack.length - 1]
    }
    prevGreaterStack.push(i)
  }

  const results = Array.from<number>({ length: numsLen })
  for (let i = 0; i < numsLen; i++) {
    const leftIdx = prevGreaterIdx[i] !== undefined ? prevGreaterIdx[i] + 1 : 0
    const rightIdx = nextGreaterIdx[i] !== undefined ? nextGreaterIdx[i] - 1 : numsLen - 1
    results[i] = rightIdx - leftIdx + 1
  }

  return results
}
