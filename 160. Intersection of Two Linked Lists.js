// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a1 = new Node(4)
const b1 = new Node(1)
const c1 = new Node(8)
const d1 = new Node(4)
const e1 = new Node(5)

a1.next = b1
b1.next = c1
c1.next = d1
d1.next = e1

const a2 = new Node(5)
const b2 = new Node(6)
const c2 = new Node(1)
const d2 = new Node(8)
const e2 = new Node(4)
const f2 = new Node(5)

b2.next = c2
a2.next = b2
c2.next = d2
d2.next = e2
d2.next = e2

var getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) return null

  let pointer = headA

  while (pointer !== null) {
    pointer.visited = true
    pointer = pointer.next
  }

  pointer = headB

  while (pointer !==null) {
    if (pointer.visited) return pointer
    pointer = pointer.next
  }
  return null
}
console.log(getIntersectionNode(a1, b1))

// print(a1)
// console.log('-----')
// print(a2)

function print(node) {
  while (node != null) {
    console.log(node.val)
    if (node.visited) console.log(node.visited)
    node = node.next
  }
}


