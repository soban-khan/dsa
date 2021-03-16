// Method 1
// Rotate one by one
// Using temp veriable
// function leftRotateByOne(arr) {
//   temp = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = temp;
//   //   return arr;                     No Return statement because array is passed as reference
// }

// function leftRotate(arr, d) {
//   for (let i = 0; i < d; i++) {
//     leftRotateByOne(arr);
//   }
//   //   return arr;                  No Return statement because array is passed as reference
// }

// # ================================================================================================
// # ================================================================================================
// # Method 2
// # Reversal algo
// # 1. Let A and B be two parts of original array depending on rotate parameter
// # 2. A is from 0 to d-1 and B is from d to n-1
// # 3. First reverse A then reverse B then whole array

function reverseArray(arr, start, end) {
  while (start < end) {
    // console.log(arr);
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function leftRotate(arr, d) {
  reverseArray(arr, 0, d - 1);
  reverseArray(arr, d, arr.length - 1);
  reverseArray(arr, 0, arr.length - 1);
}

arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
leftRotate(arr, 2);
console.log(arr);
