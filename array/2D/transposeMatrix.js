function transpose(matrix) {
    let obj = {}
    let returnArr = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j in obj) {
                obj[j].push(matrix[i][j])
            }
            else {
                obj[j] = new Array()
                obj[j].push(matrix[i][j])
            }

        }
    }
    return Object.values(obj)
}


let matrix = [[1, 2, 3], [4, 5, 6]]
console.log(transpose(matrix))