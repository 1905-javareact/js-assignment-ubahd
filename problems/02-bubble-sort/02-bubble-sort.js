/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let change
    let n = numArray.length-1
    let c = numArray
    do {
        change = false
        for (let i=0; i < n; i++){
            if (c[i] < c[i+1]) {
               let t= c[i]
               c[i] = c[i+1]
               c[i+1] = t
               change = true
            }
        }
        n--
    }
     while (change == true)
 return c; 
}

console.log(bubbleSort([12, 64, 2, 100, 120, 3, 1, 14, 9, 40]))