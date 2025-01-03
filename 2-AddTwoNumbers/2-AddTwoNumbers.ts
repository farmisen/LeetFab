const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
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