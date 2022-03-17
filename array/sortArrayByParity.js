// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
// Input: [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

function sortArray(arr) {
    let beg = 0
    let end = arr.length - 1
    while (beg < end) {
        if (arr[beg] % 2 === 0) beg++
        else if (arr[end] % 2 != 0) end--
        else {
            let temp = arr[beg]
            arr[beg] = arr[end]
            arr[end] = temp
            beg++
            end--
        }
    }
    console.log(arr)
}

let arr = [3, 1, 2, 4]
sortArray(arr)