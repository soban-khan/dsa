# The pivot index is the index where the sum of all the numbers strictly to the left of the index
# is equal to the sum of all the numbers strictly to the index's right.

def pivot(arr):
    left_sum, right_sum = 0, sum(arr)
    for i in arr:
        right_sum -= i
        if left_sum == right_sum:
            return arr.index(i)
        left_sum += i
    return -1


if __name__ == '__main__':
    arr = [1, 3, 7, 6, 5, 6]
    print(pivot(arr))
