// with the BST complexity is O(nlogn) for insertion and retrieval + O(n) for range traversal 
// with the array complexity is O(nlogn) for sorting, O(1) for retireval and + O(n) for range traversal 
// implementing a BST was the wrong intuition after all, pushing to an array and
// sorting at the end  was way faster.

type BSTNode = {
    value: number
    sortValue: number
    left?: BSTNode
    right?: BSTNode
    size: number
}

type BST = {
    root?: BSTNode
}

const insertValue = (bst: BST, value: number, sortValue: number) => {

    const insertRec = (node: BSTNode, value: number, sortValue: number): BSTNode => {
        if (!node) {
            return { value, sortValue, size: 1 }
        }

        if (sortValue < node.sortValue) {
            node.left = insertRec(node.left, value, sortValue)
        } else {
            node.right = insertRec(node.right, value, sortValue)
        }

        node.size = 1 + (node.left?.size ?? 0) + (node.right?.size ?? 0)
        return node
    }

    bst.root = insertRec(bst.root, value, sortValue)
}

const valueAt = (bst: BST, idx: number): number | undefined => {
    const valueAtRec = (node: BSTNode, idx: number): number | undefined => {
        if (!node || node.size - 1 < idx || idx < 0) {
            return undefined
        }

        const leftSize = node.left?.size ?? 0
        if (idx < leftSize) {
            return valueAtRec(node.left, idx)
        }

        if (idx === leftSize) {
            return node.value
        }

        return valueAtRec(node.right, idx - leftSize - 1)
    }

    return valueAtRec(bst.root, idx)
}

const cache = new Map<number, number>()
const power = (n: number): number => {
    if (n === 1) {
        return 0
    }
    if (cache.has(n)) {
        return cache.get(n)
    }

    const pow = 1 + (n % 2 === 0 ? power(n >> 1) : 1 + power((3 * n + 1) >> 1))
    cache.set(n, pow)
    return pow
}


const getKth = (lo: number, hi: number, k: number): number => {
    // const bst = {} as BST
    const results = []
    for (let idx = 0; idx < hi - lo + 1; idx++) {
        const n = lo + idx
        const pow = power(n)
        // insertValue(bst, n, pow)
        results.push([pow, n])
    }
    results.sort((a,b) => a[0] - b[0])
    return results[k-1][1]
    // return valueAt(bst, k - 1)
};