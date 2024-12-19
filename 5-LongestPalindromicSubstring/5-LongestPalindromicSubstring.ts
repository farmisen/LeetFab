// Complexity O(n^2)


const longestPalindrome = (s: string): string => {

  const strLen = s.length

  if (strLen === 0) {
    return ""
  }

  if (strLen === 1) {
    return s
  }

  // if palCache[i][j] is true then the substring starting at i and ending at j is a palidrome
  const palIndex: boolean[][] = Array.from({ length: strLen }, () => Array.from({ length: strLen }, () => false))

  let startIdx = 0
  let maxLen = 1

  for (let i = 0; i < strLen; i++) {
    palIndex[i][i] = true
  }

  for (let i = 0; i < strLen - 1; i++) {
    if (s[i] === s[i + 1]) {
      palIndex[i][i + 1] = true
      startIdx = i
      maxLen = 2
    }
  }

  
  for (let len = 3; len <= strLen; len++) {
    for (let i = 0; i < strLen - len + 1; i++) {
      const j = i + len - 1
      if (s[i] === s[j] && palIndex[i + 1][j - 1] === true) {
        palIndex[i][j] = true
        maxLen = len
        startIdx = i
      }
    }
  }


  return s.slice(startIdx, maxLen + startIdx)
}