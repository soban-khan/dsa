// Write a program to find all Permutations of a given String using Recursion?
// Input:  string = “abc”
// Output: abc
//acb
//bac
//bca
//cab
//cba

function permute(str, ans) {
    if (str.length == 0) console.log(ans)
    for (let i = 0; i < str.length; i++) {
        let ch = str[i]
        let leftSubString = str.slice(0, i)
        let rightSubString = str.slice(i + 1)
        permute(leftSubString + rightSubString, ans + ch)
    }
}

permute('abc', '')
