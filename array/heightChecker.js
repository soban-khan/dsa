// A school is trying to take an annual photo of all the students. 
// The students are asked to stand in a single line in non-decreasing order by height. 
// Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in.
// Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.

function sortArray(arr) {
    let nArr = [...arr]
    return nArr.sort((a,b) => {return a-b})
}

function compareArray(arr, nArr) {
    console.log(arr, nArr,arr.length)
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != nArr[i]) cnt++
    }
    return cnt
}

function checkHeight(arr) {
    let nArr = sortArray(arr)
    let height = compareArray(arr, nArr)
    return height
}

let arr = [10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7]
console.log(checkHeight(arr))