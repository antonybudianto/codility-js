// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let len = A.length
    let counter = new Array(len)
    
    for(let i=0;i<len;i++){
        let idx = A[i]-1
        counter[idx] = counter[idx] || 0;
        counter[idx]++
    }
    
    for(let j=0;j<len;j++) {
        if (counter[j] !== 1) return 0
    }
    
    return 1
}
