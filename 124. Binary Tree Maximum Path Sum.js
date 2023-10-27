// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

//          -10
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

var maxPathSum = function (root) {
  let maxSum = -Infinity
  dfs(root)
  return maxSum

  function dfs(root) {
    if (root == null) return 0

    const leftSide = Math.max(dfs(root.left), 0) // Не плюсуем отрицательные значения
    const rightSide = Math.max(dfs(root.right), 0) // Не плюсуем отрицательные значения
    maxSum = Math.max(leftSide + rightSide + root.val, maxSum)

    return root.val + Math.max(leftSide, rightSide)
  }
}

var maxPathSum1 = function (root) {
  let maxSum = -Infinity
  dfs(root)
  return maxSum

  function dfs(root) {
    if (root == null) return 0

    const leftSide = Math.max(dfs(root.left), 0) // Не плюсуем отрицательные значения
    const rightSide = Math.max(dfs(root.right), 0) // Не плюсуем отрицательные значения
    maxSum = Math.max(leftSide + rightSide + root.val, maxSum)

    return root.val + Math.max(leftSide, rightSide)
  }
}

console.log(maxPathSum1(a))
