// Write a program to find all matrix elements which are minimum in their row
// and minimum in their column.

function minInRow(matrix) {
    let rowMin = {}
    for (let i = 0; i < matrix.length; i++) {
        let min = matrix[i][0]
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) min = matrix[i][j]
        }
        rowMin[i + 1] = min
    }
    return rowMin
}

function minInColumn(matrix) {
    let columnMin = {}
    for (let j = 0; j < matrix[0].length; j++) {
        let min = matrix[0][j]
        for (let i = j; i < matrix.length; i++) {
            if (matrix[i][j] < min) min = matrix[i][j]
        }
        columnMin[j + 1] = min
    }
    return columnMin
}

console.log(minInRow([[20, 5, 15], [14, 54, 9], [60, 45, 32]]))

console.log(minInColumn([[20, 5, 15], [14, 54, 9], [60, 45, 32]]))