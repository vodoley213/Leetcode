// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

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
// 1 -> 2 -> 3 -> 4 -> 5 ->

function print (node) {
  while(node !=null) {
    console.log(node.val)
    node = node.next
  }
}

print(a)

var reverseList = function (head) {
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

reverseList(a)

console.log('-----------')

print(e)

