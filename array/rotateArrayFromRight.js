// brute force approach
function cyclicRotation(arr, d) {
  for (let i = 0; i < d; i++) {
    temp = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = temp;
  }
}


// reversal algo
// reverse the last no of elements of array by which we want to rotate
// then reverse the whole array
function reverseArray(arr, start, end) {
  while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
  }
  console.log(arr)
}

function rotateFromRight(arr, d) {
  reverseArray(arr, arr.length - d, arr.length - 1)
  reverseArray(arr, 0, arr.length - 1)
}



arr = [1, 2, 3, 4, 5, 6];
let d = 2
d = d % arr.length
console.log(arr);
rotateFromRight(arr, d);
console.log(arr);
