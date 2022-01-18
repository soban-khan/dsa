function task(matrix) {
    let ans = []
    let set = new Set()
    for (let i = 0; i < matrix.length; i++) {
        let min = matrix[i][0]
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) min = matrix[i][j]
        }
        set.add(min)
    }

    for (let j = 0; j < matrix[0].length; j++) {
        let max = matrix[0][j]
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][j] > max) max = matrix[i][j]
        }
        if (set.has(max)) ans.push(max)
        // set.add(min)
    }

    return ans
}

console.log(task([[20, 5, 15], [14, 54, 9], [60, 45, 32]]))