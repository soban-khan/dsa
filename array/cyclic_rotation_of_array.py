# ================================================================================================
# ================================================================================================
# Method 2
# Using laymann

def cyclic_rotation(arr, d):
    for i in range(d):
        temp = arr[-1]
        for i in range(len(arr)-1, 0, -1):
            arr[i] = arr[i-1]
        arr[0] = temp

# ================================================================================================
# ================================================================================================
# Method 2
# Using additional memory


def cyclic_rotation_using_memory(nums, k):
    arr = nums.copy()
    i = len(arr)-k
    j = 0
    if k > len(nums):
        for i in range(k-len(arr)):
            temp = nums.pop()
            print(temp)
            nums.insert(0, temp)
        return
    elif k == len(nums):
        return
    while i < (len(arr)):
        nums[j] = arr[i]
        j += 1
        i += 1
        if j >= len(nums):
            return
    z = 0
    while j < len(arr):
        nums[j] = arr[z]
        z += 1
        j += 1


if __name__ == '__main__':
    arr = [1, 2, 3, 4, 5, 6]
    print(arr)
    cyclic_rotation_using_memory(arr, 2)
    print(arr)
