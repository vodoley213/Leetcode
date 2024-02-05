'use strict'
// Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
const s = 'A man, a plan, a canal: Panama'
var isPalindrome = function (s) {
  let string = s.toLowerCase()
  const regex = /[^a-z]/g
  const found = string.match(regex)

  console.log(Array.isArray(found))

  for (let char of found) string = string.replace(char, '')
  const string2 = [...string].reverse().join('')
  console.log(string)
  console.log(string2)
  if (string === string2) return true
  return false
}

console.log(isPalindrome(s))
