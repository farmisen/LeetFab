// looking for the longest subarray with 2 different els

// const totalFruit = (fruits: number[]): number => {
//   if (fruits.length <= 1) {
//     return fruits.length
//   }

//   let result = 0
//   const baskets = new Set<number>()
//   let i = 0
//   while (i < fruits.length - 1) {
//     baskets.clear()

//     let j = i
//     let currentResult = 0
//     while (j < fruits.length) {
//       const f = fruits[j]
//       if (baskets.has(f)) {
//         currentResult++
//         j++
//         continue
//       }

//       if (baskets.size < 2) {
//         baskets.add(f)
//         currentResult++
//         j++
//         continue
//       }

//       break

//     }
//     result = Math.max(result, currentResult)
//     i++
//   }

//   return result
// }


// looking for the longest subarray with 2 different els

// const totalFruit = (fruits: number[]): number => {
//   if (fruits.length <= 1) {
//     return fruits.length
//   }

//   let result = 0
//   let kindOfFruitsSet = new Set<number>()
//   for (let i = 0; i < fruits.length; i++) {
//     kindOfFruitsSet.add(fruits[i])
//   }
//   let kindOfFruits = [...kindOfFruitsSet]
//   kindOfFruits.sort()

//   if (kindOfFruits.length < 3) {
//     return fruits.length
//   }

//   for (let f1 = 0; f1 < kindOfFruits.length - 1; f1++) {
//     for (let f2 = f1 + 1; f2 < kindOfFruits.length; f2++) {
//       let subArrayLen = 0
//       const choices = new Set<number>([kindOfFruits[f1], kindOfFruits[f2]])
//       for (let i = 0; i < fruits.length; i++) {
//         if (choices.has(fruits[i])) {
//           subArrayLen++
//           result = Math.max(subArrayLen, result)
//         } else {
//           subArrayLen = 0
//         }
//       }
//     }
//   }

//   return result
// }


const totalFruit = (fruits: number[]): number => {
  if (fruits.length <= 1) {
    return fruits.length
  }

  let result = 0
  let i = 0
  const pickedTypes = new Set<number>()
  let pickedCount = 0
  while (i < fruits.length) {
    const f = fruits[i]
    if (pickedTypes.has(f)) {
      i++
      pickedCount++
      result = Math.max(result, pickedCount)
      continue
    }

    if (pickedTypes.size < 2) {
      pickedTypes.add(f)
      i++
      pickedCount++
      result = Math.max(result, pickedCount)
      continue
    }

    pickedCount = 0
    pickedTypes.clear()
    if (i === fruits.length - 1) {
      break
    }
    let j = i - 1
    while (fruits[i - 1] === fruits[j]) {
      j--
    }
    i = j + 1

  }

  return result
}







