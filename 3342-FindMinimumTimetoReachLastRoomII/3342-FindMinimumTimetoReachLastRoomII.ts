
// const moves = (moveTime: number[][], visited: number[][], x: number, y: number, elapsed: number): number[][] => {
//   const length = moveTime[0].length
//   const width = moveTime.length

//   const canMoveTo = (x1: number, y1: number): boolean => {
//     if (x1 < 0 || x1 >= width || y1 < 0 || y1 >= length) {
//       return false
//     }
//     return elapsed < visited[x1][y1]
//   }
//   const results = [[x - 1, y], [x + 1, y], [x, y + 1], [x, y - 1]].filter(([x1, y1]) => canMoveTo(x1, y1))
//   results.sort(([x0, y0], [x1, y1]) => moveTime[x0][y0] - moveTime[x1][y1])

//   return results
// }

// const minTimeRec = (moveTime: number[][], visited: number[][], x = 0, y = 0, elapsed = 0): number => {
//   // console.log(`[${elapsed}] visiting: ${x},${y}`, visited)
//   visited[x][y] = elapsed

//   const length = moveTime[0].length
//   const width = moveTime.length
//   if (x === width - 1 && y === length - 1) {
//     return elapsed
//   }

//   const isOneSecondMove = (x + y) % 2 === 0

//   const nextMoves = moves(moveTime, visited, x, y, elapsed)
//   if (nextMoves.length === 0) {
//     return Number.MAX_SAFE_INTEGER
//   }

//   // console.log(`[${elapsed}] nextMoves:`, nextMoves)
//   const times = nextMoves.map(([x1, y1]) => {
//     const waitingTime = elapsed > moveTime[x1][y1] ? 0 : moveTime[x1][y1] - elapsed
//     const adjacentMoveTime = isOneSecondMove ? 1 : 2
//     return minTimeRec(moveTime, visited, x1, y1, elapsed + waitingTime + adjacentMoveTime)
//   })

//   // console.log(`[${elapsed}] times: ${times}`)

//   let smallestTime = times[0]
//   for (const t of times) {
//     smallestTime = Math.min(smallestTime, t)
//   }
//   // console.log(`[${elapsed}] best time: ${smallestTime}`)
//   return smallestTime
// }


// const pqPush = <T>(queue: T[], el: T) => {
//   queue.push(el)
// }

// const pqPop = <T>(queue: T[], sortFun: (a: T, b: T) => number): T | undefined => {
//   queue.sort(sortFun)
//   return queue.pop()
// }

// type State = {
//   elapsed: number
//   x: number
//   y: number
// }

// const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]]

// const minTimeToReach = (moveTime: number[][]): number => {
//   // visited record keep track of the minimum time to reach a room
//   const visited = Array.from({ length: moveTime.length }, () => Array(moveTime[0].length).fill(Number.MAX_SAFE_INTEGER))
//   visited[0][0] = 0

//   // naive priority queue
//   const queue: State[] = []
//   pqPush(queue, { elapsed: 0, x: 0, y: 0 })

//   const length = moveTime[0].length
//   const width = moveTime.length
//   while (queue.length > 0) {
//     const { elapsed, x, y } = pqPop(queue, (a, b) => b.elapsed - a.elapsed)

//     if (elapsed > visited[x][y]) {
//       continue
//     }

//     for (const [dx, dy] of deltas) {
//       const x1 = x + dx
//       const y1 = y + dy
//       if (x1 < 0 || x1 >= width || y1 < 0 || y1 >= length) {
//         continue
//       }
//       const waitingTime = elapsed > moveTime[x1][y1] ? 0 : moveTime[x1][y1] - elapsed
//       const moveCost = (x + y) % 2 === 0 ? 1 : 2
//       const adjacentMoveTime = elapsed + moveCost + waitingTime
//       if (adjacentMoveTime < visited[x1][y1]) {
//         visited[x1][y1] = adjacentMoveTime
//         pqPush(queue, { elapsed: adjacentMoveTime, x: x1, y: y1 })
//       }
//     }
//   }

//   return visited[width - 1][length - 1]
// }


