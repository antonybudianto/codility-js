// Optimized for space

function countingSort(A, min, max) {
  let len = max - min + 1;
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
