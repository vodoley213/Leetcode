//  Longest Common Prefix

//  Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
const strs = ['cir', 'car']
var longestCommonPrefix = function (strs) {
  const result = []
  for (let index = 0; index < strs[0].length; index++) {
    for (let str = 1; str < strs.length; str++) {
      if (strs[str][index] == null || strs[0][index] != strs[str][index]) {
        return result.join('')
      }
    }
    result.push(strs[0][index])
  }
  return result.join('')
}

console.log(longestCommonPrefix(strs))
