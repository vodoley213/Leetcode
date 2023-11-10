// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

// Input: head = [1,1,1,2,3]
// Output: [2,3]

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// const a = new Node(1)
// const b = new Node(2)
// const c = new Node(3)
// const d = new Node(3)
// const e = new Node(4)
// const f = new Node(4)
// const g = new Node(5)

// a.next = b
// b.next = c
// c.next = d
// d.next = e
// e.next = f
// f.next = g

// const a = new Node(1)
// const b = new Node(2)
// const c = new Node(2)
// const d = new Node(2)
// const e = new Node(2)
// const f = new Node(2)
// const g = new Node(2)

// a.next = b
// b.next = c
// c.next = d
// d.next = e
// e.next = f
// f.next = g

const a = new Node(1)
const b = new Node(1)
const c = new Node(2)
const d = new Node(2)

a.next = b
b.next = c
c.next = d

var deleteDuplicates = function (head) {
  if (head == null) return null
  if (head.next == null) return head
  if (head.val === head.next.val && head.next.next == null) return null

  let dublicates = false
  let p1tail = null
  let p1 = head
  let p2 = head.next

  while (p2 !== null) {
    if (p1.val !== p2.val) {
      p1tail = p1
      p1 = p1.next
      p2 = p2.next
    } else {
      dublicates = true
      p2 = p2.next
    }

    if (dublicates && p2 == null) {
      if (p1tail == null) {
        return null
      } else {
        p1tail.next = null
      }
      return head
    }
    if (dublicates && p1.val !== p2.val) {
      if (p1tail == null) {
        head = p2
      } else {
        p1tail.next = p2
      }
      p1 = p2
      p2 = p2.next
      dublicates = false
    }
  }
  return head
}

print(deleteDuplicates(a))

function print(node) {
  while (node != null) {
    console.log(node.val)
    node = node.next
  }
}

// print(a)
