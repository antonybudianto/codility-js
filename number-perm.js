function factorial(N) { return N <= 1 ? 1 : (N * factorial(N-1)) }

function solution (N) {
  if (N === 0) return 1

  const str = String(N)
  const len = str.length
  const perm = factorial(len)
  const map = {}
  let zeros = 0

  for(let i = 0; i < len; i++) {
    if (str[i] === '0') { zeros++; continue; }
    if (map[str[i]] === undefined) {
     map[str[i]] = 0
    }
    map[str[i]]++
  }

  const sames = Object.values(map).reduce((acc, curr) => acc * factorial(curr), 1)

  let permUniq = perm / (sames * factorial(zeros))
  let sub = 0
  if (zeros > 0) {
    sub = factorial(len - 1) / (factorial(zeros - 1) * sames)
  }
  return permUniq - sub
}

const N = 12000
const res = solution(N)
console.log(res)
