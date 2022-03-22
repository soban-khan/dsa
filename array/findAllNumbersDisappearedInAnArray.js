// Given an array nums of n integers where nums[i] is in the range[1, n],
// return an array of all the integers in the range[1, n] that do not appear in nums.

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

function disappearedNumbers(arr) {
    let newSet = new Set(arr)
    let nArr = new Array()
    for (let i = 1; i <= arr.length; i++) {
        if (!newSet.has(i)) nArr.push(i)
    }
    console.log(nArr)
}

let arr = [1, 1]
disappearedNumbers(arr)