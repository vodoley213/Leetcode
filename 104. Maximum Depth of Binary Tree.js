// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
//     m

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

function maxDepth(root) {
  if (root == null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

console.log(maxDepth(a))
