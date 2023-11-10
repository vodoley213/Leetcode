class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

let a1 = new Node(1)
let b1 = new Node(3)
let c1 = new Node(5)
let d1 = new Node(7)
let e1 = new Node(9)
let f1 = new Node(11)

a1.next = b1
b1.next = c1
c1.next = d1
d1.next = e1
e1.next = f1

let a2 = new Node(2)
let b2 = new Node(4)
let c2 = new Node(6)
let d2 = new Node(8)

a2.next = b2
b2.next = c2
c2.next = d2

// print(a1)
// print(a2)

function zippingLists(head1, head2) {
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
  return head1
}

console.log('-------')
print(zippingLists(a1, a2))

function print(node) {
  while (node != null) {
    console.log(node.val)
    node = node.next
  }
}
