

const longestBeautifulSubstring = (word: string): number => {
  if (word.length < 5) {
    return 0
  }

  let result = 0
  let current = 1
  let seenVowels = new Set()
  let i = 1
  seenVowels.add(word[0])
  while (i < word.length) {
    if (word[i] >= word[i - 1]) {
      current++
      seenVowels.add(word[i])
      if (seenVowels.size === 5) {
        result = Math.max(result, Math.max(seenVowels.size, current))
      }
    } else {
      current = 1
      seenVowels.clear()
      seenVowels.add(word[i])
    }
    i++
  }

  return result
}