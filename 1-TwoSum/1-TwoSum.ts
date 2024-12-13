function twoSum(nums: number[], target: number): number[] {

    const numsMap = new Map<number, number[]>()
    nums.forEach((n, idx) => {
        if (numsMap.has(n)) {
            numsMap.set(n, [...numsMap.get(n), idx])
        } else {
            numsMap.set(n, [idx])
        }
    })


    for (let idx = 0; idx < nums.length; idx++) {
        const n = nums[idx]
        if (numsMap.has(target - n)) {
            const targetIdxs = numsMap.get(target - n)

            const [idx1, idx2] = n === target - n && targetIdxs.length > 2
                ? targetIdxs
                : [idx, targetIdxs[0]]

            if (idx1 !== idx2) {
                return [idx1, idx2]
            }
        }
    }

    return []
};