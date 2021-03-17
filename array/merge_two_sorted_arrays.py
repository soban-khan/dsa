# Merge 2 sorted arrays and result will also be sorted array
# - Create an array arr3[] of size n1 + n2.
# - Simultaneously traverse arr1[] and arr2[].
# - Pick smaller of current elements in arr1[] and arr2[], copy this smaller element to next position in arr3[]
#   and move ahead in arr3[] and the array whose element is picked.
# - If there are remaining elements in arr1[] or arr2[], copy them also in arr3[].


def merge(arr1, m, arr2, n):
    result_arr = [0] * (m+n)
    i, j, index = 0, 0, 0
    while i < m and j < n:
        if arr1[i] > arr2[j]:
            result_arr[index] = arr2[j]
            j += 1
            index += 1
        else:
            result_arr[index] = arr1[i]
            i += 1
            index += 1
    while i < m:
        result_arr[index] = arr1[i]
        i += 1
        index += 1
    while j < n:
        result_arr[index] = arr2[j]
        j += 1
        index += 1
    print(result_arr)


if __name__ == '__main__':
    arr1 = [1, 2, 3, 4]
    arr2 = [5, 6, 7]
    merge(arr1, 3, arr2, 3)
