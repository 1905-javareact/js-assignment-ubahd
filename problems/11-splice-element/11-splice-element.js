/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    let newarr = []    

        for (let i = someArr.length -1; i >= index; i--){
               newarr[i] = someArr[i]
        }
        for (let i = 0; i < index; i++){
            newarr.shift()
        }
        return newarr
}

console.log(spliceElement([1,2,3,4,5,6,7,8,9,10], 6))