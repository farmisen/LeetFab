

const threeSumClosest = (nums: number[], target: number): number => {
    nums.sort((a, b) => a - b)
    let result = nums[0] + nums[1] + nums[2]

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) { continue }

        let startIdx = i + 1
        let endIdx = nums.length - 1

        while (endIdx > startIdx) {
            const sum = nums[i] + nums[startIdx] + nums[endIdx]
            if (sum === target) {
                return target
            } else if (sum > target) {
                endIdx--
            } else {
                startIdx++
            }

            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum
            }

        }
    }

    return result
};