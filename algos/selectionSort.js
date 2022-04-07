// The selection sort algorithm sorts an array by repeatedly finding the minimum element 
// (considering ascending order) from unsorted part and putting it at the beginning. 
// The algorithm maintains two subarrays in a given array.
// 1) The subarray which is already sorted. 
// 2) Remaining subarray which is unsorted.
// In every iteration of selection sort, the minimum element (considering ascending order) 
// from the unsorted subarray is picked and moved to the sorted subarray. 

let log = require('../log')

function swap(arr, toIndex, fromIndex) {
    let temp = arr[toIndex]
    arr[toIndex] = arr[fromIndex]
    arr[fromIndex] = temp
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j
        }
        swap(arr, minIndex, i)
    }
    log(arr)
}

let arr = [64, 25, 12, 22, 11];
selectionSort(arr)