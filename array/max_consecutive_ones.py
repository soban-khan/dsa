# Given a binary array, find the maximum number of consecutive 1s in this array.

def max_consecutive_ones(arr):
    if len(arr) == 0 and arr[0] == 0:
        return 0
    elif len(arr) == 0:
        return 1
    max_cnt = 0
    cnt = 0
    for i in arr:
        if i == 1:
            cnt += 1
        else:
            cnt = 0
        if cnt > max_cnt:
            max_cnt = cnt
    return max_cnt


if __name__ == '__main__':
    arr = [0]
    print(max_consecutive_ones(arr))
