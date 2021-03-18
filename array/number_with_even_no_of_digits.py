# Given an array nums of integers, return how many of them contain an even number of digits.

def even_numbers_count(arr):
    cnt_d = 0
    for i in arr:
        cnt = 1
        while i >= 10:
            i = i//10
            cnt += 1
        if cnt % 2 == 0:
            cnt_d += 1
    return cnt_d


if __name__ == "__main__":
    arr = [123, 3456, 2343, 23]
    print(even_numbers_count(arr))
