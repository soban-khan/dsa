// # Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
// # The digits are stored such that the most significant digit is at the head of the list, and each element in the array
// # contains a single digit.
// # You may assume the integer does not contain any leading zero, except the number 0 itself.


// not able to solve due to parseInt
// it converts string only of certain length to int or else bcs js only represents numbers in 16 ByteLengthQueuingStrategy.

function plusOne(digits) {
    let x=""
    let arr = []
    for (let i=0;i<digits.length;i++){
        x+=digits[i].toString()
        // console.log(x)
    }
    // console.log(x.length)
    let y = Number(BigInt(x)) + 1
    // let y= parseInt(x)+1
    // var z= Math.round(x)
    // console.log(z)
    // y = Number.parseInt(x)
    console.log(y)
    // while (y>=10){
    //     arr.unshift(y%10)
    //     y=Math.floor(y/10)
    // }
    // arr.unshift(y)
    // console.log(arr)
    return arr
};

arr = [1, 2, 3]
console.log(plusOne(arr))
