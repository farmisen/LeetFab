// // Complexity O(n^2)


// const longestPalindrome = (s: string): string => {

//   const strLen = s.length

//   if (strLen === 0) {
//     return ""
//   }

//   if (strLen === 1) {
//     return s
//   }

//   // if palCache[i][j] is true then the substring starting at i and ending at j is a palidrome
//   const isPal: boolean[][] = Array.from({ length: strLen }, () => Array.from({ length: strLen }, () => false))

//   let startIdx = 0
//   let maxLen = 1

//   for (let i = 0; i < strLen; i++) {
//     isPal[i][i] = true
//   }

//   for (let i = 0; i < strLen - 1; i++) {
//     if (s[i] === s[i + 1]) {
//       isPal[i][i + 1] = true
//       startIdx = i
//       maxLen = 2
//     }
//   }


//   for (let len = 3; len <= strLen; len++) {
//     for (let i = 0; i < strLen - len + 1; i++) {
//       const j = i + len - 1
//       if (s[i] === s[j] && isPal[i + 1][j - 1] === true) {
//         isPal[i][j] = true
//         maxLen = len
//         startIdx = i
//       }
//     }
//   }


//   return s.slice(startIdx, maxLen + startIdx)
// }

const longestPalindrome = (s: string): string => {

  const strLen = s.length

  if (strLen === 0) {
    return ""
  }

  if (strLen === 1) {
    return s
  }


  // trying something new
  // iterating from 0 to strLen - 1 and trying to grow pal 

  let maxLen = 1
  let startIdx = 0

  for (let i = 0; i < strLen - 1; i++) {

    // lookup palidromes of odd len
    let l = i
    let r = i
    while (l > 0 && r < strLen - 1 && s[l - 1] === s[r + 1]) {
      l--
      r++
    }
    if (r - l + 1 > maxLen) {
      maxLen = r - l + 1
      startIdx = l
    }

    // lookup palidromes of even len
    if (i < strLen - 1 && s[i] === s[i + 1]) {
      l = i
      r = i + 1
      while (l > 0 && r < strLen - 1 && s[l - 1] === s[r + 1]) {
        l--
        r++
      }
      if (r - l + 1 > maxLen) {
        maxLen = r - l + 1
        startIdx = l
      }

    }
  }


  return s.slice(startIdx, maxLen + startIdx)
}