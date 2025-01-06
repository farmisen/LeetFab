const countGoodSubstrings = (s: string): number => {
  const len = s.length
  if (len < 3) {
    return 0
  }

  const chars = new Set<string>()
  let result = 0
  for (let i = 0; i < s.length - 3 + 1; i++) {
    let j = i
    chars.clear()
    while (j < i + 3) {
      const c = s[j]
      if (chars.has(c)) {
        break
      }

      if (chars.size === 2) {
        result++
        break
      }
      chars.add(c)
      j++
    
    }

  }
  return result
}