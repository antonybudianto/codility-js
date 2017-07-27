function solution(S) {
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];
    let len = S.length;
    let stack = [];
    let counter = 0;
    
    if (len === 0) { return 1; }
    if (len % 2 !== 0) { return 0; }
    
    for(let i=0;i<len;i++) {
      let s = S[i];
      let idx = openBrackets.indexOf(s);
      if (idx > -1) {
          if (stack.length > 0 && stack[0] === idx) {
            counter += idx+1;
          } else {
            stack.unshift(idx);
          }
      } else {
          let idxA = closeBrackets.indexOf(s);
          let idxB = stack[0];
          if (idxA === idxB) {
              stack.shift();
          } else if (counter === 0) {
            return 0;  
          } else {
             counter -= idxA+1;
          }
      }
    }
    return stack.length + counter > 0 ? 0 : 1;
}
