// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

//           1
//          / \
//         7   0
//        / \
//       7  -8

//           a
//          / \
//         b   c
//        / \
//       d   e

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node(1)
const b = new Node(7)
const c = new Node(0)
const d = new Node(7)
const e = new Node(-8)

a.left = b
a.right = c
b.left = d
b.right = e

var maxLevelSum = function (root) {
  if (root == null) return []

  const queue = [root]
  const allLines = []

  while (queue.length > 0) {
    const queueLength = queue.length
    let currentLine = 0
    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift()

      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
      currentLine += current.val
    }

    allLines.push(currentLine)
  }

  return allLines.indexOf(Math.max(...allLines)) + 1
}

console.log(maxLevelSum(a))
