// find the max contiguous sum in an array

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

function maxContiguousSum(arr) {
    let max = Number.MIN_VALUE
    let currentMax = 0

    for (let i of arr) {
        currentMax += i
        if (max < currentMax) max = currentMax
        if (currentMax < 0) currentMax = 0
    }
    return max
}

console.log(maxContiguousSum([-10, 5, 2, 1, -10]))