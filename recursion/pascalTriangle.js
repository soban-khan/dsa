var getRow = function(rowIndex) {
    
    // RECURSIVE

    // if(rowIndex == 0) return [1]
    // else if (rowIndex == 1) return [1,1]
    // else return pascal([1,1], 2)
    // function pascal(lastrow, currentrow){
    //     let arr = []
    //     arr[0] = 1
    //     arr[currentrow] = 1
    //     for(let i=1; i<currentrow;i++){
    //         arr[i] = lastrow[i-1]+lastrow[i]
    //     }
    //     if(currentrow == rowIndex) {console.log(arr);return arr}
    //     else return pascal(arr, currentrow+1)
    // }
    
    // ITERATIVE
    
    // let res = []
    // for(let i = 0; i<=rowIndex; i++){
    //     let arr = []
    //     for(let j=0;j<=i;j++){
    //         if(j==0 || j==i) arr.push(1)
    //         else{
    //             let x = res[i-1][j-1] + res[i-1][j]
    //             arr.push(x)
    //         }
    //     }
    //     res.push(arr)
    // }
    // return res[res.length-1]
    
    
};