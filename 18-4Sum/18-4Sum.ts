// Complexity should be O(n^3) (O(n^2) from 3sum and O(n) for the outer loop)
// this was a quick try. reusing my previous 3sum implementation but it's far 
// from being optimal

const threeSum = (nums: number[], target: number, startIdx: number): number[][] => {
    const results = []
    for (let i = startIdx + 1; i < nums.length - 2; i++) {
        let startIdx = i + 1
        let endIdx = nums.length - 1

        while (endIdx > startIdx) {
            const sum = nums[i] + nums[startIdx] + nums[endIdx]
            if (sum === target) {
                results.push([nums[i], nums[startIdx], nums[endIdx]])
                startIdx++
                endIdx--
            } else if (sum > target) {
                endIdx--
            } else {
                startIdx++
            }

        }
    }

    return results
};


const fourSum = (nums: number[], target: number): number[][] => {
    const result = new Map<string, number[]>()
    // const result = []
    nums.sort((a, b) => a - b)
    for (let idx = 0; idx < nums.length - 3; idx++) {
        const targetComplement = target - nums[idx]
        const triplets = threeSum(nums, targetComplement, idx)
        triplets.forEach((triplet) => {
            const quad = [nums[idx], ...triplet]
            quad.sort()
            const key = `${quad[0]}_${quad[1]}_${quad[2]}_${quad[3]}`
            result.set(key, quad)
            // result.push(quad)
        })
    }

    return [...result.values()]
    // return result.filter(
    //     (item, index, self) => index === self.findIndex(obj => obj[0] === item[0] && obj[1] === item[1] && obj[2] === item[2] && obj[3] === item[3])
    // )

}