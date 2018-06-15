const { range, isDivisorOf, add, sum } = require('./perfect-array')

const approxRootOf = x => Math.round(Math.sqrt(x))

const div = (x, y) => x / y

const complementDivisorsOf = (x, divisors) =>
  divisors.concat(divisors.map(div.bind(null, x)))

const sumDivisorsOf = x => {
  const divisorsBeforeSqrt = range(approxRootOf(x) + 1)
    .filter(isDivisorOf.bind(null, x))
  return sum(complementDivisorsOf(x, divisorsBeforeSqrt)) - x
}

const isPerfect = x => x !== 1 && x === sumDivisorsOf(x)

if (require.main === module) {
  console.time('main')
  const res = range(1000000).filter(isPerfect)
  console.timeEnd('main')
  console.log(res)
}


module.exports = {
  isDivisorOf,
  approxRootOf,
  add,
}