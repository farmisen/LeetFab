

const hasLoopRec = (graph: number[][], prevNode:number, node: number, visited: boolean[]): boolean => {
  console.log(node)
  if (visited[node]) {
    return true
  }
  visited[node] = true
  for (const otherNode of graph[node]) {
    if (otherNode === prevNode) {
      continue
    }
    if (hasLoopRec(graph, node, otherNode, visited)) {
      return true
    }
  }
  return false
}

const hasLoop =  (graph: number[][], visited: boolean[]): boolean => {  
  return hasLoopRec(graph, 0, 0, visited)
}


const validTree = (len: number, edges: number[][]): boolean => {

  // remove nodes connected to only another node until you can't
  // if there is nodes left then not a tree
  // use an array of array to represent the graph

  const graph: number[][] = Array.from({ length: len }, () => [])

  edges.forEach((edge) => {
    const [n0, n1] = edge
    graph[n0].push(n1)
    graph[n1].push(n0)
  })

  // check for loops
  const visited = Array(graph.length).fill(false)
  if (hasLoop(graph, visited)) {
    return false
  }

  // check if all the nodes have been visited
  return !visited.some(v => !v)

  // check if all the nodes are part of the same graph
  // if (isPartitioned(graph)) {
  //   return false
  // }

  // // remove leaves while possible
  // while (true) {
  //   let leafCount = 0
  //   for (let n = 0; n < len - 1; n++) {
  //     if (graph[n].length === 1) {
  //       const m = graph[n].pop()
  //       graph[m] = graph[m].filter((o) => o !== n)
  //       if (graph[m].length === 1) {
  //         leafCount += 1
  //       }
  //     }
  //   }
  //   if (leafCount === 0) {
  //     break
  //   }
  // }

  // // it's not a tree if there are still nodes in the graph
  // console.log(graph)
  // return !graph.some(n => n.length > 0)
}