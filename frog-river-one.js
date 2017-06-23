// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let len = A.length
    let arr = new Array(X)
    let sum = (X * (X + 1)) / 2;
    
    for(let i=0;i<len;i++) {
        let idx = A[i]-1
        let val = arr[idx]
        
        if (!val) {
            arr[idx] = 1
            sum -= A[i]
        }
        
        if (sum === 0) {
            return i;
        }
    }
    
    return -1;
    
}
