// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let rowCount = matrix.length, colCount = matrix[0].length
    let dir = 0
    let l = 0, r = colCount - 1, t = 0, b = rowCount - 1, arr = []
    while (l <= r && t <= b) {
        if (dir === 0) {
            for (let i = l; i <= r; i++) {
                arr.push(matrix[t][i])
            }
            t++
            dir = 1
        } else if (dir === 1) {
            for (let i = t; i <= b; i++) {
                arr.push(matrix[i][r])
            }
            r--
            dir = 2
        } else if (dir === 2) {
            for (let i = r; i >= l; i--) {
                arr.push(matrix[b][i])
            }
            b--
            dir = 3
        } else if (dir === 3) {
            for (let i = b; i >= t; i--) {
                arr.push(matrix[i][l])
            }
            l++
            dir = 0
        }
    }
    return arr
};