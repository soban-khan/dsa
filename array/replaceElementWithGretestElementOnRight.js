// Given an array arr, replace every element in that array with the greatest element among the elements to its right,
// and replace the last element with -1.
// After doing so, return the array.
// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]


function greatestRightElement(arr, start, end = arr.length) {
    let max = arr[start + 1]
    for (let i = start; i < end; i++) {
        if (arr[i] > max) max = arr[i]
    }
    return max
}


function replace(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 2) arr[i] = arr[i + 1]
        else {
            let right = greatestRightElement(arr, i + 1)
            arr[i] = right
        }
    }
    arr[arr.length - 1] = -1
    return arr
}

let arr = [17, 18, 5, 4, 6, 1]
console.log(replace(arr))