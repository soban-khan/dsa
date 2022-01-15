// given an array of size n find the missing number from it
// arr = [4, 2, 1] n=4 ans=3
// arr = [1,2,4,5] n=5 ans=3

function no(arr, n) {
    let a
    for (let i = 1; i <= n; i++) {
        a = 2
        for (let j = 0; j < arr.length; j++) {
            console.log(i, arr[j])
            if (arr[j] == i) { a = 1 }
        }
        if (a != 1) { return (i) }
    }
}

console.log(no([5, 4, 2, 1], 5))