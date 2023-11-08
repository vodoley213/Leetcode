// You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

// For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

// Return the head of the modified linked list.

// 0 -> 3 -> 1 -> 0 -> 4 -> 5 -> 2 -> 0

// Input: head = [0,3,1,0,4,5,2,0]
// Output: [4,11]

class ListNode {
  constructor(val, next) {
    this.val = val
    this.next = null
  }
}

// const a = new ListNode(0)
// const b = new ListNode(3)
// const c = new ListNode(1)
// const d = new ListNode(0)
// const e = new ListNode(4)
// const f = new ListNode(5)
// const g = new ListNode(2)
// const h = new ListNode(0)

// a.next = b
// b.next = c
// c.next = d
// d.next = e
// e.next = f
// f.next = g
// g.next = h

// 0 -> 3 -> 1 -> 0 -> 4 -> 5 -> 2 -> 0

const a = new ListNode(0)
const b = new ListNode(1)
const c = new ListNode(0)
const d = new ListNode(3)
const e = new ListNode(0)
const f = new ListNode(2)
const g = new ListNode(2)
const h = new ListNode(0)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g
g.next = h

var mergeNodes = function (head) {
  let current = head.next
  let newHead
  let count = 0
  let newCurrent
  let sum = 0

  while (current != null) {
    if (current.val === 0) {
      if (count === 0) {
        newHead = new ListNode(sum)
        newCurrent = newHead
      } else {
        const node = new ListNode(sum)
        newCurrent.next = node
        newCurrent = node
      }
      sum = 0
      count++
    }
    sum = sum + current.val
    prev = current
    current = current.next
  }

  return newHead
}

// var mergeNodes = function (head) {
//   const newListArray = []
//   let current = head.next
//   let sum = 0

//   while (current != null) {
//     if (current.val === 0) {

//       const node = new ListNode(sum)
//       newListArray.push(node)

//       sum = 0
//     }
//     sum = sum + current.val
//     prev = current
//     current = current.next
//   }
//   const newList = newListArray[0]
//   for (let i=0; i< newListArray.length-1; i++) {
// newListArray[i].next = newListArray[i+1]
//   }

//   return newList
// }

function print(node) {
  console.log('Финальный лист:')
  while (node != null) {
    console.log(node)
    node = node.next
  }
}

const output = mergeNodes(a)
print(output)
