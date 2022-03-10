// # Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
// # Note that elements beyond the length of the original array are not written.
// # Do the above modifications to the input array in place, do not return anything from your function.


function duplicateZeros(arr) {
    let i = 0
    while (i < arr.length) {
        if (arr[i] === 0) {
            if (arr[i + 1] == 0) { i++ } else {
                for (let j = arr.length; j > i; j--) {
                    arr[j] = arr[j - 1]
                }
                arr[i + 1] = 0
                i++
            }
        }
        i++
    }
    return arr
}

let arr = [1, 2, 0, 0, 3, 0]
console.log(duplicateZeros(arr))
