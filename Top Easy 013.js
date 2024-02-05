// Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

/**
 * @param {number} x
 * @return {number}
 */
let x = 1534236469
var reverse = function (x) {
  const array = x.toString().split('')
  let minus = ''
  if (x < 0) {
    minus = '-'
    array.splice(0, 1)
  }
  if (array.at(-1) === '0') array.splice(-1, 1)

  const reversed = +`${minus}${array.reverse().join('')}`

  if (reversed > Math.pow(2, 31) - 1 || reversed < -Math.pow(2, 31)) return 0
  return reversed
}

console.log(reverse(x))
