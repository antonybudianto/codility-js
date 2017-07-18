// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let len = A.length;
    let minAvg = Number.MAX_SAFE_INTEGER;
    let minIndex = 0;
    
    for(let i=0;i<len-2;i++) {
        let avg2 = (A[i] + A[i+1]) / 2
        let avg3 = (A[i] + A[i+1] + A[i+2]) / 3
        let avg = Math.min(avg2, avg3)
        if (minAvg > avg) {
            minAvg = avg;
            minIndex = i;
        }
    }
    
    let lastAvg = (A[len-1] + A[len-2]) / 2;
    
    if (minAvg > lastAvg) {
        minAvg = lastAvg;
        minIndex = len-2;
    }
    
    return minIndex;
}
