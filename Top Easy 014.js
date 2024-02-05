// First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

/**
 * @param {string} s
 * @return {number}
 */

const s = "leetcode"
var firstUniqChar = function(s) {
    const array = [...s]
    for (let index = 0; index < s.length; index++){
      const symbol = s[index]
      if (s.indexOf(symbol) === s.lastIndexOf(symbol)) return index
    }
    return -1
};

console.log(firstUniqChar(s))