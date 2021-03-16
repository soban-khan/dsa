# Method 1
# Rotate One by One
# Using temp varaiable
def left_rotate_by_one(arr):
    temp = arr[0]
    for i in range(len(arr)-1):
        arr[i] = arr[i+1]
    arr[len(arr)-1] = temp
    return arr


def left_rotate(arr, d):
    for i in range(d):
        left_rotate_by_one(arr)
    return arr


if __name__ == '__main__':
    arr = [1, 2, 3, 4, 5, 6]
    print(arr)
    print(left_rotate(arr, 2))
