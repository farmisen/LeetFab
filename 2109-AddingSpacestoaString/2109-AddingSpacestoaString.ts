// const addSpaces = (s: string, spaces: number[]): string => {
//     let newStr = s  
//     spaces.forEach( (idx:number, offset: number) => {
//         newStr = `${newStr.slice(0, idx + offset)} ${newStr.slice(idx + offset)}`
//         offset++
//     })
//     return newStr
// };


// const addSpacesRec = (str: string, spaces: number[], offset = 0): string => {
//         if (spaces.length == 0) {
//             return str
//         }

//         const [idx, ...rest] = spaces
//         const newStr = `${str.slice(0, idx + offset)} ${str.slice(idx + offset)}`
//         return addSpacesRec(newStr, rest, offset + 1)
//     }


// const addSpaces = (s: string, spaces: number[]): string => addSpacesRec(s, spaces)


const addSpaces = (s: string, spaces: number[]): string => {

    let spacesIdx = 0
    const res = []

    for (let idx=0; idx<s.length; idx++ ) {
        if (spaces[spacesIdx] == idx) {
            res.push(" ")
            spacesIdx++
        }
        res.push(s.charAt(idx))
        
    }

    return res.join("")
};