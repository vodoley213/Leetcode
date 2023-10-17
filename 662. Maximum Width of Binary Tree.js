// Given the root of a binary tree, return the maximum width of the given tree.

// The maximum width of a tree is the maximum width among all levels.

// The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

// It is guaranteed that the answer will in the range of a 32-bit signed integer.

//           5
//          / \
//         4   8
//        /   / \
//       11  13  4
//      /  \    / \
//     7    2  5   1
//    /
//   12
//    \
//     6

//           a
//          / \
//         b   c
//        /   / \
//       d   e   f
//      /  \    / \
//     g    h  k   l
//    /
//   m
//    \
//     n

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node(5)
const b = new Node(4)
const c = new Node(8)
const d = new Node(11)
const e = new Node(13)
const f = new Node(4)
const g = new Node(7)
const h = new Node(2)
const k = new Node(5)
const l = new Node(1)
const m = new Node(12)
const n = new Node(6)

a.left = b
a.right = c
b.left = d
c.left = e
c.right = f
d.left = g
d.right = h
f.left = k
f.right = l
g.left = m
m.right = n

var widthOfBinaryTree = function (root) {
  if (root == null) return 0
  if (root.left == null && root.right == null) return 1

  let maxWidth = 1
  root.idx = 0
  let parent = [root]
  let children = []
  setChildren(root)

  while (children.length > 0) {
    const lineWidth = children[children.length - 1]?.idx - children[0]?.idx + 1
    if (maxWidth < lineWidth) maxWidth = lineWidth

    parent = children
    children = []
    for (let i = 0; i < parent.length; i++) {
      setChildren(parent[i])
    }

    parent = children
  }
  return maxWidth

  function setChildren(root) {
    if (root == null) return
    if (root.left !== null) {
      root.left.idx = root.idx * 2
      children.push(root.left)
    }
    if (root.right !== null) {
      root.right.idx = root.idx * 2 + 1
      children.push(root.right)
    }
  }
}

console.log(widthOfBinaryTree(a))
