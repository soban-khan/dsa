// # The pivot index is the index where the sum of all the numbers strictly to the left of the index
// # is equal to the sum of all the numbers strictly to the index's right.

function pivot(nums) {
    let right = nums.reduce((a,b) => a+b, 0)
    let left = 0
    for (let i =0;i<nums.length;i++){
        right -= nums[i]
        if(left == right){return i}
        left += nums[i]
    }
    // console.log(sum)
    return -1
};

arr = [-1, -1, -1, -1, -1, 0]
console.log(pivot(arr))