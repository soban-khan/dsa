// given an array of size n find the missing number from it
// arr = [4, 2, 1] n=4 ans=3
// arr = [1,2,4,5] n=5 ans=3

let missingNumber = function (arr) {
    let setOfArr = new Set(arr)
    for (let i = 0; i <= arr.length; i++) {
        if (!(setOfArr.has(i))) { return i }
    }
};

console.log(missingNumber([4, 2, 1]))