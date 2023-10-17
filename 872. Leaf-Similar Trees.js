// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

//           3                 a
//         /   \             /   \
//        5     1           b     c
//       / \   / \         / \   / \
//      6   2  9  8       d   e  f  g
//         / \               / \
//        7   4             h   k

//           3                 a1
//         /   \             /   \
//        5     1           b1    c1
//       / \   / \         / \   / \
//      6   7  4  2       d1  e1 f1 g1
//               / \               / \
//              9   8             h1  k1

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node(3)
const b = new Node(5)
const c = new Node(1)
const d = new Node(6)
const e = new Node(2)
const f = new Node(9)
const g = new Node(8)
const h = new Node(7)
const k = new Node(4)

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g
e.left = h
e.right = k

const a1 = new Node(3)
const b1 = new Node(5)
const c1 = new Node(1)
const d1 = new Node(6)
const e1 = new Node(7)
const f1 = new Node(4)
const g1 = new Node(2)
const h1 = new Node(9)
const k1 = new Node(8)

a1.left = b1
a1.right = c1
b1.left = d1
b1.right = e1
c1.left = f1
c1.right = g1
g1.left = h1
g1.right = k1

var leafSimilar = function (root1, root2) {
  const root1Leaves = getLeaves(root1).toString()
  const root2Leaves = getLeaves(root2).toString()
  return root1Leaves === root2Leaves

  function getLeaves(root) {
    if (root == null) return []

    const stack = [root]
    const leaves = []

    while (stack.length > 0) {
      const currentNode = stack.pop()
      if (currentNode.left == null && currentNode.right == null)
        leaves.push(currentNode.val)
      if (currentNode.right !== null) stack.push(currentNode.right)
      if (currentNode.left !== null) stack.push(currentNode.left)
    }
    return leaves
  }
}

console.log(leafSimilar(a, a1))
