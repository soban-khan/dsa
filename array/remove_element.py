# Given an array nums and a value val, remove all instances of that value in -place and return the new length.
# Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.
# The order of elements can be changed. It doesn't matter what you leave beyond the new length.

def remove_element(arr, val):
    i = 0
    for j in range(len(arr)):
        if arr[j] != val:
            arr[i] = arr[j]
            i += 1
        # j += 1
    print(arr)
    return i


if __name__ == '__main__':
    arr = [23, 4, 5, 8, 7]
    print(remove_element(arr, 5))
