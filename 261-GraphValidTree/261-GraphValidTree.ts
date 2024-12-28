

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
  
}