type Heap<T> = {
  push: (el: T) => void
  pop: () => T | undefined
  empty: () => boolean


}

type PrivHeap<T> = Heap<T> & {
  heap: T[],
  compare: (a: T, b: T) => number
  bubbleUp: (idx: number) => void
  bubbleDown: (idx: number) => void
  swap: (idx0: number, idx1: number) => void
}

const createHeap = <T>(compare: (a: T, b: T) => number): Heap<T> => {
  return {

    push(this: PrivHeap<T>, el: T) {
      // add the element to the end of the heap and bubble it up
      // to keep the heap sorted
      this.heap.push(el)
      this.bubbleUp(this.heap.length - 1)
    },
    pop(this: PrivHeap<T>) {
      // return the head of the heap (idx 0)
      // replace the head with the tail and bublle it down
      // to keep the heap sorted
      if (this.empty()) {
        return undefined
      }

      if (this.heap.length === 1) {
        return this.heap.pop()
      }
      const top = this.heap[0]
      this.heap[0] = this.heap.pop()
      this.bubbleDown(0)
      return top
    },
    empty(this: PrivHeap<T>,) {
      return this.heap.length === 0
    },
    bubbleDown(this: PrivHeap<T>, idx: number) {

      while (true) {
        const leftIdx = idx * 2 + 1
        const rightIdx = idx * 2 + 2
        let heapestIdx = idx
        if (leftIdx < this.heap.length && rightIdx < this.heap.length) {
          heapestIdx = this.compare(this.heap[leftIdx], this.heap[rightIdx]) > 0 ? leftIdx : rightIdx
        } else if (leftIdx < this.heap.length) {
          heapestIdx = leftIdx
        } else if (rightIdx < this.heap.length) {
          heapestIdx = rightIdx
        }
        if (heapestIdx !== idx && this.compare(this.heap[heapestIdx], this.heap[idx]) > 0) {
          this.swap(idx, heapestIdx)
          idx = heapestIdx
        } else {
          break
        }
      }
    },

    bubbleUp(this: PrivHeap<T>, idx: number) {
      while (true) {
        if (idx === 0) {
          break
        }
        const parentIdx = Math.floor(idx / 2)
        if (compare(this.heap[idx], this.heap[parentIdx]) > 0) {
          this.swap(idx, parentIdx)
          idx = parentIdx
        } else {
          break
        }
      }
    },

    swap(this: PrivHeap<T>, idx0: number, idx1: number) {
      [this.heap[idx0], this.heap[idx1]] = [this.heap[idx1], this.heap[idx0]]
    },

    heap: [],
    compare,

  } as Heap<T>
}


type State = {
  elapsed: number
  x: number
  y: number
}

const deltas = [[-1, 0], [1, 0], [0, -1], [0, 1]]

const minTimeToReach = (moveTime: number[][]): number => {
  // visited record keep track of the minimum time to reach a room
  const visited = Array.from({ length: moveTime.length }, () => Array(moveTime[0].length).fill(Number.MAX_SAFE_INTEGER))
  visited[0][0] = 0

  // priority queue
  const heap = createHeap<State>((a, b) => b.elapsed - a.elapsed)

  heap.push({ elapsed: 0, x: 0, y: 0 })

  const length = moveTime[0].length
  const width = moveTime.length
  while (!heap.empty()) {
    const { elapsed, x, y } = heap.pop()

    if (elapsed > visited[x][y]) {
      continue
    }

    for (const [dx, dy] of deltas) {
      const x1 = x + dx
      const y1 = y + dy
      if (x1 < 0 || x1 >= width || y1 < 0 || y1 >= length) {
        continue
      }
      const waitingTime = elapsed > moveTime[x1][y1] ? 0 : moveTime[x1][y1] - elapsed
      const moveCost = (x + y) % 2 === 0 ? 1 : 2
      const adjacentMoveTime = elapsed + moveCost + waitingTime
      if (adjacentMoveTime < visited[x1][y1]) {
        visited[x1][y1] = adjacentMoveTime
        heap.push({ elapsed: adjacentMoveTime, x: x1, y: y1 })
      }
    }
  }

  return visited[width - 1][length - 1]
}