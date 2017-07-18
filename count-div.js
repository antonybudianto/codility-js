// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    let addition = A % K === 0 ? 1 : 0;
    let allDivs = Math.floor(B / K);
    let lowerDivs = Math.floor(A / K);
    let divs = allDivs - lowerDivs + addition;
    return divs;
}
