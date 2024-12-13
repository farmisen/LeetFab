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

// const printNode = (node: BSTNode) => {
//     console.log(JSON.stringify(node))
// }

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


const power = (n: number): number => {
    let pow = 0
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2
            pow++
        } else {
            n = (3 * n + 1) / 2
            pow += 2
        }
    }
    return pow
}





const getKth = (lo: number, hi: number, k: number): number => {
    const bst = {} as BST
    for (let idx = 0; idx < hi - lo + 1; idx++) {
        const n = lo + idx
        const pow = power(n)
        console.log(n, pow)
        insertValue(bst, n, pow)
    }
    // console.log(JSON.stringify(bst))
    return valueAt(bst, k - 1)
};