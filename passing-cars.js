// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function prefixSum(A) {
 let sum=0;
 let len = A.length;
 let arr = new Array(len);
 arr[0] = A[0];
 sum = arr[0];
 
 for(let i=1;i<len;i++) {
     sum += A[i];
     arr[i] = sum;
 }
 
 return arr;
}

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let pref = prefixSum(A);
    let len = A.length;
    let sumOfPairs = 0;
    let sumOfOne = pref[pref.length-1];
    
    for(let i=0;i<len;i++) {
        let num = A[i];
        if (num === 0) {
            sumOfPairs += sumOfOne - pref[i];
        }
        if (sumOfPairs > 1000000000) return -1;
    }
    
    return sumOfPairs;
}
