/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    let s = someStr
    let a = startIndex
    let x = endIndex
    if (s <= 0 || x <= 0){
        throw "The input was incorrect"
    }
     let r = ''
     for (let i = 0; i <= s.length && i < x; i++)
     r += someStr[i]    
     return r 
    
}

console.log(substring('Welcome', 0, 3))