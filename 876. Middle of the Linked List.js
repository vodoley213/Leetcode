// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)
// const f = new Node(6)
a.next = b
b.next = c
c.next = d
d.next = e
// e.next = f

// 1 -> 2 -> 3 -> 4 -> 5 ->
//          p1
//                     p2

var middleNode = function (head) {
  let pointer1 = head
  let pointer2 = head
  while (pointer2 != null && pointer2.next != null) {
    pointer1 = pointer1.next
    pointer2 = pointer2.next.next
  }

  return pointer1
}

console.log(middleNode(a))
