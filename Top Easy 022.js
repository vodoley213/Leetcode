// Validate Binary Search Tree

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Input: root = [2, 1, 3]
// Output: true

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const a = new TreeNode(2)
const b = new TreeNode(1)
const c = new TreeNode(3)
// const d = new TreeNode(3)
// const e = new TreeNode(6)

a.left = b
a.right = c
// c.left = d
// c.right = e

var isValidBST = function (root) {
  if (root == null) return []
  const result = []
  const stack = [root]

  while (stack.length > 0) {
    const current = stack.pop()
    result.push(current.val)
    if (current.right) {
      if (current.val >= current.right.val) {
        console.log(
          'current.val: ',
          current.val,
          'current.right.val: ',
          current.right.val
        )
        return false
      }
      stack.push(current.right)
    }
    if (current.left) {
      if (current.val <= current.left.val) {
        console.log(
          'current.val: ',
          current.val,
          'current.left.val: ',
          current.right.val
        )
        return false
      }
      stack.push(current.left)
    }
  }
  return result
}

console.log(isValidBST(a))
