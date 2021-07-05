# Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
# The digits are stored such that the most significant digit is at the head of the list, and each element in the array
# contains a single digit.
# You may assume the integer does not contain any leading zero, except the number 0 itself.


def plusOne(digits):
    # print(str(digits))
    a = ''
    for i in digits:
        a += str(i)
    # print(int(a))
    a = int(a)
    print(type(a))
    a += 1
    arr = []
    while a >= 10:
        print(a)
        print("fghj", a % 10)
        arr.append(a % 10)
        a = a//10
    print("a in last", a)
    arr.append(a)
    print(arr[::-1])
    return(arr[::-1])


if __name__ == '__main__':
    arr = [1, 2, 3]
    print(plusOne(arr))
