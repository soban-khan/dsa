// Method 1
// Rotate one by one
// Using temp veriable
function leftRotateByOne(arr) {
  temp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
  return arr;
}

function leftRotate(arr, d) {
  for (let i = 0; i < d; i++) {
    leftRotateByOne(arr);
  }
}

arr = [1, 2, 3, 4, 5, 6];
rotatedArr = leftRotate(arr, 2);
console.log(rotatedArr);
