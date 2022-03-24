// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// Input: nums1 = [1,2,3],nums2 = [2,5,6],
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

function sortedMerge(arr1, arr2) {
    let sortedArray = new Array()
    let i = 0, j = 0
    while (i < arr1.length & j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            sortedArray.push(arr2[j])
            j++
        }
        else {
            sortedArray.push(arr1[i])
            i++
        }

    }
    while (i < arr1.length) {
        sortedArray.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        sortedArray.push(arr2[j])
        j++
    }
    return sortedArray
}

let arr1 = [1, 2, 3]
let arr2 = [2, 5, 6]
console.log(sortedMerge(arr1, arr2))