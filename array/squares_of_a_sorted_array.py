# Given a sorted array return array which is sorted according to sqaures of given array
# 1.Since array is already sorted use two pointers approach
# 2.One pointer for beginning of array and one for end
# 3.Whichever value in bigger it's square will also be bigger
# 4.Take an array and start inserting from end
# Algorithm
# - Initialize left=0 and right=n-1
# - if abs(left) >= abs(right) then store square(arr[left])
# at the end of result array and increment left pointer
# - else store square(arr[right]) in the result array and decrement right pointer
# - decrement index of result array


def sorted_aquare(arr, n):
    left_index = 0
    right_index = n-1
    result_array = [0 for i in arr]
    index = n-1
    while index >= 0:
        if abs(arr[left_index]) > abs(arr[right_index]):
            result_array[index] = arr[left_index] ** 2
            left_index += 1
        else:
            result_array[index] = arr[right_index] ** 2
            right_index -= 1
        index -= 1
    arr = result_array
    print(arr)
    # print(result_array)


if __name__ == '__main__':
    # arr = [-2, -1, 0, 5, 8, 98]
    arr = [-3, -1, 3, 5, 56, 87]
    print(arr)
    sorted_aquare(arr, len(arr))
    print(arr)
