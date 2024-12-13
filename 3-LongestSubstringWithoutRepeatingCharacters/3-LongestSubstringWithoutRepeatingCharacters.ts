// complexity = O(n*<alphabet size>) = O(n)

// const lengthOfLongestSubstring = (s: string): number => {
//     let startIdx = 0
//     let longuestSubstringLength = 0
//     while( startIdx + longuestSubstringLength < s.length) {
//         const substring = new Set()
//         let endIdx = startIdx
//         do {
//             const c = s.charAt(endIdx)
//             if (substring.has(c)) {
//                 break
//             }
//             substring.add(c)
//             endIdx++        
//         } while (endIdx < s.length)
//         startIdx++
//         longuestSubstringLength = Math.max(longuestSubstringLength, substring.size)
//     }
//     return longuestSubstringLength
// };


const lengthOfLongestSubstring = (s: string): number => {
    let startIdx = 0
    let longuestSubstringLength = 0
    const charMap = new Map<string, number>()

    // let's use startIdx, endIdx to keep track of the longuest substr seen so far
    for (let endIdx = 0; endIdx < s.length; endIdx++) {
        const c = s.charAt(endIdx)
        const previousCharIdx = charMap.get(c)
        
        // if the current char is part of the current substring
        // move the window start idx to the position next to the 
        // previous occurence
        if (previousCharIdx !== undefined && previousCharIdx >= startIdx) {
            startIdx = previousCharIdx + 1
        }
        charMap.set(c, endIdx)
        longuestSubstringLength = Math.max(longuestSubstringLength, endIdx - startIdx + 1)
    }
    return longuestSubstringLength
};