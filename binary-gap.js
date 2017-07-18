// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    let lastGap = 0, curGap = 0;
    let bin = N.toString(2);
    let len = bin.length;
    for(let i=0; i < len; i++) {
        if (bin[i] === '1') {
            if (curGap > lastGap) {
                lastGap = curGap;
            }
            curGap = 0;
        } else {
            curGap++;
        }
    }
    return lastGap;
}
