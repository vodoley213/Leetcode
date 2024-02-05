// Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Input: nums = [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

nums = [0, 1, 0, 0, 3, 0, 0, 12, 0, 15]
var moveZeroes = function (nums) {
  // if (nums.length <= 1) return nums

  // let curr = 0
  // let nonZero = 0
  // let temp
  // while (nums[nonZero] === 0) nonZero++ // Ищем следующий ненулевой элемент
  // console.log('first nonZero', nums[nonZero])

  // while (nums[curr] != null) {
  //   if (nums[curr] === 0 && curr > nonZero) {
  //     temp = nums[nonZero]
  //     nums[nonZero] = 0
  //     console.log('temp:', temp)
  //     nums[curr] = temp
  //     // nonZero++
  //     while (nums[nonZero] === 0) nonZero++
  //     // while (nums[nonZero] === 0) nonZero++
  //   }

  //   curr++
  // }
  // console.log(nums)
  let nonZeroindex = 0

  for (let curr = 0; curr < nums.length; curr++) {
    if (nums[curr] != 0) {
      nums[nonZeroindex] = nums[curr]
      nonZeroindex++
    }
  }

  for (let i = nonZeroindex; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
}

console.log(moveZeroes(nums))
