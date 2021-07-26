// Given two binary strings a and b, return their sum as a binary string.
// Example 1:

// Input: a = "11", b = "1"
// Output: "100"



function addBinary(a, b) {
    let res =[]
    let carry = 0
    
    let i = a.length-1
    let j = b.length-1
    // console.log(i,j)
    // console.log(b)
    while(i>=0 && j>=0){
        if (carry == 0){
            if(a[i]==1 && b[j]==1){
            carry = 1
            res.unshift(0)
            }
            else if (a[i]==0 && b[j]==0){
                res.unshift(0)
            }
            else{
                res.unshift(1)
            }
        }
        else if(carry == 1){
            if(a[i]==1 && b[j]==1){
            // carry = 1
            res.unshift(1)
            }
            else if (a[i]==0 && b[j]==0){
                res.unshift(1)
                carry = 0
            }
            else{
                res.unshift(0)
            }
        }
        i--
        j--
    }
    while(i>=0){
        if(carry == 1){
            if(a[i]==0){res.unshift(1);carry=0}
            if(a[i]==1){res.unshift(0);carry=1}
        }
        else{res.unshift(a[i])}
        i--
    }
    while(j>=0){
        if(carry == 1){
            if(b[j]==0){res.unshift(1);carry=0}
            if(b[j]==1){res.unshift(0);carry=1}
        }
        else{res.unshift(b[j])}
        j--
    }
    if(carry == 1){res.unshift(carry)}
    console.log(res.join(""))
    return res.join("")
};

a="100"
b="110010"
addBinary(a,b)