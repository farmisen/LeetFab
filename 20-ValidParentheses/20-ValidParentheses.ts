const complement = {
  "(": ")",
  ")": "(",
  "[": "]",
  "]": "[",
  "{": "}",
  "}": "{",
}

const opening = new Set<string>(["(", "[", "{"])


const isValid = (s: string): boolean => {
  const stack = Array<string>()

  for (let i=0; i<s.length; i++) {
    const cur = s[i]
    const top = stack[stack.length - 1]
    if (cur === complement[top]) {
      stack.pop()
      continue
    } 

    if (opening.has(cur)) {
      stack.push(cur)
    } else {
      return false
    }

  }


  return stack.length === 0
};