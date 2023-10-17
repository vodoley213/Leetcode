// Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.

// Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

// If no such second minimum value exists, output -1 instead.

//           2
//          / \
//         2   5
//            / \
//           5   7


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

const a = new Node(2)
const b = new Node(2)
const c = new Node(5)
const d = new Node(5)
const e = new Node(7)

a.left = b
a.right = c
c.left = d
c.right = e

var findSecondMinimumValue = function (root) {
  if (root == null) return -1
  const stack = [root]
  const min1 = root.val
  let min2 = Infinity

  while (stack.length > 0) {
    const currentNode = stack.pop()
    if (currentNode.val < min2 && currentNode.val > min1) min2 = currentNode.val
    if (currentNode.right !== null) stack.push(currentNode.right)
    if (currentNode.left !== null) stack.push(currentNode.left)
  }
  if (min2 === Infinity) return -1
  return min2
}

console.log(findSecondMinimumValue(a))
