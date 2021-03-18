# Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
# Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

def remove_duplicates(arr):
    if len(arr) == 0:
        return 0
    i, j = 0, 1
    while j < len(arr):
        if arr[j] != arr[i]:
            i += 1
            arr[i] = arr[j]
        j += 1
    print(i+1, arr)


if __name__ == '__main__':
    arr = [1, 1, 2, 3, 2]
    remove_duplicates(arr)
