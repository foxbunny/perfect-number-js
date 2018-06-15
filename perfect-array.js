// Helper functions (or, "why aren't these in JavaScript language?" functions)

const range = x => {
  const out = []
  let current = 1
  while (current < x) {
    out.push(current)
    current += 1
  }
  return out
}

const add = (x, y) => x + y

const sum = xs => xs.reduce(add, 0)

// Real functions

const isDivisorOf = (x, y) => x % y === 0

const sumDivisorsOf = x => sum(range(x).filter(isDivisorOf.bind(null, x)))

const isPerfect = x => x === sumDivisorsOf(x)

// Execute the code

if (require.main === module) {
  console.time('main')
  const res = range(1000000).filter(isPerfect)
  console.timeEnd('main')
  console.log(res)
}


module.exports = {
  range,
  add,
  sum,
  isDivisorOf,
}