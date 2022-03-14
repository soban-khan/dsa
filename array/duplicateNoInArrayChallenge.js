// input is a positive integer
// make an array of that integer i.e. if int is 463 then array will be [4,6,3]
// pick a random no from array and multiply to original number and then insert those values that we get after multiplying
// just as inserted above
// return no of iteratons it will take to get duplicate number next to one another

function makeArrayFromInputInteger(inputInteger) {
    let arr = new Array()
    while (inputInteger >= 10) {
        arr.unshift(inputInteger % 10)
        inputInteger = Math.floor(inputInteger / 10)
    }
    arr.unshift(inputInteger)
    return arr
}




function duplicateInteger(originalInput) {
    let firstArray = []
    firstArray = makeArrayFromInputInteger(originalInput)
    let randomMultiplier = Math.floor(Math.random() * (firstArray.length - 0) + 0)
    let newInteger = originalInput * firstArray[randomMultiplier]
    consecutiveArray = firstArray.concat(makeArrayFromInputInteger(newInteger))
    let cnt = 0
    for (let i = 0; i < consecutiveArray.length; i++) {
        cnt++
        if (i == consecutiveArray.length - 1) {
            randomMultiplier = Math.floor(Math.random() * (consecutiveArray.length - 0) + 0)
            newInteger = originalInput * consecutiveArray[randomMultiplier]
            consecutiveArray = consecutiveArray.concat(makeArrayFromInputInteger(newInteger))
        }
        else if (consecutiveArray[i] === consecutiveArray[i + 1]) {
            return cnt
        }
    }
}


console.log(duplicateInteger(465))