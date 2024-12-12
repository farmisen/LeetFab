
const wordBreakRec = (str: string, wordDict: string[], strIdx = 0, memo: boolean[] = [] ): boolean => {
    // return true if no more words to break
    if (strIdx === str.length) {
        return true
    }

    if (memo[strIdx] !== undefined) {
        return memo[strIdx]
    }

    // for each word in the dic
    for (let word of wordDict) {
        const wordLen = word.length
        // if str starts with that word
        if (str.startsWith(word, strIdx)) {
            // returns true if recursed call w/ incremented strIdx by word len returns true
            if (wordBreakRec(str, wordDict, strIdx + wordLen, memo)) {
                memo[strIdx] = true
                return true
            }
        }
    }

    // return false if no word match at current idx
    memo[strIdx] = false
    return false
};


const wordBreak = (s: string, wordDict: string[]): boolean => wordBreakRec(s, wordDict)