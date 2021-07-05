// # Given a sorted array return array which is sorted according to sqaures of given array
// # 1.Since array is already sorted use two pointers approach
// # 2.One pointer for beginning of array and one for end
// # 3.Whichever value in bigger it's square will also be bigger
// # 4.Take an array and start inserting from end
// # Algorithm
// # - Initialize left=0 and right=n-1
// # - if abs(left) >= abs(right) then store square(arr[left])
// # at the end of result array and increment left pointer
// # - else store square(arr[right]) in the result array and decrement right pointer
// # - decrement index of result array

function sorted_aquare(nums) {
    let newArray=[]
    for (let i=0;i<nums.length;i++){
        newArray[i]=0
    }
    let beg = 0
    let end = nums.length-1
    let index = nums.length-1
    while (beg<=end){
        if (Math.abs(nums[beg]) > Math.abs(nums[end])){
            newArray[index] = nums[beg]*nums[beg]
            index--
            beg++
        }
        else{
            newArray[index] = nums[end]*nums[end]
            end--
            index--
        }
    }
    return newArray
};

arr = [-3, -1, 3, 5, 56, 87]
    sorted_aquare(arr, len(arr))