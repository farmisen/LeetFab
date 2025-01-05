
const searchRangeRec = (nums: number[], target: number, idx:number, len:number): number[] => {
  // console.log(idx, len, nums[idx], nums[idx+len-1])
  if (len <= 0 || nums[idx + len-1] < target || nums[0] > target) {
    return [-1, -1]
  }
 
  if (len === 1 && nums[idx] === target) {
    return [idx, idx]
  }


  const p0 = nums[idx] === target ? idx : -1
  const p1 = nums[idx + len - 1] === target ? idx + len - 1 : -1
  // console.log("[p0, p1]", [p0, p1])
  if (p0 !== -1 && p1 !== -1) {
    return [p0, p1]
  }
  
  // let left = idx + 1
  // let right = idx + len - 1 - 1
  // const newLen = right - left + 1
  // if ( newLen <= 1) {
  //   return [p0 !== -1 ? p0 : p1, p1 !== -1 ? p1 : p0]
  // }
  

  const hLen = Math.floor(len/2)
  const [l0, l1] = searchRangeRec(nums, target, idx + 1, hLen - 1)
  const [r0, r1] = searchRangeRec(nums, target, idx + hLen, len - hLen -1)
  // console.log("[l0, l1]", [l0, l1])
  // console.log("[r0, r1]", [r0, r1])

  const candidates = [p0, p1, l0, l1, r0, r1].filter(i=>i>-1)
  // console.log([p0, p1, l0, l1, r0, r1])
  const minIdx = candidates.length > 0 ? Math.min(...candidates) : p0
  const maxIdx = candidates.length > 0 ? Math.max(...candidates) : p1
  return [minIdx, maxIdx]
}

const searchRange = (nums: number[], target: number): number[] => {
    // to find the first occurence 
    // given idx initially set to 0 and len set to nums len
    // if nums[len-1] > target return -1
    // if nums[idx] === target return 0
    // else return max( find(idx+1, len/2) and find(idx+1+len/2, len/2))


    return searchRangeRec(nums, target, 0 , nums.length)
};