// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

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

function binaryTreePaths(root) {
  const result = []
  dfs(root, [])
  return result

  function dfs(root, currentArray) {
    if (root == null) return []

    currentArray.push(root.val)

    if (root.left == null && root.right == null) {
      const currentString = currentArray.join('->')
      result.push(currentString)
    }
    dfs(root.left, currentArray)
    dfs(root.right, currentArray)
    currentArray.pop()
  }
}

console.log(binaryTreePaths(a))
