const n = 7
const m = 3

var uniquePaths = function (m, n) {
const variants = Array.from(new Array(m), () => new Array(n))

for (let i = 0; i < n; i++) variants[0][i] = 1
for (let j = 0; j < m; j++) variants[j][0] = 1

for (let i = 1; i < m; i++) {
  for (let j = 1; j < n; j++) {
    variants[i][j] = variants[i][j - 1] + variants[i - 1][j]
  }
}
return variants[m-1][n-1]
}



console.log(uniquePaths(m,n))
