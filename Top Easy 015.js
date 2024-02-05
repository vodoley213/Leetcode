// Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const s = 'rat'
const t = 'car'
var isAnagram = function (s, t) {
  const table = {}
  for (let char of s) {
    if (char in table) {
      table[char]++
    } else {
      table[char] = 1
    }
  }

  for (let char of t) {
    if (char in table) {
      table[char]--
    } else {
      return false
    }
  }

  for (i in table) {
    if (table[i] !== 0) return false
  }
  return true
}

console.log(isAnagram(s, t))
