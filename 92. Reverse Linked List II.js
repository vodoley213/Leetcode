// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Input: (head = [1, 2, 3, 4, 5]), (left = 2), (right = 4)
// Output: [1, 4, 3, 2, 5]

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

a.next = b
b.next = c
c.next = d
d.next = e
// 1 -> 2 -> 3 -> 4 -> 5 -> Null
// 1 -> 4 -> 3 -> 2 -> 5 -> Null

function print(node) {
  while (node != null) {
    console.log(node.val)
    node = node.next
  }
}

print(a)

// var reverseBetween = function (head, left, right) {
//   if (head.next == null) return head

//   let headBackup = head
//   let p1 = null
//   let p2 = head

//   while (p2.val !== left) {
//     console.log(p1,p2)
//     p1 = p2
//     p2 = p2.next
//   }
//   const listCut1 = p1
//   const subListTail = p2

//   while (p1?.val != right) {
//     const p2nextBackup = p2.next
//     p2.next = p1
//     p1 = p2
//     p2 = p2nextBackup
//   }
//   if (listCut1 == null) {
//     headBackup = p1
//   } else {
//     listCut1.next = p1
//   }
//   subListTail.next = p2
//   return headBackup
// }

var reverseBetween = function (head, left, right) {
  if (head.next == null || left === right) return head

  let headBackup = head
  let p1 = null
  let p2 = head
  let position = 1

  while (position !== left) {
    p1 = p2
    p2 = p2.next
    position++
  }
  const listCut1 = p1
  const subListTail = p2

  while (position-1 != right) {
    const p2nextBackup = p2.next
    p2.next = p1
    p1 = p2
    p2 = p2nextBackup
    position++
  }

  if (listCut1 == null) {
    headBackup = p1
  } else {
    listCut1.next = p1
  }
  subListTail.next = p2
  return headBackup
}

const eee = reverseBetween(a, 1, 1)

console.log('-----------')

print(eee)
