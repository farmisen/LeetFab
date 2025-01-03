/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


const listLen = (l: ListNode): number => {
  let len = 0
  while (l) {
    len++
    l = l.next
  }
  return len
}

// const listIntoArray = (l: ListNode, listLen: number): number[] => {
//   const numArr = Array(listLen)
//   let idx = 0
//   while (l) {
//     numArr[listLen - idx - 1] = l.val
//     l = l.next
//     idx++
//   }
//   return numArr
// }


const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  // we go from right to left and use a carry over when the sum of the 2 
  //current nodes plus the current carry over is > 9
  // prolly easier to reverse the lists first, may be?
  // max counts of digits is <= 100, we can use arrays
  // can the number be of different length? 
  // need to figure out the len of each number first
  

  // let len1 = listLen(l1)
  // let len2 = listLen(l2)
  // let maxLen = Math.max(len1, len2)
  // const num1 = reverseListIntoArray(l1, len1 )
  // const num2 = reverseListIntoArray(l2, len2)
  // const result = Array(maxLen + 1).fill(undefined)

  // const num2 = Array.from({length: 101}, () => undefined)
  // console.log(len1, len2)
  // console.log(num1, num2)

  // let carry = 0
  // for (let i=0; i<maxLen; i++) {
  //   let sum = num1[i] + num2[i] + carry
  //   if (sum > 9) {
  //     sum -= 10
  //     carry = 1
  //   } else {
  //     carry = 0
  //   }
  //   result[i] = sum
  // }
  // if (carry !== 0) {
  //   result[maxLen] = 1
  // }

  let result = null
  let head = null
  let carry = 0
  while (l1 || l2 || carry === 1) {
    const num1 = l1 ? l1.val : 0
    const num2 = l2 ? l2.val : 0
    let sum = num1 + num2 + carry
    if (sum > 9) {
      sum -= 10
      carry = 1
    } else {
      carry = 0
    }

    
    const node = new ListNode(sum)
    if (result) {
      result.next = node
      result = result.next
    } else {
      result = node
      head = node
    }

    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }

  }

  return head
}