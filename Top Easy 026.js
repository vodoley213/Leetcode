// Count Primes

// Given an integer n, return the number of prime numbers that are strictly less than n.

// Example 1:
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Example 2:
// Input: n = 0
// Output: 0

// Example 3:
// Input: n = 1
// Output: 0

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n <= 2) return 0
  if (n === 3) return 1

  //   Пусть A — булевый массив, индексируемый числами от 2 до n,
  // изначально заполненный значениями true.
  const A = new Array(n + 1).fill(true)
  if (n <= 2) {
    return 0
  }

  let primes = []
  let count = 0

  for (i = 2; i < n; i++) {
    primes[i] = true
  }

  for (i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i]) {
      for (j = i + i; j < n; j += i) primes[j] = false
    }
  }

  for (i = 2; i < n; i++) if (primes[i]) count++

  return count

  //  для i = 2, 3, 4, ..., пока i2 ≤ n:
  //   если A[i] = true:
  //     для j = i2, i2 + i, i2 + 2i, ..., пока j ≤ n:
  //       назначить A[j] := false

  //  возвращаем: все числа i, для которых A[i] = true.
}

console.log(countPrimes(5))
