# Method 1
# Rotate One by One
# Using temp varaiable

# def left_rotate_by_one(arr):
#     temp = arr[0]
#     for i in range(len(arr)-1):
#         arr[i] = arr[i+1]
#     arr[len(arr)-1] = temp
#     return arr                No Return statement because array is passed as reference


# def left_rotate(arr, d):
#     for i in range(d):
#         left_rotate_by_one(arr)
#     return arr                 No Return statement because array is passed as reference


# ================================================================================================
# ================================================================================================
# Method 2
# Reversal algo
# 1. Let A and B be two parts of original array depending on rotate parameter
# 2. A is from 0 to d-1 and B is from d to n-1
# 3. First reverse A then reverse B then whole array

def reverse_array(arr, start, end):
    while start < end:
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start += 1
        end -= 1


def left_rotate(arr, d):
    n = len(arr)
    reverse_array(arr, 0, d-1)
    reverse_array(arr, d, n-1)
    reverse_array(arr, 0, n-1)


if __name__ == '__main__':
    arr = [1, 2, 3, 4, 5, 6]
    print(arr)
    left_rotate(arr, 2)
    print(arr)
