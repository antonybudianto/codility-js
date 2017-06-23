// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    let arr = [];
    let len = A.length;
    
    if (len <= 1) {
     return A   
    }
    
    let indexToAdd = len - (K % len);
    let nTimes = len - indexToAdd;

    for(let i=0;i<len;i++) {
        indexToAdd = i >= nTimes ? (-nTimes) : indexToAdd;
        let finalIndex = Math.abs(i + indexToAdd);
        arr.push(A[finalIndex]);
    }
    
    return arr;
}
