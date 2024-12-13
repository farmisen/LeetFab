// complexity = O(n*<alphabet size>) = O(n)

const lengthOfLongestSubstring = (s: string): number => {
    let startIdx = 0
    let longuestSubstringLength = 0
    while( startIdx + longuestSubstringLength < s.length) {
        const substring = new Set()
        let endIdx = startIdx
        do {
            const c = s.charAt(endIdx)
            if (substring.has(c)) {
                break
            }
            substring.add(c)
            endIdx++        
        } while (endIdx < s.length)
        startIdx++
        longuestSubstringLength = Math.max(longuestSubstringLength, substring.size)
    }
    return longuestSubstringLength
};