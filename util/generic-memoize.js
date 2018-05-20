function createMemoize (fn) {
  const map = {}
  return function(N) {
    if (map[N] !== undefined) {
      return map[N]
    }
    return fn(N)
  }
}
