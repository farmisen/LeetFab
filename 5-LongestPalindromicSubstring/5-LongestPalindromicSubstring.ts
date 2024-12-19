
const longestPalindrome = (s: string): string => {

  const strLen = s.length

  if (strLen === 0) {
    return ""
  }

  if (strLen === 1) {
    return s
  }

  // if palCache[i][j] is true then the substring starting at i and ending at j is a palidrome
  const palCache: boolean[][] = Array.from({ length: strLen }, () => Array.from({ length: strLen }, () => undefined))

  let maxIdx = 0
  let maxLen = 1

  for (let i = 0; i < strLen; i++) {
    palCache[i][i] = true
  }

  for (let i = 0; i < strLen - 1; i++) {
    if (s[i] === s[i + 1]) {
      palCache[i][i + 1] = true
      maxIdx = i
      maxLen = 2
    }
  }

  
  for (let len = 3; len <= strLen; len++) {
    for (let i = 0; i < strLen - len + 1; i++) {
      const j = i + len - 1
      if (s[i] === s[j] && palCache[i + 1][j - 1] === true) {
        palCache[i][j] = true
        maxLen = len
        maxIdx = i
      }
    }
  }


  return s.slice(maxIdx, maxLen + maxIdx)
}