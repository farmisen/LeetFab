const numSteps = (s: string): number => {
  // slice the string into an array, 
  // reverse it, 
  // shift to divide 
  // to add flip the bits until you reach a 0 


  const binary = s.split("").map((c) => c === "0" ? 0 : 1)
  binary.reverse()
  console.log(binary)

  let steps = 0
  while (binary.length !== 1) {
    steps++

    if (binary[0] === 0) {
      binary.shift()
    } else {
      let carry = 0
      let i = 0
      while (true) {
        const zeroDigit = binary[i] === 0  
        binary[i] = zeroDigit ? 1 : 0
        carry = zeroDigit ? 0 : 1
        i++
        if (zeroDigit || i === binary.length) {
          break
        }
       }
       if (carry) {
        binary.push(1)
       }
    }
  }


  return steps
}