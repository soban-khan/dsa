# Given an array of integers arr, return true if and only if it is a valid mountain array.

# Recall that arr is a mountain array if and only if:

# arr.length >= 3
# There exists some i with 0 < i < arr.length - 1 such that:
# arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
# arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

def valid_mountain(arr):
    i, j, n = 0, len(arr)-1, len(arr)
    while i+1 < n and arr[i+1] > arr[i]:
        i += 1
    while j > 0 and arr[j] < arr[j-1]:
        j -= 1
    return 0 < i == j < n-1


if __name__ == '__main__':
    arr = [1, 2, 3, 2]
    print(valid_mountain(arr))
