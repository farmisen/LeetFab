// Complexity: O(n^3)

const threeSumSmaller = (nums: number[], target: number): number => {
  nums.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    if (target > 0 && nums[i] >= target) {
      continue;
    }
    let startIdx = i + 1;
    let endIdx = nums.length - 1;

    while (startIdx < nums.length - 1) {
      const sum = nums[i] + nums[startIdx] + nums[endIdx];
    //   console.log(`(${i}, ${startIdx}, ${endIdx})`, sum)

      if (sum < target) {
        result++;
      }
      endIdx--;
      if (startIdx === endIdx) {
        startIdx++;
        endIdx = nums.length - 1;
      }
    }
  }

  return result;
};
