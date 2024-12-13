// Complexity O(n) + O(n) = O(n) [loop + map lookup]

const twoSum = (nums: number[], target: number): number[] => {

    const numsMap = new Map<number, number>()
    
    for (let idx = 0; idx < nums.length; idx++) {
        const n = nums[idx]
        if (numsMap.has(target - n)) {
            return [idx, numsMap.get(target - n)]
        }
        numsMap.set(n, idx)
    }

    return []
};