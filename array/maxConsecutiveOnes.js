// # Given a binary array, find the maximum number of consecutive 1s in this array.

function max_consecutive_ones(nums) {
    let cnt = 0
    let mcnt = 0
    for (let i=0;i<nums.length;i++){
        if (nums[i] == 1){cnt++}
        else {cnt =0}
        if (cnt > mcnt){mcnt = cnt}
    }
    return mcnt
};

arr = [1, 1, 1]
console.log(max_consecutive_ones(arr))