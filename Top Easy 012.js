// Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Input: s = ['h', 'e', 'l', 'l', 'o']
// Output: ['o', 'l', 'l', 'e', 'h']

// Input: s = ['H', 'a', 'n', 'n', 'a', 'h']
// Output: ['h', 'a', 'n', 'n', 'a', 'H']

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

Input: s = ['h', 'e', 'l', 'l', 'o']
var reverseString = function (s) {
  let index1 = 0
  let index2 = s.length - 1


  while (index1 < index2) {
    let temp
    temp = s[index2]
    s[index2] = s[index1]
    s[index1] = temp
    index1++
    index2--
      console.log(index1, index2)
  }
  return s
}

console.log(reverseString(s))
