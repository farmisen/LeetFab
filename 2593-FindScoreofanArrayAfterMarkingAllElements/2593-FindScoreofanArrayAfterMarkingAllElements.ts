// complexity O(logn) for sorting + O(n) for main loop


// type LinkedNum = {
//     left: LinkedNum
//     right: LinkedNum
//     marked: boolean
//     idx: number
// }

const findScore = (nums: number[]): number => {
    // create a linked list of numbers sorted by value
    // const linkedNums: LinkedNum[] = nums.reduce((acc: LinkedNum[], val: number, idx: number) => {
    //     const leftNode = acc[acc.length - 1]
    //     const node = {
    //         left: leftNode,
    //         right: undefined,
    //         marked: false,
    //         idx
    //     }
    //     if ( leftNode) {
    //         leftNode.right = node
    //     }
    //     return [...acc, node]

    // }, [] as LinkedNum[])
    // linkedNums.sort((a, b) => nums[a.idx] - nums[b.idx])


    // const entries = [...nums.entries()].map(([a,b]) => [b,a])
    // entries.sort((a, b) => a[0] - b[0])
    // const entriesIterator = entries[Symbol.iterator]()
    const sortedNumsMap = nums.map((value, index) => [value, index])
    sortedNumsMap.sort( (a,b) => a[0] - b[0])

    // console.log(sortedNumsMap)

    let score = 0
    for (const [_, idx] of sortedNumsMap) {
        // console.log(nums)
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