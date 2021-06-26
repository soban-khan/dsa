def d2b_recursive(num):
    if num >= 1:
        d2b_recursive(num // 2)
        print(num % 2)


if __name__ == '__main__':
    d2b_recursive(9)
