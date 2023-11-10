// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]
// Example 2:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [8,0,7]
// Example 3:

// Input: l1 = [0], l2 = [0]
// Output: [0]

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a1 = new Node(1)


// a1.next = b1
// b1.next = c1
// c1.next = d1

const a2 = new Node(9)
const b2 = new Node(9)
// const c2 = new Node(4)
// const d2 = new Node(4)

a2.next = b2
// b2.next = c2
// c2.next = d2

var addTwoNumbers = function (l1, l2) {
  if (l1.next == null && l1.val === 0) return l2
  if (l2.next == null && l2.val === 0) return l1
  const number1 = []
  const number2 = []

  let head1 = l1
  let head2 = l2

  // Создаем массивы со значениями val
  while (l1 !== null) {
    number1.push(l1.val)
    l1 = l1.next
  }

  while (l2 !== null) {
    number2.push(l2.val)
    l2 = l2.next
  }

    console.log('number1', number1)
    console.log('number2', number2)

  const resultArray = add(number1, number2)
  console.log(resultArray)

      console.log('number1', number1)
      console.log('number2', number2)

  let firstNode



  // Есть ли единица впереди, то создаем новый узел со значением 1
  if (resultArray.length > Math.max(number1.length, number2.length)) {
    firstNode = new Node(1)
    
  }

  // Формируем Linked list с результатом сложения
  if (number1.length >= number2.length) {
    if (firstNode) {
      firstNode.next = head1
      head1 = firstNode
    }
    l1 = head1
    for (i = 0; i < resultArray.length; i++) {
      l1.val = resultArray[i]
      l1 = l1.next
    }
    return head1
  } else {
    if (firstNode) {
      firstNode.next = head2
      head2 = firstNode
    }
    l2 = head2
    for (i = 0; i < resultArray.length; i++) {
      l2.val = resultArray[i]
      l2 = l2.next
    }
    return head2
  }
}

print(addTwoNumbers(a1, a2))

const e1 = [
  2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4,
  3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2,
  4, 3, 2, 4, 3, 2, 4, 3, 9,
]

const e2 = [
  5, 6, 4, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4,
  3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2, 4, 3, 2,
  4, 3, 2, 4, 3, 9, 9, 9, 9,
]

console.log(add(e1,e2))

function add(array1, array2) {
  arrayA = [...array1]
  arrayB = [...array2]
  const sum = []
  let increment = 0

  if (arrayA.length > arrayB.length) {
    const numbersOfZeros = arrayA.length - arrayB.length
    for (i = 1; i <= numbersOfZeros; i++) arrayB.unshift('0')
  } else {
    const numbersOfZeros = arrayB.length - arrayA.length
    for (i = 1; i <= numbersOfZeros; i++) arrayA.unshift('0')
  }

  for (let i = arrayA.length - 1; i >= 0; i--) {
    let razrad = +arrayA[i] + +arrayB[i] + increment

    if (razrad.toString().length > 1) {
      const razradArray = Array.from(razrad.toString())
      razradArray.shift()
      razrad = razradArray[0]
      increment = 1
    } else {
      increment = 0
    }
    sum.unshift(+razrad)
  }

  if (increment === 1) {
    sum.unshift(+increment)
  }
  return sum
}

function print(node) {
  while (node != null) {
    console.log(node.val)
    node = node.next
  }
}
