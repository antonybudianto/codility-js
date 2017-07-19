// I modified the prefix sum to suit the needs...
function prefixSum(A) {
  let len=A.length;
  let arr = new Array(len);
  let dna = new Array(4);
  
  for(let i=0;i<dna.length;i++) {
     dna[i] = 0;
  }
  
  dna[A[0]-1]++;
  arr[0] = dna.concat()
  
  for(let i=1;i<len;i++) {
      dna[A[i]-1]++;
      arr[i] = dna.concat();
  }
  
  return arr;
}

function slice(P, x, y) {
  if (x === 0) return P[y];
  let arr = new Array(4);
  for(let i=0;i<4;i++) {
      arr[i] = P[y][i] - P[x-1][i];
  }
  return arr;
}

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 6.4.0)
    const map = {
      'A': 1,
      'C': 2,
      'G': 3,
      'T': 4
    };
    const arr = S.split('').map(s => map[s])
    const pref = prefixSum(arr);
    const res = [];
    const len = P.length;
    
    for(let i=0;i<len;i++) {
        let a = P[i], b = Q[i];
        let sum = slice(pref, a, b);
        
        for(let i=0;i<4;i++) {
            if (sum[i] > 0) {
                res.push(i+1);
                break;
            }
        }
    }
    
    return res;
}
