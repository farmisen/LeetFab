class SparseVector {
    data: Record<number, number>;

    constructor(nums: number[]) {
        this.data = {}

        nums.forEach((val, idx) => {
            if (val !== 0) {
                this.data[idx] = val
            }
        })

    }

    at(idx: number): number {
        return this.data[idx] ?? 0
    }

    // Return the dotProduct of two sparse vectors
    dotProduct(vec: SparseVector): number {
        const allIndicesSet = new Set([...Object.keys(this.data), ...Object.keys(vec.data)])
        const allIndices = [...allIndicesSet.values()]
        const res = allIndices.reduce((result, idxAsStr) => {
            const idx = parseInt(idxAsStr, 10)
            console.log(idx, result)
            return result + this.at(idx) * vec.at(idx)

        }, 0)

        return res

    }
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * var v1 = new SparseVector(nums1)
 * var v2 = new SparseVector(nums1)
 * var ans = v1.dotProduct(v2)
 */