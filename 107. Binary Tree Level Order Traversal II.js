// Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

//           3
//          / \
//         9   20
//            /  \
//           15   7

//           a
//          / \
//         b   c
//            / \
//           d   e

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node(3)
const b = new Node(9)
const c = new Node(20)
const d = new Node(15)
const e = new Node(7)

a.left = b
a.right = c
c.left = d
c.right = e

var levelOrderBottom = function (root) {
  if (root == null) return []
  const queue = [root]
  const allRows = []

  while (queue.length > 0) {
    const currentRow = []

    const queueLength = queue.length
    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift()
      currentRow.push(node.val)

      if (node.left != null) queue.push(node.left)
      if (node.right != null) queue.push(node.right)
    }
    allRows.unshift(currentRow)
  }
  return allRows
}

console.log(levelOrderBottom(a))
