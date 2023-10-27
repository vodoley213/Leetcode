// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const list1 = new Node(1)
const list11 = new Node(2)
const list12 = new Node(3)
const list13 = new Node(4)
const list14 = new Node(6)
const list15 = new Node(8)

list1.next = list11
list11.next = list12
list12.next = list13
list13.next = list14
list14.next = list15
// 1	2	3	4	6	8

const list2 = new Node(1)
const list21 = new Node(1)
const list22 = new Node(2)
const list23 = new Node(2)
const list24 = new Node(3)
const list25 = new Node(4)
const list26 = new Node(4)
const list27 = new Node(5)
const list28 = new Node(6)
const list29 = new Node(7)
const list210 = new Node(8)
const list211 = new Node(8)
const list212 = new Node(9)
const list213 = new Node(10)
const list214 = new Node(11)

list2.next = list21
list21.next = list22
list22.next = list23
list23.next = list24
list24.next = list25
list25.next = list26
list26.next = list27
list27.next = list28
list28.next = list29
list29.next = list210
list210.next = list211
list211.next = list212
list212.next = list213
list213.next = list214
// 1	1	2	2	3	4	4	5	6	7	8	8	9	10	11


function print(node) {
  while (node != null) {
    console.log(node.val)
    node = node.next
  }
}

var mergeTwoLists = function (list1, list2) {
  if (list1 == null) return list2
  if (list2 == null) return list1

  let list, p1, p2
  if (list1.val <= list2.val) {
    list = list1
    p1 = list1.next
    p2 = list2
  } else {
    list = list2
    p2 = list2.next
    p1 = list1
  }
  const listHead = list

  while (p1 !== null && p2 !== null) {
    if (p1.val <= p2.val) {
      list.next = p1
      p1 = p1.next
    } else {
      list.next = p2
      p2 = p2.next
    }
    list = list.next
    
  }
  if (p1 !==null) list.next = p1
  if (p2 !==null) list.next = p2
  return listHead
}

