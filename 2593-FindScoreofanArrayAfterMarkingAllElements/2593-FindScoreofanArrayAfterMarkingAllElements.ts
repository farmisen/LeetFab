// complexity O(nlogn) for sorting and O(n) for main loop hence O(nlogn)

const findScore = (nums: number[]): number => {
    const sortedNumsMap = nums.map((value, index) => [value, index])
    // sort by inc value then by inc index
    sortedNumsMap.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    // use idx Set to track marked distinct numbers
    const marked = new Set<number>()
    let score = 0
    for (const [val, idx] of sortedNumsMap) {
        if (marked.has(idx)) {
            continue
        }
        score += val
        marked.add(idx)
        marked.add(idx+1)
        marked.add(idx-1)
    }

    return score
};