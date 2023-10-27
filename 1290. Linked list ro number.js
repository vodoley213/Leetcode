// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

// The most significant bit is at the head of the linked list.

// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a = new Node(1)
const b = new Node(0)
const c = new Node(1)
a.next = b
b.next = c

// 1 -> 0 -> 1

var getDecimalValue = function (head) {
  let output = ''
  while (head !== null) {
    output += head.val
    head = head.next
  }
  return parseInt(output, 2)
}

console.log(getDecimalValue(a))
