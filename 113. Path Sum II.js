// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

// A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

//           5
//          / \
//         4   8
//        /   / \
//       11  13  4
//      /  \    / \
//     7    2  5   1
//           a
//          / \
//         b   c
//        /   / \
//       d   e   f
//      /  \    / \
//     g    h  k   l

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
//Output: [[5,4,11,2],[5,8,4,5]]

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

a.left = b
a.right = c
b.left = d
c.left = e
c.right = f
d.left = g
d.right = h
f.left = k
f.right = l

// const a = new Node(5)
// const b = new Node(2)
// const c = new Node(-1)
// const d = new Node(5)
// const e = new Node(6)
// const f = new Node(8)

// a.left = b
// a.right = c
// b.left = d
// b.right = e
// c.right = f

// const pathSum = function (root, targetSum) {
//   if (root == null) return []

//   if (root.val === targetSum && root.left == null && root.right == null)
//     return [[root.val]]

//   console.log('********', root.val, '********')

//   const left = pathSum(root.left, targetSum - root.val)
//   const right = pathSum(root.right, targetSum - root.val)

//   for (let i = 0; i < left.length; i++) {
//     console.log('left ', root.val)
//     left[i].unshift(root.val)
//   }
//   for (let i = 0; i < right.length; i++) {
//     console.log('right ', root.val)
//     right[i].unshift(root.val)
//   }

//   return [...left, ...right]
// }

const pathSum = function (root, targetSum) {
  const result = []
  dfs(root, 0, [])
  return result

  function dfs(root, currentSum, currentArray) {
    if (root == null) return []

    currentSum += root.val
    currentArray.push(root.val)

    if (root.left == null && root.right == null && currentSum === targetSum) {
      result.push([...currentArray])
    }
    dfs(root.left, currentSum, currentArray)
    dfs(root.right, currentSum, currentArray)
    currentArray.pop()
  }
}

// const pathSum = function (root, targetSum) {
//   if (root === null) return []

//   const result = []
//   const branch = []
//   let sumOfBranch = 0
//   const stack = [root]

//   while (stack.length > 0) {
//     const current = stack.pop()
//     branch.push(current.val)
//     sumOfBranch += current.val

//     console.log(sumOfBranch, branch)

//     if (
//       sumOfBranch === targetSum &&
//       current.right == null &&
//       current.left == null
//     ) {
//       result.push([...branch])
//       const lastValInBranch = branch.pop()
//       sumOfBranch = sumOfBranch - lastValInBranch
//       continue
//     }

//     if (current.right == null && current.left == null) {
//       const lastValInBranch = branch.pop()
//       sumOfBranch = sumOfBranch - lastValInBranch
//       continue
//     }

//     if (current.right) stack.push(current.right)
//     if (current.left) stack.push(current.left)
//   }
//   return result
// }

console.log(pathSum(a, 22))
