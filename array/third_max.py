# Given integer array nums, return the third maximum number in this array.
#  If the third maximum does not exist, return the maximum number.


def third_max_layman(arr):
    m = arr[0]
    j = len(arr)
    cnt = 0
    second_max = None
    for i in arr:
        if i > m:
            m = i
    print("first", m)
    ma = m
    for j in range(2):
        print(j, 'time', m)
        for i in arr:
            if i < m:
                second_max = i
                j = arr.index(i)
                cnt += 1
                break
        print(m, second_max)
        print("cnt", cnt)
        if second_max or second_max == 0:
            print('second_max', second_max)
            while j < len(arr):
                if arr[j] > second_max and arr[j] < m:
                    second_max = arr[j]
                    # m = second_max
                j += 1
            m = second_max
            print("second", m)
    if cnt == 2:
        return m
    else:
        return ma


def third_max_pro(arr):
    s = set(arr)
    if s == set():
        return 'Empty Array'
    if len(s) < 3:
        return max(s)
    else:
        sorted(s)
        # print(sorted(s)[-3])  #This is one line ans as set can't be accessed using index position. So access it while sorting
        # or iterate through it and return third last element
        for i in range(len(s), len(s)-3, -1):
            # print(i)
            ans = i
        return ans


if __name__ == '__main__':
    arr = []
    print("ans", third_max_pro(arr))
