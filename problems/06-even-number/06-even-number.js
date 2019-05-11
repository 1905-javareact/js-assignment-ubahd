/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
        
         let checker = someNum/2
         let c = checker.toString()
    if(c.indexOf('.')> -1){
        return false
    }else {
        return true
    }
}

console.log(isEven(11))