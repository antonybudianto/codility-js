// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let len = A.length
    let arr = new Array(len)
    let curMax = 0;
    
    for(let i=0; i<len;i++) {
        let idx = A[i] - 1
        arr[idx] = arr[idx] || 0
        arr[idx]++
        
        if (curMax < A[i]) {
            curMax = A[i]
        }
    }
    
    for(let j=0;j<len;j++) {
        if(arr[j] === undefined) return j+1
    }
    
    return curMax+1
}
