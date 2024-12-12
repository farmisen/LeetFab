const reorderSpaces = (text: string): string => {
    const spacesCount = text.replaceAll(/\S/g, "").length
    const words = text.split(/\s+/g).filter(w => w)
    const result = []
    if ( words.length == 1 ) {
        result.push(words[0])
        result.push(" ".repeat(spacesCount))
    } else {
        const inBetweenSpacesCount = Math.floor(spacesCount  / (words.length - 1))
        const inBetweenSpaces = " ".repeat(inBetweenSpacesCount)
        words.forEach( (w, i) => {
            result.push(w)
            if ( i < words.length - 1) {
                result.push(inBetweenSpaces)
            }
        })
        result.push(" ".repeat(spacesCount - (inBetweenSpacesCount * (words.length - 1))))
    }

    return result.join("")
};