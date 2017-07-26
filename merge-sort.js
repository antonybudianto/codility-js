const MergeSort = (function() {
 function sort(A) {
   let len = A.length;
   if (len <= 1) return A;
   let mid = Math.floor(len / 2);
   let left = A.slice(0, mid);
   let right = A.slice(mid);
   return merge(sort(left), sort(right));
 }
 
 function merge(A,B) {
    let arr = [];
    while(A.length && B.length) {
      let val = A[0] < B[0] ? A.shift() : B.shift();
      arr.push(val);
    }
    while(A.length) {
      arr.push(A.shift());
    }
    while(B.length) {
      arr.push(B.shift());
    }
    return arr;
 }
 
 return { sort };
})();
