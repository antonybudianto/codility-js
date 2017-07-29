// worst time ~0.340s

// worst time ~0.340s

function solution(A, B) {
    // write your code in JavaScript (Node.js 6.4.0)
    let len = A.length;
    if (len === 1) return 1;
    let stack = [];
    let sum = B.reduce((a,c) => a+c, 0);
    
    // if no fish will counter each other
    if (sum === 0 || sum === len) return len;
    
    // if the only upstreamer fish located at the end
    if (sum === 1 === B[len-1]) return len;
    
    // if the only downstreamer fish located at the start
    if (sum === len-1 && B[0] === 0) return len;

    // a case where only one fish go upstream
    if (sum === 1) {
        let count = 0;
        let val = -1;
        for(let i=0;i<len;i++) {
            if (B[i] === 1) {
                val = A[i];
                count++;
            } else if (val === -1) {
                count++;
            } else if (val < A[i]) {
                return count + len - i - 1;
            }
        }
        return count;
    }

    // a case where only one fish go downstream
    if (sum === len-1) {
        let countLeft = 0, countFish = 0, val = 0;

        for(let i=0; i<len; i++) {
            if (B[i] === 1) {
                countLeft++;
            } else {
                val = A[i];
                break;
            }
        }
        for(let i=countLeft-1; i>=0; i--) {
            if (val > A[i]) {
                countFish++
            } else { break; }
        }
        let countRight = len-countLeft-1;
        let survive = countLeft - countFish + (countLeft === countFish ? 1 : 0);
        return countRight + survive;
    }

    // using stack
    for(let i=0;i<len;i++) {
        let aVal = A[i], bVal = B[i],
            aCurVal = A[stack[0]], bCurVal = B[stack[0]];

        if (stack.length === 0) {
            stack.unshift(i);
            continue;
        }

        if (bCurVal === 0) {
            stack.unshift(i)
            continue;
        }

        if (bVal === 1) {
            stack.unshift(i);
            continue;
        }

        if (aVal > aCurVal) { //  1vs0, AvsB, where A (current) loses
            stack.shift();
            i -= 1;
            continue;
        }
    }

    return stack.length;
}

