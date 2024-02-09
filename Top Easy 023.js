// Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example1
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example2
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example3
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const nums1 = [4, 5, 6, 0, 0, 0],
  m = 3,
  nums2 = [1, 2, 3],
  n = 3

var merge = function (nums1, m, nums2, n) {
  if (n === 0) {
    return
  }
  if (m === 0 && n === 1) {
    nums1[0] = nums2[0]
    return
  }

  let p1 = nums1.length - 1 - n //
  let p2 = nums1.length - 1
  let p3 = n - 1

  while (p3 >= 0 && p1 >= 0) {
    if (nums2[p3] >= nums1[p1]) {
      nums1[p2] = nums2[p3]
      p2--
      p3--
    } else {
      nums1[p2] = nums1[p1]
      nums1[p1] = 0
      p2--
      p1--
    }
  }
  if (p1 === -1) {
    while (p3 >= 0) {
      nums1[p2] = nums2[p3]
      p2--
      p3--
    }
  }
  console.log(nums1)
}

merge(nums1, m, nums2, n)
