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
        } else {
            cnt = 0
            start = null
            end = null
        }
    }
    console.log(mcnt, start)
    return mcnt === 0 ? "" : str
};