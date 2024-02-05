// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [2, 7, 11, 15]
const target = 9

var twoSum = function (nums, target) {
  const map = nums.map((element, index) => {
    return { index: index, value: element }
  })

  map.sort((a, b) => a.value - b.value)

  // sortedArr = nums.sort((a, b) => a - b)
  let index1 = 0
  let index2 = nums.length - 1
  // console.log(index1)
  // console.log(index2)
  // console.log(nums)

  while (index1 !== index2) {
    const sum = map[index1].value + map[index2].value
    if (sum === target) return [map[index1].index, map[index2].index]
    if (sum > target) {
      index2--
    } else {
      index1++
    }
  }
}

console.log(twoSum(nums, target))
