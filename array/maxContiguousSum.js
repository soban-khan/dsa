// find the max contiguous sum in an array

// Input: arr = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

function maxContiguousSum(arr) {
    let sum = 0,
        msum = Number.NEGATIVE_INFINITY
    if (arr.length == 1) return arr[0]
    for (let i of arr) {
        sum += i
        // console.log('f',msum,i,0>msum)
        msum = Math.max(sum, msum)
        // console.log(msum)
        if (sum < 0) sum = 0
        if (msum == Number.NEGATIVE_INFINITY & i < 0) { msum = i }
    }
    return msum
}

console.log(maxContiguousSum([-10, 5, 2, 1, -10]))

// [0,-2,-3]
// [-1,0,-2]
// [-2,-1]
// [-1]