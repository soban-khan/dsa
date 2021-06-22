function iterativeApproach(arr, left, right, element) {
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (element == arr[mid]) {
      return mid;
    } else if (element < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

function recursiveApproach(arr, left, right, element){
  while (left <= right){
    mid = Math.floor(left + (right - left) / 2)
    if (arr[mid] == element){ return mid}
    else if (element > arr[mid]){ return recursiveApproach(arr, mid + 1, right, element)}
    else{ return recursiveApproach(arr,left, mid -1, element)}
  }
  return -1
}

arr = [1, 2, 3, 4, 5 , 9];
console.log(recursiveApproach(arr, 0, arr.length - 1, 56));
