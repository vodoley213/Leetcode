// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(2)
const d = new Node(2)
// const e = new Node(1)
// const f = new Node(1)
// const g = new Node(1)

a.next = b
b.next = c
c.next = d
// d.next = e
// e.next = f
// f.next = g
// 1 -> 2	-> 6	-> 3	->4	->5 -> 6

var removeElements = function (head, val) {
  while (head == null || head.val === val) {
    if (head == null) return null
    if (head.val === val) head = head.next
  }

  let prev = null
  let current = head
  while (current !== null) {
    if (current.val === val) {
      console.log('Есть совпадение!')
      console.log('PREV: ',prev.val)
      console.log('CURRENT: ', current.val)
      while (current.next?.val === val) current = current.next
      prev.next = current.next
      // 1 - 2 - 2 -1
      //     p   c
    }
    prev = current
    current = current.next
  }
  return head
}

const newList = removeElements(a, 2)

print(newList)

function print(node) {
  console.log('Финальный лист:')
  while (node != null) {
    console.log(node.val)
    node = node.next
  }
}
