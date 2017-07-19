function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let sum = A.reduce((acc, curr) => acc + curr, 0);
    let leftC = 0, rightC = sum;
    let len = A.length;
    
    for(let i=0;i<len;i++) {
        leftC += A[i];
        let res = sum - leftC;
        rightC = sum - leftC - A[i+1];
        if (res === 0 && i===0) return i;
        if (leftC === rightC) return i+1;
    }
    
    return -1;
}
