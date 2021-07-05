// # Given an array nums of integers, return how many of them contain an even number of digits.

function even_numbers_count(nums) {
    let cnte=0
    for (let i =0 ; i<nums.length;i++){
        let cnt = 1
        while(nums[i] >= 10){
            Math.floor(nums[i] /= 10)
            cnt++
        }
        if (cnt % 2 == 0){cnte++}
    }
    return cnte
};

arr = [123, 3456, 2343, 23]
console.log(even_numbers_count(arr))