// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

function removeDuplicate(arr) {
    let i = 1, j = 0
    while (i < arr.length) {
        if (arr[i] === arr[j]) { i++ }
        else { arr[++j] = arr[i] }
    }
    console.log(`Unique elements are - first ${j} elements`)
    return arr
}

let arr = [1, 1, 2, 3, 2]
console.log(removeDuplicate(arr))