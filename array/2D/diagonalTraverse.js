// Given an m x n matrix mat,
// return an array of all the elements of the array in a diagonal order.

// Example 1:
// Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,4,7,5,3,6,8,9]

// Example 2:
// Input: mat = [[1,2],[3,4]]
// Output: [1,2,3,4]

function diagonalTraverse(matrix) {
    let rowCount = matrix.length, colCount = matrix[0].length, row = 0, col = 0, res = [], up = true
    while (row < rowCount && col < colCount) {
        if (up) {
            while (row > 0 && col < colCount - 1) {
                res.push(matrix[row][col])
                row--
                col++
            }
            res.push(matrix[row][col])
            if (col == colCount - 1) row++
            else col++
        } else {
            while (row < rowCount - 1 && col > 0) {
                res.push(matrix[row][col])
                row++
                col--
            }
            res.push(matrix[row][col])
            if (row == rowCount - 1) col++
            else row++
        }
        up = !up
    }
    console.log(res)
}

let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
diagonalTraverse(mat)