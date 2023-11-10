// Given the head of a linked list, return the list after sorting it in ascending order.

// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Input: head = []
// Output: []

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a = new Node(-1)
const b = new Node(5)
const c = new Node(3)
const d = new Node(4)
const e = new Node(0)

a.next = b
b.next = c
c.next = d
d.next = e

var sortList = function (head) {
  if (head == null) return null
  if (head.next == null) return head

  let pointer = head
  const listArray = []

  while (pointer !== null) {
    listArray.push(pointer.val)
    pointer = pointer.next
  }
  listArray.sort((a, b) => a - b)

  pointer = head

  for (i=0; i<listArray.length; i++) {
    pointer.val = listArray[i]
    pointer = pointer.next
  }
    
  return head
}

print(a)

print(sortList(a))

function print(node) {
  while (node != null) {
    console.log(node.val)
    node = node.next
  }
}
