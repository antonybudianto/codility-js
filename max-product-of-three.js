// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function countingSort(A, min, max) {
    let len = max - min + 1;
    let alen = A.length;
    let counters = new Array(len), arr = [];
    for(let i=0;i<len;i++) counters[i] = 0;
    for(let i=0;i<alen;i++) counters[A[i]-min]++
    for(let i=0;i<len;i++) {
        for(let j=0;j<counters[i];j++) arr.push(i+min)
    }
    return arr;
}

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    const arr = countingSort(A, -1000, 1000);
    const len = arr.length;
    let a = arr[len-1] * arr[len-2] * arr[len-3];
    let b = arr[0] * arr[1] * arr[len-1];
    return Math.max(a,b)
}
