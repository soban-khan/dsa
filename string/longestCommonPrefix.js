// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.



/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    strs = strs.sort((a, b) => a.length - b.length)
    let cnt = 0, mcnt = 0, start = null, end = null, str = ""
    for (let i = 0; i < strs[0].length; i++) {
        start = start === null ? i : start
        let char = strs[0][i]
        let flag = 0
        for (let j = 1; j < strs.length; j++) {
            if (char === strs[j][i]) {
                flag++
            }
        }
        if (flag === strs.length - 1) {
            cnt++
            if (cnt > mcnt) {
                mcnt = cnt
                end = i
                console.log(start, end)
                str = strs[0].slice(start, end + 1)
                console.log(str)
            }
            if (end === strs[0].length - 1) return str
        } else {
            console.log('else')
            // cnt = 0
            // start = null
            // end = null
            return str
        }
    }
    console.log(mcnt, start)
    return ""
};