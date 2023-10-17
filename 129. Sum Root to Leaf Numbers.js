// You are given the root of a binary tree containing digits from 0 to 9 only.

// Each root-to-leaf path in the tree represents a number.

// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

// A leaf node is a node with no children.

//           1
//          / \
//         2   3

//           a
//          / \
//         b   c

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

a.left = b
a.right = c

//           4
//          / \
//         9   0
//        / \
//       5   1

//           a1
//          / \
//         b1   c1
//        / \
//       d1  e1

const a1 = new Node(4)
const b1 = new Node(9)
const c1 = new Node(0)
const d1 = new Node(5)
const e1 = new Node(1)

a1.left = b1
a1.right = c1
b1.left = d1
b1.right = e1

var sumNumbers = function (root) {
  let result = 0
  dfs(root, [])
  return result

  function dfs(root, currentArray) {
    if (root == null) return []

    currentArray.push(root.val)

    if (root.left == null && root.right == null) {
      const currentString = currentArray.join('')
      result += +currentString
    }
    dfs(root.left, currentArray)
    dfs(root.right, currentArray)
    currentArray.pop()
  }
}

// ***** Variant 2 *****
function sumNumbers1(root) {
  if (root == null) return 0
  
  let sum = 0
  dfs(root, '')
  return sum

  function dfs(node, num) {
    num += node.val
    if (node.left == null && node.right == null) sum += +num
    if (node.left) dfs(node.left, num)
    if (node.right) dfs(node.right, num)
  }
}

console.log(sumNumbers(a))
console.log(sumNumbers1(a1))
