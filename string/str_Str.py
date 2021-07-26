# Implement strStr().
# Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
# Clarification:
# What should we return when needle is an empty string? This is a great question to ask during an interview.
# For the purpose of this problem, we will return 0 when needle is an empty string

# Example 1:
# Input: haystack = "hello", needle = "ll"
# Output: 2

# Example 2:
# Input: haystack = "aaaaa", needle = "bba"
# Output: -1

# Example 3:
# Input: haystack = "", needle = ""
# Output: 0

def strStr(haystack, needle):
    i = 0
    x = 0
    # j=0
    if needle == "":
        return 0
    while i < len(haystack):
        j = 0
        if haystack[i] == needle[j]:
            x = i+1
            if j == len(needle)-1:
                return i
            if x > len(haystack)-1:
                return -1
            j += 1
            while haystack[x] == needle[j]:
                if j == len(needle)-1:
                    return i
                if x == len(haystack)-1:
                    return -1
                x += 1
                j += 1
        i += 1
    return -1


if __name__ == '__main__':
    a = "mississippi"
    b = "pi"
    print(strStr(a, b))
