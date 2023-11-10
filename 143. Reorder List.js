// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Input: head = [1, 2, 3, 4]
// Output: [1, 4, 2, 3]

// Input: head = [1, 2, 3, 4, 5]
// Output: [1, 5, 2, 4, 3]

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
const f = new Node(6)
const g = new Node(7)
const h = new Node(8)
const i = new Node(9)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g
g.next = h
h.next = i

var reorderList = function (head) {
  if (head == null) return null
  if (head.next == null) return head

  let p1 = head
  let p1Tail = null
  let p2 = head
  let head2
  let center = null

  while (p2 != null && p2.next != null) {
    p1Tail = p1
    p1 = p1.next
    p2 = p2.next.next
  }

  p1Tail.next = null

  if (p2 !== null) {
    center = p1
    head2 = p1.next
    center.next = null
  } else {
    head2 = p1
  }

  head2 = reverseList(head2)

  // print(head)
  // console.log('--Tail head1: -')
  // console.log(p1Tail)
  // print(head2)
  // console.log('--Reodered--')

  const listReodered = zippingLists(head, head2, center)
  return listReodered
}

function reverseList(head) {
  let p1 = null
  let p2 = head
  while (p2 != null) {
    const p2nextBackup = p2.next
    p2.next = p1
    p1 = p2
    p2 = p2nextBackup
  }
  return p1
}

function zippingLists(head1, head2, center) {
  let tail = head1
  let p1 = head1.next
  let p2 = head2
  let count = 0

  while (p2 !== null) {
    if (count % 2 === 0) {
      tail.next = p2
      p2 = p2.next
    } else {
      tail.next = p1
      p1 = p1.next
    }
    tail = tail.next
    count++
  }

  if (center !== null) {
    tail.next = center
  }
  return head1
}

print(reorderList(a))

function print(node) {
  while (node != null) {
    console.log(node.val)
    node = node.next
  }
}
