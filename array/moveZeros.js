// Given an integer array nums, 
// move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Input:  [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input:[1]
// Expected:[1]


function checkZero(arr) {
    let i = 0
    let j = 0
    while (i < arr.length) {
        if (arr[i] != 0) {
            arr[j] = arr[i]
            if (i != j) arr[i] = 0
            j++
        }
        i++
    }
    console.log(arr)
}

let arr = [1]
checkZero(arr)