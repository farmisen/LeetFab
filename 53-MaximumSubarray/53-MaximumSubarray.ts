// const maxSubArray = (nums: number[]): number => {

//   let maxSum = Number.NEGATIVE_INFINITY
//   // [-2, 1, -3, 4, -1, 2, 1, -5, 4]

//   for (let n = 1; n <= nums.length; n++) {
//     for (let i = 0; i <= nums.length - n ; i++) {
//       let sum = 0
//       for (let j = 0; j < n; j++) {
//         sum += nums[i + j]
//       }
//       maxSum = Math.max(sum, maxSum)
//     }
//   }
//   return maxSum
// }



const maxSubArray = (nums: number[]): number => {



  // 1, 2, 3, 4, 5

  const startingIndices = new Array<number>(nums.length)
  const sums = new Array<number>(nums.length)

  startingIndices[0] = 0
  sums[0] = nums[0]
  for (let i = 1; i <= nums.length - 1; i++) {

    // calc the sum of the subarray on the left
    if (sums[i - 1] >= 0) {
      startingIndices[i] = startingIndices[i - 1]
      sums[i] = sums[i - 1] + nums[i]
    } else {
      startingIndices[i] = i
      sums[i] = nums[i]
    }
  }
  sums.sort((a,b) => a - b)
  return sums[sums.length - 1]
}