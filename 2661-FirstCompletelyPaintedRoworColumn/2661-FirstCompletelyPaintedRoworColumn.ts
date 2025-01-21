const firstCompleteIndex = (arr: number[], mat: number[][]): number => {
  const w = mat[0].length
  const h = mat.length

  // hold the count of fill cell in each row and col
  const rowCounts = Array(w).fill(0)
  const colCounts = Array(h).fill(0)

  // console.log(w,h)
  // compute a lookup table for each value in the matrix
  const lookUp = Array(w * h).fill(undefined)
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      const val = mat[j][i]
      lookUp[val - 1] = j * w + i
    }
  }

  // console.log(lookUp)
  // iterate arr incrementing rowCounts and colCounts
  for (let k = 0; k < w * h; k++) {
    const val = arr[k]
    const key = lookUp[val - 1]
    const j = Math.floor(key / w)
    const i = key - j * w
    rowCounts[i]++
    colCounts[j]++
    // console.log("=====")
    // console.log(val, key, i, j, rowCounts, colCounts)


    if (rowCounts[i] === h || colCounts[j] === w) {
      return k
    }
  }

  // should not happen
  return -1
};