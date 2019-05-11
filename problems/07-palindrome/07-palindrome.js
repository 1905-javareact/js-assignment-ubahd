/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    let size = someStr.length
    for (let i=0; i < someStr.length; i++ ){
        if(someStr[i] !== someStr[size-i-1])
           return false
    }

    return true
}

console.log(isPalindrome('kayak'))