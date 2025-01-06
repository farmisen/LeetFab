
const isVowel = (c) => ['a', 'e', 'i', 'o', 'u'].indexOf(c) !== -1
const countVowelSubstrings = (word: string): number => {
  let result = 0
  let left=0
  let right=left + 4
  while (right < word.length) {
    const sub = word.slice(left, right + 1)
    const onlyVowels = sub.split("").every(isVowel)
    const allVowels = ['a', 'e', 'i', 'o', 'u'].every(c => sub.indexOf(c) !== -1)

    console.log(sub, onlyVowels, allVowels)
    if (onlyVowels && allVowels) {
      result++
      console.log(word[right+1])
      if (right < word.length - 1 && isVowel(word[right+1])) {
        right++    
      } else {
        left++
        right = left + 4
      }
      
      continue
    }

    if (onlyVowels) {
      right++
      continue
    }

    left++
    right = left + 4
  }
  return result
}