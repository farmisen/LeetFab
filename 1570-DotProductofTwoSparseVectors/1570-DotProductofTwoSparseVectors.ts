class SparseVector {
    data: Map<number, number>;

    constructor(nums: number[]) {
        this.data = new Map()

        nums.forEach((val, idx) => {
            if (val !== 0) {
                this.data.set(idx, val)
            }
        })
    }

    // Return the dotProduct of two sparse vectors
    dotProduct(vec: SparseVector): number {
        const [smallVec, largeVec] = Object.keys(this.data).length < Object.keys(vec.data).length
            ? [this.data, vec.data]
            : [vec.data, this.data]

        let res = 0
        for (const [idx, val] of smallVec) {
            res += val * (largeVec.get(idx) ?? 0)
        }
        return res
    }
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * var v1 = new SparseVector(nums1)
 * var v2 = new SparseVector(nums1)
 * var ans = v1.dotProduct(v2)
 */