# You are given an integer array nums where the largest integer is unique.
# Determine whether the largest element in the array is at least twice as much as every other number in the array.
# If it is, return the index of the largest element, or return -1 otherwise.

def dominantIndex(nums):
    if len(nums) == 1 or len(nums) == 0:
        return 0
    s = set(nums)
    print(s)
    # m = max(s)
    m, sm = sorted(s)[-1], sorted(s)[-2]
    print(m, sm)
    if m >= 2*sm:
        return nums.index(m)
    else:
        return -1


if __name__ == '__main__':
    arr = [3, 6, 1, 0]
    print(dominantIndex(arr))
