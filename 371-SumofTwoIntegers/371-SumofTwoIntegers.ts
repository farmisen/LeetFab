const getSum = (a: number, b: number): number => {
  let unsignedB = Math.abs(b)
  while (unsignedB>0) {
    if (b > 0) {
      a++
    } else {
      a--
    }
    unsignedB--
  }
  return a
}