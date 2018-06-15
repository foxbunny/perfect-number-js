const { isDivisorOf, add, approxRootOf } = require('./perfect-array-optimized')

function* map(fn, xs) {
  for (let x of xs) {
    yield fn(x)
  }
}

function* filter(fn, xs) {
  for (let x of xs) {
    if (fn(x)) yield x
  }
}

function* range(max) {
  let current = 1
  while (current < max) {
    yield current
    current += 1
  }
}

const reduce = (fn, init, xs) => {
  for (let x of xs) {
    init = fn(init, x)
  }
  return init
}

function* flatten(xs) {
  for (let ys of xs) {
    for (let y of ys) {
      yield y
    }
  }
}

const toArray = xs => {
  const out = []
  for (let x of xs) {
    out.push(x)
  }
  return out
}

const sum = reduce.bind(null, add, 0)

const complementDivisorsOf = (x, divisors) =>
  flatten(map(divisor => [divisor, x / divisor], divisors))

const sumDivisorsOf = x => {
  const divisorsBeforeSqrt = filter(
    isDivisorOf.bind(null, x),
    range(approxRootOf(x) + 1)
  )
  return sum(complementDivisorsOf(x, divisorsBeforeSqrt)) - x
}

const isPerfect = x => x !== 1 && x === sumDivisorsOf(x)

if (require.main === module) {
  console.time('main')
  const res = toArray(filter(isPerfect, range(1000000)))
  console.timeEnd('main')
  console.log(res)
}