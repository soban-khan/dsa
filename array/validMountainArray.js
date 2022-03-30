// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:
// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Input: arr = [2,1]
// Output: false

// Input: arr = [2,1]
// Output: false

// Input: arr = [3,5,5]
// Output: false

function isMountain(arr) {
    if (arr.length < 3) return false
    let i = 0, j = arr.length - 1
    while (i < arr.length && arr[i + 1] > arr[i]) {
        i++
    }
    console.log(i)
    while (j > i && arr[j - 1] > arr[j]) {
        j--
    }
    console.log(j)
    return i === j && i != arr.length - 1 && j != 0
}

let arr = [1, 2, 3, 2]
console.log(isMountain(arr))