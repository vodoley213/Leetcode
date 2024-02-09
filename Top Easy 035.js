// Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const REGEX = [/\[\]/, /\(\)/, /\{\}/]

  if (s.length % 2 !== 0) return false

  while (s.length > 0) {
    for (let i = 0; i < 3; i++) {
      const isNull = REGEX.every(brackets => s.match(brackets) == null)
      if (isNull && s.length > 0) return false

      s = s.replace(REGEX[i], '')
    }
  }
  return true
}
