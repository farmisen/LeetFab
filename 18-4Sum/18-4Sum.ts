// Complexity should be O(n^3) (O(n^2) from 3sum and O(n) for the outer loop)
// this was a quick try. reusing my previous 3sum implementation but it's far 
// from being optimal

const threeSum = (nums: number[], target: number, skipIdx: number): number[][] => {
    const results = []
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === skipIdx) {
            continue
        }
        let startIdx = i + 1
        let endIdx = nums.length - 1
        if (startIdx === skipIdx) {
            startIdx++
        }

        if (endIdx === skipIdx) {
            endIdx--
        }

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
            if (startIdx === skipIdx) {
                startIdx++
            }

            if (endIdx === skipIdx) {
                endIdx--
            }

        }
    }

    return results
};

const hash = (quadriplet: number[]): number => {
    const offset = 1e9;
    const primes = [31, 37, 41, 43]; // Prime multipliers for mixing

    const values = [...quadriplet]
    values.sort()
    let hashValue = 0;
    for (let i = 0; i < 4; i++) {
        const adjustedNum = values[i] + offset; // Shift to positive range [0, 2 * 10^9]
        hashValue = hashValue * primes[i] + adjustedNum;
        hashValue = hashValue >>> 0; // Ensure unsigned 32-bit integer
    }

    return hashValue;
}

const fourSum = (nums: number[], target: number): number[][] => {
    const result = new Map<number, number[]>()
    nums.sort((a, b) => a - b)
    for (let idx = 0; idx < nums.length - 3; idx++) {
        const targetComplement = target - nums[idx]
        const triplets = threeSum(nums, targetComplement, idx)
        triplets.forEach((triplet) => {
            const quad = [nums[idx], ...triplet]
            result.set(hash(quad), quad)
        })
    }
    return [...result.values()]
};