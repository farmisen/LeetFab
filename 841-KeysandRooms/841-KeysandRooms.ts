

const canVisitAllRooms = (rooms: number[][]): boolean => {
  // keep a stack of keys
  // while stack not empty
  //    visit the room for the top popped key
  //    mark the room visited
  //    add the keys to the stack
  // check if all the rooms have been visited


  const visited = Array(rooms.length).fill(false)
  const keyChain: number[] = rooms[0]
  visited[0] = true

  while (keyChain.length !== 0) {
    const key = keyChain.pop()
    visited[key] = true
    keyChain.push(...rooms[key].filter(k => !visited[k]))
  }

  return !visited.some(b => !b)
}