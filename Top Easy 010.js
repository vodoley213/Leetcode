// Valid Sudoku

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

board = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
  // Each row must contain the digits 1-9 without repetition.
  for (let row = 0; row < 9; row++) {
    const rowsWithNumbers = []

    for (let col = 0; col < 9; col++) {
      if (board[row][col] !== '.') rowsWithNumbers.push(+board[row][col])
    }
    const rowsSet = new Set(rowsWithNumbers)

    if (rowsWithNumbers.length !== rowsSet.size) return false
  }

  // Each column must contain the digits 1-9 without repetition.
  for (let col = 0; col < 9; col++) {
    const colsWithNumbers = []
    for (let row = 0; row < 9; row++) {
      if (board[row][col] !== '.') colsWithNumbers.push(+board[row][col])
    }
    const colsSet = new Set(colsWithNumbers)
    if (colsWithNumbers.length !== colsSet.size) return false
  }

  // Each column must contain the digits 1-9 without repetition.
  for (let boxStartRow = 0; boxStartRow < 9; boxStartRow = boxStartRow + 3) {
    for (let boxStartCol = 0; boxStartCol < 9; boxStartCol = boxStartCol + 3) {
      const boxWithNumbers = []
      for (let row = boxStartRow; row < boxStartRow + 3; row++) {
        for (let col = boxStartCol; col < boxStartCol + 3; col++) {
          if (board[row][col] !== '.') boxWithNumbers.push(+board[row][col])
        }
      }
    const boxSet = new Set(boxWithNumbers)
    if (boxWithNumbers.length !== boxSet.size) return false
    }
  }
  return true
}

console.log(isValidSudoku(board))
