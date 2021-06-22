# O(log(n)) is time complexity for this algo
# Recursive implementation
def binary_search_recursive(arr, left, right, element):
    if right >= left:
        mid = left + (right-left) // 2
        # print(mid)
        if arr[mid] == element:
            return mid
        elif arr[mid] > element:
            return binary_search_recursive(arr, left, mid-1, element)
        else:
            return binary_search_recursive(arr, mid+1, right, element)
    return -1

# Iterative implementation


def binary_search_iterative(arr, left, right, element):
    while right >= left:
        mid = left + (right-left) // 2
        if arr[mid] == element:
            return mid
        elif element > arr[mid]:
            left = mid+1
        else:
            right = mid - 1
    return -1


if __name__ == '__main__':
    arr = [1, 3, 7, 8, 11]
    print(binary_search_recursive(arr, 0, len(arr)-1, 11))
