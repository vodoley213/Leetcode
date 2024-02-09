// Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
var missingNumber = function (nums) {
  const length = nums.length
  const fullNums = []
  for (let i = 0; i <= length; i++) {
    fullNums.push(i)
  }
  const newArray = [...nums, ...fullNums]
  let missingNumber = 0
  for (let number of newArray) {
    missingNumber ^= number
  }
  return missingNumber
}

missingNumber(nums)
