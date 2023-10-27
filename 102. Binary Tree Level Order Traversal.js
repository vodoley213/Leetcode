// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

//           3
//          / \
//         9   20
//            / \
//           15  7

//           a
//          / \
//         b   c
//            / \
//           d  e

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

var levelOrder = function (root) {
  if (root == null) return []
  if (root.left == null && root.right == null) return [root]

  const allLines = [[root.val]]
  let parent = [root]
  let children = []
  let currentLine = []
  setChildren(root)

  while (children.length > 0) {
    allLines.push(currentLine)

    parent = children
    children = []
    currentLine = []
    for (let i = 0; i < parent.length; i++) {
      setChildren(parent[i])
    }

    parent = children
  }

  return allLines

  function setChildren(root) {
    if (root == null) return
    if (root.left !== null) {
      children.push(root.left)
      currentLine.push(root.left.val)
    }
    if (root.right !== null) {
      children.push(root.right)
      currentLine.push(root.right.val)
    }
  }
}

var levelOrder1 = function (root) {
  if (root == null) return []

  const queue = [root]
  const allLines = []

  while (queue.length > 0) {
    const currentLine = []
    for (let i = 0; i < queue.length; i++) {
      const current = queue.shift()
      currentLine.push(current.val)

      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }

    allLines.push(currentLine)
  }
  return allLines
}

console.log(levelOrder(a))
console.log(levelOrder1(a))
