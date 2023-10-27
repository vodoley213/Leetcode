// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

//           1
//          / \
//         2   3
//          \   \
//           5   4

//           a
//          / \
//         b   c
//          \   \
//           d   e

// class Node {
//   constructor(val) {
//     this.val = val
//     this.left = null
//     this.right = null
//   }
// }

// const a = new Node(1)
// const b = new Node(2)
// const c = new Node(3)
// const d = new Node(5)
// const e = new Node(4)

// a.left = b
// a.right = c
// b.right = d
// c.right = e

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

var rightSideView = function (root) {
  if (root == null) return []

  const allPaths = []
  dfs(root, [])
  return allPaths

  function dfs(root, currentPath) {
    currentPath.push(root.val)

    if (root.left == null && root.right == null) allPaths.push([...currentPath])
    if (root.right != null) dfs(root.right, currentPath)
    if (root.left != null) dfs(root.left, currentPath)

    currentPath.pop()
  }
}

var rightSideView1 = function (root) {
  if (root == null) return []
  let rightSideNodes = []
  dfs(root, 0)
  return rightSideNodes

  function dfs(node, level) {
    // if (!node) return
    rightSideNodes[level] = node.val
    if (node.left !=null) dfs(node.left, level + 1)
    if (node.right != null) dfs(node.right, level + 1)
  }
}

console.log(rightSideView1(a))
