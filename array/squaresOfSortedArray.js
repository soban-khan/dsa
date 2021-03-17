//  Given a sorted array return array which is sorted according to sqaures of given array
//  1.Since array is already sorted use two pointers approach
//  2.One pointer for beginning of array and one for end
//  3.Whichever value in bigger it's square will also be bigger
//  4.Take an array and start inserting from end

//  Algorithm –
//  - Initialize left=0 and right=n-1
//  - if abs(left) >= abs(right) then store square(arr[left])
//  at the end of result array and increment left pointer
//  - else store square(arr[right]) in the result array and decrement right pointer
//  - decrement index of result array

function squareSorted(arr, n) {
  left_index = 0;
  right_index = n - 1;
  index = n - 1;
  let result_arr = [];
  for (let i = 0; i < n; i++) {
    result_arr[i] = 0;
  }
  console.log(n);
  while (index >= 0) {
    if (Math.abs(arr[left_index]) > Math.abs(arr[right_index])) {
      result_arr[index] = arr[left_index] * arr[left_index];
      left_index += 1;
    } else {
      result_arr[index] = arr[right_index] * arr[right_index];
      right_index -= 1;
    }
    index -= 1;
  }
  console.log(result_arr);
}

arr = [-3, -1, 3, 5, 56, 87];
squareSorted(arr, arr.length);
// console.log(arr);
