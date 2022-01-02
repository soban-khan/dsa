// input is a positive integer
// make an array of that integer i.e. if int is 463 then array will be [4,6,3]
// pick a random no from array and multiply to original number and then insert those values that we get after multiplying
// just as inserted above
// return no of iteratons it will take to get duplicate number next to one another

function ArrayChallenge(num) {
    let l = []
    let mcnt = 0
    function makelist(param) {
        let list = []
        while (param > 10) {
            list.push(param % 10)
            param = Math.floor(param / 10)
        }
        list.push(param)
        list = list.reverse()
        return list
    }
    let rlist = makelist(num)
    l = [...rlist]
    let i = 0
    let j = 1
    let flag = 1
    while (flag != 0) {
        while (j < l.length) {
            if (l[j] != l[i]) {
                j++; i++
            }
            else {
                flag = 0
                return mcnt
            }
        }
        let m = Math.floor(Math.random() * (l.length - 0) + 0)
        let mul = l[m] * num
        mcnt++
        rlist = makelist(mul)
        l.push(...rlist)
    }
}

// keep this function call here 
console.log(ArrayChallenge(43456));
