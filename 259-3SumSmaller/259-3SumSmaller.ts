// Complexity: O(n^2)

// const threeSumSmaller = (nums: number[], target: number): number => {
//   nums.sort((a, b) => a - b);
//   let result = 0;

//   for (let i = 0; i < nums.length - 2; i++) {
//     // stop early when finding triplets w/ sum < target is impossible
//     if (target > 0 && nums[i] >= target) {
//       continue;
//     }
//     let startIdx = i + 1;
//     let endIdx = nums.length - 1;

//     while (startIdx < nums.length - 1) {
//       const sum = nums[i] + nums[startIdx] + nums[endIdx];
//       if (sum < target) {
//         result++;
//       }
//       endIdx--;
//       if (startIdx === endIdx) {
//         startIdx++;
//         endIdx = nums.length - 1;
//       }
//     }
//   }

//   return result;
// };

// can be simplified when realizing that the count of possible triplets 
// between startIdx and endIdx with idx fixed is endIdx - startIdx 

const threeSumSmaller = (nums: number[], target: number): number => {
  nums.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    // stop early when finding triplets w/ sum < target is impossible
    if (target > 0 && nums[i] >= target) {
      continue;
    }
    let startIdx = i + 1;
    let endIdx = nums.length - 1;

    while (startIdx < endIdx) {
      const sum = nums[i] + nums[startIdx] + nums[endIdx];
      if (sum < target) {
        result += endIdx - startIdx
        startIdx++
      } else {
        endIdx--;
      }
    }
  }

  return result;
};
