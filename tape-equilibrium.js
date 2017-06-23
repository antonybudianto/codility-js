// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let sum = A.reduce((acc, curr) => acc + curr, 0);
    let leftC = 0, rightC = sum;
    let minDiff = null;
    
    for(let i=0;i<A.length-1;i++) {
        leftC += A[i];
        rightC = sum - leftC;
        let diff = Math.abs(leftC - rightC);
        
        if (minDiff === null || minDiff > diff) {
            minDiff = diff;
        }
    }
    
    return minDiff;
}
