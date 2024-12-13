// complexity O(nlogn) for sorting and O(n) for main loop hence O(nlogn_

const findScore = (nums: number[]): number => {
    const sortedNumsMap = nums.map((value, index) => [value, index])
    sortedNumsMap.sort((a, b) => a[0] - b[0])

    let score = 0
    for (const [_, idx] of sortedNumsMap) {
        const val = nums[idx]
        if (val < 0) {
            continue
        }
        score += val
        nums[idx] = -1
        if (nums[idx - 1]) {
            nums[idx - 1] = -1
        }
        if (nums[idx + 1]) {
            nums[idx + 1] = -1
        }

    }

    return score
};