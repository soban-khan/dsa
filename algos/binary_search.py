# O(log(n)) is time complexity for this algo
# Recursive implementation
def binary_search(arr, left, right, element):
    if right >= left:
        mid = left + (right-left) // 2
        print(mid)
        if arr[mid] == element:
            return mid
        elif arr[mid] > element:
            return binary_search(arr, left, mid-1, element)
        else:
            return binary_search(arr, mid+1, right, element)
    else:
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
    arr = [12, 23, 42, 5, 67, 8]
    print(binary_search_iterative(arr, 0, len(arr)-1, 2))
