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

# ================================================================================================
# ================================================================================================
# Method 3
# Reversal algo
# 1. Let A and B be two parts of original array depending on rotate parameter
# 2. A is from 0 to d-1 and B is from d to n-1
# 3. First reverse A then reverse B then whole array


def cyclic_rotation_revesal_algo(nums, k):
    if k > len(nums):
        for i in range(k-len(nums)):
            temp = nums.pop()
            # print(temp)
            nums.insert(0, temp)
        return
    elif k == len(nums):
        return

    def temp(start, end):
        while start < end:
            # print(start,end)
            temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start += 1
            end -= 1
            # print(start,end)
            # print(nums)
    temp(len(nums)-k, len(nums)-1)
    temp(0, len(nums)-k-1)
    temp(0, len(nums)-1)


if __name__ == '__main__':
    arr = [1, 2, 3, 4, 5, 6]
    print(arr)
    cyclic_rotation_revesal_algo(arr, 2)
    print(arr)
