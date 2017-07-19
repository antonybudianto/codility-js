// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// DON'T USE native .sort()! You'll get awkward result

function countingSort(A, min, max) {
  let len = max - min;
  let counters = new Array(len);
  for(let i=0;i<len;i++) counters[i] = 0;
  let alen = A.length;
  for(let i=0;i<alen;i++) counters[A[i]-min]++
  let arr = [];
  for(let i=0;i<len;i++) {
    for(let j=0;j<counters[i];j++) arr.push(min+i)
  }
  
  return arr;
}

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    A = countingSort(A, -1000000, 1000000);
    let len = A.length, count = 1;
    if (len <= 1) return len;
    for(let i=0;i<len-1;i++) {
      if (A[i] !== A[i+1]) count++;
    }
    return count;
}
