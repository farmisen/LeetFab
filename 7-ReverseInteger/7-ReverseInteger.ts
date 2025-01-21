const reverse = (x: number): number => {
  const exp = 0x80000000/10
  let res = 0
  let sign = x > 0 ? 1 : -1
  x *= sign
  while (x > 0) {
    const d = x - Math.floor(x/10) * 10
    const val = sign === -1 ? d : 1 +d 
    if (res >= exp - Math.floor(val/10)) {
      return 0
    }
    x = Math.floor(x/10)
    res = res * 10 + d
  }

  return res * sign
};