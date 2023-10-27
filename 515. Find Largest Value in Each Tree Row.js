// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

//           1
//          / \
//         3   2
//        / \   \
//       5   3   9

//           a
//          / \
//         b   c
//        / \   \
//       d   e   f

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node(1)
const b = new Node(3)
const c = new Node(2)
const d = new Node(5)
const e = new Node(3)
const f = new Node(9)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

var largestValues = function (root) {
  if (root == null) return []
  const allRows = []
  const queue = [root]

  while (queue.length > 0) {
    const currentRow = []
    const queueLength = queue.length

    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift()
      currentRow.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  allRows.push(Math.max(...currentRow))
  }
  return allRows
}

console.log(largestValues(a))
