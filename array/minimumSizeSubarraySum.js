// Given an array of positive integers nums and a positive integer target, 
// return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] 
// of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0


let minSubArrayLen = function (target, nums) {
    let firstPointer = 0, secondPointer = 0, sum = 0, minCountOxyMoron = Number.MAX_SAFE_INTEGER, cnt = 0
    while (firstPointer < nums.length) {
        sum += nums[firstPointer]
        cnt++
        while (sum >= target) {
            if (cnt < minCountOxyMoron) minCountOxyMoron = cnt
            sum -= nums[secondPointer]
            cnt--
            secondPointer++
        }
        firstPointer++
    }
    return minCountOxyMoron === Number.MAX_SAFE_INTEGER ? 0 : minCountOxyMoron
};