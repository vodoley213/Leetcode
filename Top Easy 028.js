// Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V*            5
// X             10
// L*            50
// C             100
// D*            500
// M*            1000

// IV = 4
// IX = 9
// XL = 40
// XC = 90
// CD = 400
// CM = 900

// Input: s = "MCMXCIV" =>
// 1000
// 900
// 90
// 4

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  }
  const romanNumbers = []
  const instancesWhereSubtraction = /^(IV|IX|XL|XC|CD|CM)/
  const singleDigits = /^(V|L|D|M|I|X|C)/

  while (s.length > 0) {
    if (s.match(instancesWhereSubtraction)) {
      const numeral = s.match(instancesWhereSubtraction)
      romanNumbers.push(numeral[0])
      s = s.replace(numeral[0], '')
    } else if (s.match(singleDigits)) {
      const numeral = s.match(singleDigits)
      romanNumbers.push(numeral[0])
      s = s.replace(numeral[0], '')
    }
  }

  const number = romanNumbers.reduce((accum, item) => {
    return accum + values[item]
  }, 0)

  return number
}

romanToInt('MCMXCIV')
