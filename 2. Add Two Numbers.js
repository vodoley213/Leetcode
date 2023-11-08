// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a1 = new Node(1)
const b1 = new Node(0)
const c1 = new Node(0)
const d1 = new Node(0)
const e1 = new Node(0)
const f1 = new Node(0)
const g1 = new Node(0)
const h1 = new Node(1)

a1.next = b1
b1.next = c1
c1.next = d1
d1.next = e1
e1.next = f1
f1.next = g1
g1.next = h1

const a2 = new Node(5)
const b2 = new Node(6)
const c2 = new Node(4)

a2.next = b2
b2.next = c2

// 1 -> 0 -> 0 -> 0 -> 0 -> 0 -> 0 -> 1
// 5 -> 6 -> 4

// 7 -> 0 -> 4 -> 0 -> 1

// addTwoNumbers(a1,a2)

// var addTwoNumbers = function (l1, l2) {
//   let number1 = ''
//   let number2 = ''

//   while (l1 !== null) {
//     number1 += l1.val
//     l1 = l1.next
//   }

//   while (l2 !== null) {
//     number2 += l2.val
//     l2 = l2.next
//   }

//   number1 = Number(number1.split('').reverse().join(''))
//   number2 = Number(number2.split('').reverse().join(''))

//   const numberRes = (number1 + number2).toString().split('').reverse()

//     console.log(number1)
//     console.log(number2)
//     console.log(numberRes)

//   const l3Head = new Node(numberRes[0])
//   let l3 = l3Head

//   for (let i = 1; i < numberRes.length; i++) {
//     l3.next = new Node(+numberRes[i])
//     l3 = l3.next
//   }

//   return l3Head
// }

var addTwoNumbers = function (l1, l2) {
  let curry = 0
  let count = 0

  let l3head, l3

  while (l1 !== null || l2 !== null) {
    const digit1 = l1 ? l1.val : 0
    const digit2 = l2 ? l2.val : 0
    let sum = digit1 + digit2 + curry

    if (sum > 9) {
      sum = sum - 10
      curry = 1
    } else {
      curry = 0
    }

    if (count === 0) {
      l3head = new Node(sum)
      l3 = l3head
    } else {
      l3.next = new Node(sum)
    }

    if (l1 !== null) l1 = l1.next
    if (l2 !== null) l2 = l2.next
    if (count !== 0) l3 = l3.next
    count++
  }

  if (curry === 1) l3.next = new Node(curry)
  return l3head
}

console.log(addTwoNumbers(a1, a2))

function print(node) {
  while (node != null) {
    console.log(node.val)
    node = node.next
  }
}
