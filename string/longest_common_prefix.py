# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".


# Example 1:

# Input: strs = ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: strs = ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.

def longestCommonPrefix(strs):
    cmp = strs[0]
    pl = len(cmp)
    # l=0
    # z=0
    rs = ""
    rsp = cmp
    cnt = 0
    # print(len(strs))
    if len(strs) == 1 and strs[0] == "":
        return ""
    elif len(strs) == 1:
        return strs[0]
    for i in strs:
        # print(i)

        j, z = 0, 0
        rs = ''
        # if i == cmp:
        #     continue
        if j >= len(i) or z >= len(cmp):
            break
        if i[j] == cmp[z]:
            cnt += 1
            while i[j] == cmp[z]:
                rs += i[j]
                z += 1
                j += 1
                # l+=1
                if j >= len(i) or z >= len(cmp):
                    break
        print(rs)
        if rs != rsp and len(rs) < len(rsp):
            rsp = rs
    print(cnt, len(strs))
    if cnt != len(strs):
        return ""
    return(rsp)


if __name__ == '__main__':
    strs = ["abab", "aba", "ab"]
    print(longestCommonPrefix(strs))
