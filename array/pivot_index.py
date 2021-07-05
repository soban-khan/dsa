# The pivot index is the index where the sum of all the numbers strictly to the left of the index
# is equal to the sum of all the numbers strictly to the index's right.

def pivot(nums):
    left, right = 0, sum(nums)
    for i in range(len(nums)):
        right -= nums[i]
        if left == right:
            return i
        left += nums[i]
    return -1


if __name__ == '__main__':
    arr = [-1, -1, -1, -1, -1, 0]
    print(pivot(arr))
