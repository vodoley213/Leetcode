// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
const nums = [
  3, 3, 4, 7, 435, 3, 77, 6, 78, 68, 10, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65,
  684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684,
  5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68,
  999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999,
  645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645,
  965, 125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965,
  125, 65, 684, 5, 68, 999, 645, 965, 125, 65, 684, 5, 68, 999, 645, 965, 125,
  65, 10, 70, 98,
]
const target = 77

var twoSum = function (nums, target) {
  const set = {}
  let numberToFind

  for (let i = 0; i < nums.length; i++) {
    numberToFind = target - nums[i]

    if (set[numberToFind] != null) {
      return [i, set[numberToFind]]
    } else {
      set[nums[i]] = i
    }
  }
}

function twoSumDirect(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
}

console.log(twoSum(nums, target))
console.log(twoSumDirect(nums, target))

console.time('Время работы алгоритма с кешем')
for (let i = 1; i <= 900000; i++) twoSum(nums, target)
console.timeEnd('Время работы алгоритма с кешем')
// 869.179 sec

console.time('Время работы директ алгоритма')
for (let i = 1; i <= 900000; i++) twoSumDirect(nums, target)
console.timeEnd('Время работы директ алгоритма')
// 73.847 sec (в 11.7 раз быстрее)