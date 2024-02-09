// Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
//          i=0  i=1   i=2      i=3         i=4

//   [1,3,3,1] // triangle[i-2]
// [1, 4,6,4, 1]  i\5

// Input: numRows = 1
// Output: [[1]]

/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function (numRows) {
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1, 1]]

  const triangle = [[1], [1, 1]]
  const lastElement = 1

  for (let i = 2; i < numRows; i++) {
    const row = [1]
    for (let j = 1; j < i; j++) {
      row.push(triangle[i - 1][j - 1] + triangle[i - 1][j])
    }
    row.push(lastElement)
    triangle.push(row)
  }
  return triangle
}

console.log(generate(1))
