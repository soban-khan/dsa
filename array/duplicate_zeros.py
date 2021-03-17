# Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
# Note that elements beyond the length of the original array are not written.
# Do the above modifications to the input array in place, do not return anything from your function.


def duplicate_zeros(arr, n):
    i = 0
    while i < n:
        if i+1 == n:
            break
        elif arr[i] == 0:
            for j in range(len(arr)-1, i, -1):
                arr[j] = arr[j-1]
            arr[i+1] = 0
            i += 2
        else:
            i += 1
    # print(arr)


if __name__ == '__main__':
    arr = [1, 2, 0, 3, 0, 4]
    duplicate_zeros(arr, len(arr))
    print(arr)
