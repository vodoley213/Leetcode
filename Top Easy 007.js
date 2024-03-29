// Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */

const digits = [9, 9, 9, 9]
var plusOne = function (digits) {
  let carry = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 < 10) {
      digits[i] = digits[i] + carry
      carry = 0
      break
    } else {
      digits[i] = 0
    }
  }
  if (carry === 1) digits.unshift(1)
  return digits
}

console.log(plusOne(digits))
