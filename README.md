# Perfect numbers

This is a comparison of different array-based and iterator-based 
implementations of the perfect number problem in JavaScript.

## The problem

> A perfect number is a number for which the sum of all proper divisors (all 
> divisors except the number itself) is equal to the number. For example, 
> proper divisors of 6 are 1, 2 and 3, and 1 + 2 + 3 = 6, so 6 is a perfect 
> number.
> 
> Find all perfect numbers below 1,000,000.

## The code

`perfect-array.js` is a naive array-based implementation

`perfect-array-optimized` optimized the naive approach

`perfect-iter` is a reimplementation of the optimized array-based solution 
using iterators.