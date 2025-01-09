const prefixCount = (words: string[], pref: string): number => {
    return words.filter( w => w.startsWith(pref)).length
};