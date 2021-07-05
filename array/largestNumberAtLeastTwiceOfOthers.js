// # You are given an integer array nums where the largest integer is unique.
// # Determine whether the largest element in the array is at least twice as much as every other number in the array.
// # If it is, return the index of the largest element, or return -1 otherwise.

function dominantIndex(nums) {
    max = Math.max(...nums)
    // console.log(max)
    for(let i=0; i<nums.length;i++){
        // console.log(nums[i]*2)
        if (nums[i] == max){continue}
        if (nums[i]*2 > max){
            return -1
        }
    }
    return nums.indexOf(max)
};

arr = [3, 6, 1, 0]
console.log(dominantIndex(arr))