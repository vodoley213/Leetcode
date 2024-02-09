// Fizz Buzz

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const answer = []

  for (let number =1; number <=n; number++) {
    if (number % 3 === 0 && number % 5 === 0) answer.push('FizzBuzz')
    else if (number % 3 === 0) answer.push('Fizz')
    else if (number % 5 === 0) answer.push('Buzz')
    else answer.push(number.toString())
  }
  return answer
}

console.log(fizzBuzz(15))
