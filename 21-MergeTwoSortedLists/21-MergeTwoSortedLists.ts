// type combo = {
//   nested: Pair | undefined 
// }

const transformCombination = (combo: string): string[] => {
  const result = []
  for (let i = 0; i < combo.length; i++) {
    result.push([combo.slice(0, i + 1), "()", combo.slice(i + 1)].join(""))
  }
  return result
}

const transformCombinations = (combos: Set<string>): Set<string> => {
  return new Set([...combos.values()].flatMap((combo) => transformCombination(combo) ))
}

const generateParenthesis = (n: number): string[] => {
  let current = new Set(["()"])
  for (let i = 0; i < n - 1; i++) {
    current = transformCombinations(current)
  }
  return [...current.values()]
};