/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
  this.nums
  this.backupNums = [...nums]
}

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  for (let i = 0; i < this.nums.length; i++) {
    this.nums[i] = this.backupNums[i]
  }
}

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  for (let i = this.nums.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))

    ;[this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]]
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

var obj = new Solution([1, 2, 3])

console.log(obj)
obj.shuffle()
console.log(obj)
obj.reset()
console.log(obj)
