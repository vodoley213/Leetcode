// Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const nums1 = [1, 2, 2, 1,2]
const nums2 = [2, 2]

var intersect = function (nums1, nums2) {
  const hashMap = {}
  const intersection = []
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] in hashMap) {
      hashMap[nums1[i]]++
    } else hashMap[nums1[i]] = 1
  }

  for (let i=0; i<nums2.length; i++){
    if (nums2[i] in hashMap && hashMap[nums2[i]] > 0) {
      intersection.push(nums2[i])
      hashMap[nums2[i]]--
    }
  }

  return intersection
}

intersect(nums1, nums2)
