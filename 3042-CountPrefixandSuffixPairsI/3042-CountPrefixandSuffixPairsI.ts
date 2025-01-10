const countPrefixSuffixPairs = (words: string[]): number => {
  let result = 0
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const w1 = words[i]
      const w2 = words[j]
      if ( w2.startsWith(w1) && w2.endsWith(w1)) {
        result ++
      }
    }
  }

  return result
};