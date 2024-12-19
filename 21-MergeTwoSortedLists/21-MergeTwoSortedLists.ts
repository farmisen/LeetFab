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


const insertNode = (node: ListNode, list: ListNode) : ListNode => {
  // console.log("i0", node.val, "=>", list)
  if (node.val <= list.val) {
    node.next = list
    // console.log("i1: <=", node)
    return node
  }
  if (list.next) {
    // console.log("i2: ==", list)
    list.next = insertNode(node, list.next)
    // console.log("i3: ==", list)
  } else {
    // console.log("i4: ==", list)
    list.next = node
    node.next = null
    // console.log("i5: ==", list)
  }
  // console.log("i6: <=", list)
  return list
}

const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
  if (!list1 && list2) {
    return list2
  }

  if (list1 && !list2) {
    return list1
  }

  if (!list2 && !list1) {
    return null
  }
  
  let output = list1
  let input = list2
  
  while (input) {
    // console.log("1", input, output)
    const inputNext = input.next
    output = insertNode(input, output)
    input = inputNext
    // console.log("2", input, output)
    // console.log("----")
  }
  return output
};