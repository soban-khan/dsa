function cyclicRotation(arr, d) {
  for (let i = 0; i < d; i++) {
    temp = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = temp;
  }
}

arr = [1, 2, 3, 4, 5, 6];
let d = 2
d = d % arr.length
console.log(arr);
cyclicRotation(arr, d);
console.log(arr);
