// Given the root of a binary tree, return the sum of values of its deepest leaves.

//           1
//          / \
//         2   3
//        /   / \
//       4   5   6
//      /         \
//     7           8

//           a
//          / \
//         b   c
//        /   / \
//       d   e   f
//      /         \
//     g           h

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)
const f = new Node(6)
const g = new Node(7)
const h = new Node(8)

a.left = b
a.right = c
b.left = d
c.left = e
c.right = f
d.left = g
f.right = h

// ***** Выводим все листы *****
var deepestLeavesSum1 = function (root) {
  const queue = [root]
  let sum = 0

  while (queue.length > 0) {
    const currentNode = queue.shift()
    if (currentNode.left == null && currentNode.right == null)
      console.log(currentNode.val)

    if (currentNode.left) queue.push(currentNode.left)
    if (currentNode.right) queue.push(currentNode.right)
  }
}

// *************************************************
// ***** Сумма листьеd самого глубокого уровня *****
// *************************************************

var deepestLeavesSum = function (root) {
  if (root == null) return 0
  if (root.left == null && root.right == null) return root.val

  let parent = [root]
  let children = []
  setChildren(root)

  while (children.length > 0) {
    parent = children
    children = []
    for (let i = 0; i < parent.length; i++) {
      setChildren(parent[i])
    }
    if (children.length === 0) {
      const sum = parent.reduce((sum, current) => sum + current.val, 0)
      return sum
    }
    parent = children
  }

  function setChildren(root) {
    if (root == null) return
    if (root.left !== null) children.push(root.left)
    if (root.right !== null) children.push(root.right)
  }
}

console.log(deepestLeavesSum(a))
