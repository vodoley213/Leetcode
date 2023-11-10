// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Input: head = [1], n = 1
// Output: []

// Input: head = [1,2], n = 1
// Output: [1]

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a = new Node(1)
const b = new Node(2)
// const c = new Node(3)
// const d = new Node(4)
// const e = new Node(5)

a.next = b
// b.next = c
// c.next = d
// d.next = e

var removeNthFromEnd = function (head, n) {
  if (head.next == null) return null

  let p0 = null
  let p1 = null
  let p2 = head
  let count = 0
  while (p2 != null) {
    if (count === n) p1 = head

    count++
    if (p1 !== null) {
      p0 = p1
      p1 = p1.next
    }
    p2 = p2.next
  }

  if (p0 == null) return head.next

  p0.next = p1.next
  return head
}

print(removeNthFromEnd(a, 2))

function print(node) {
  while (node != null) {
    console.log(node.val)
    node = node.next
  }
}
