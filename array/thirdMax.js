// Given integer array nums, return the third maximum number in this array.
// If the third maximum does not exist, return the maximum number.

function thirdMax(arr) {
    let newSet = new Set(arr)
    let max
    if (newSet.size < 3) {
        max = newSet.values().next().value
        newSet.forEach(itr => max = itr > max ? itr : max)
        return max
    }
    for (let i = 0; i < 3; i++) {
        max = newSet.values().next().value
        newSet.forEach(itr => max = itr > max ? itr : max)
        if (i == 2) { }
        else { newSet.delete(max) }
    }
    return max
}

// var thirdMax = function (nums) {
//     let a = [...new Set(nums)].sort((a, b) => b - a)
//     console.log(a)
//     if (a.length >= 3) {
//         return a[2]
//     } else {
//         return a[0]
//     }
// };

let arr = [2, 1, 3]
console.log(thirdMax(arr))