const threeSum = (nums: number[]): number[][] => {
    nums.sort((a, b) => a - b)
    const results = []

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) { continue }

        let startIdx = i + 1
        let endIdx = nums.length - 1

        while (endIdx > startIdx) {
            const sum = nums[i] + nums[startIdx] + nums[endIdx]
            if (sum === 0) {
                results.push([nums[i], nums[startIdx], nums[endIdx]])
                while (startIdx < endIdx && nums[startIdx + 1] === nums[startIdx]) { startIdx++ }
                while (endIdx > startIdx && nums[endIdx - 1] === nums[endIdx]) { endIdx-- }
                startIdx++
                endIdx--
            } else if (sum > 0) {
                endIdx--
            } else {
                startIdx++
            }


        }
    }

    return results
};


