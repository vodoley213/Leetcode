// Palindrome Linked List

// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Input: head = [1,2,2,1]
// Output: true

// Input: head = [1,2]
// Output: false

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**

 * @param {ListNode} head
 * @return {boolean}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const a = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(2)
const d = new ListNode(1)
// const e = new ListNode(5)

// const f = new ListNode(6)

// const g = new ListNode(7)
// const h = new ListNode(8)
// const k = new ListNode(9)
// const l = new ListNode(10)
// const m = new ListNode(11)

a.next = b
b.next = c
c.next = d
// d.next = e
// e.next = f
// f.next = g
// g.next = h
// h.next = k
// k.next = l
// l.next = m

// Input: head = [1,2,3,4,5,6,7,8,9,10,11]
var isPalindrome = function (head) {
  let p1Reverse
  let p2Slow = head
  p2Slow.prev = null
  let p3Fast = head
  let count = 0

  while (p3Fast.next != null && p3Fast.next.next != null) {
    p1Reverse = p2Slow
    p2Slow = p2Slow.next
    p2Slow.prev = p1Reverse

    p3Fast = p3Fast.next.next

    // console.log('Count: ', count, 'p2Slow: ', p2Slow, 'p3Fast: ', p3Fast)
    count++
  }

  let p4
  if (p3Fast.next == null) {
    p4 = p2Slow.prev
  } else {
    p4 = p2Slow
  }
  p2Slow = p2Slow.next

  while (p4 != null) {
    if (p4.val !== p2Slow.val) return false
    // console.log('Прямой ход ход:', p2Slow.val)
    // console.log('Обратный ход:', p4.val)
    p4 = p4.prev
    p2Slow = p2Slow.next
  }
  // console.log('*****************')
  // while (p2Slow != null) {
  //   console.log('Прямой ход ход:', p2Slow)
  //   p2Slow = p2Slow.next
  // }
  // return p1
  return true
}

console.log(isPalindrome(a))
