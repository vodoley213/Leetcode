// Rotate Array

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nums = [1, 2, 3, 4, 5, 6]
const k = 1

var rotate = function (nums, k) {
  k = k % nums.length
  const length = nums.length // 6
  const lengthOfEnd = nums.length - k // 5

  const newStart = nums.slice(length - k)
  for (let i = length - 1; i >= length - lengthOfEnd; i--) {
    //i=5; >= 4
    nums[i] = nums[i - k]
  }
  for (let i = 0; i < k; i++) {
    nums[i] = newStart[i]
  }
}

console.log(rotate(nums, k))
