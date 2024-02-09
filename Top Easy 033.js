// // Reverse Bits

// // Reverse bits of a given 32 bits unsigned integer.

// Example 1:
// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

// Example 2:
// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  const length = n.toString(2).length
  let n1 = n.toString(2)

  for (let i = 1; i <= 32 - length; i++) {
    n1 = `0${n1}`
  }

  n1 = [...n1].reverse().join('')
  const output = parseInt(n1, 2)
  return output
}

reverseBits(43261596)
