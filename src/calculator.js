const { Operations } = require("./operations")
const { validateNum, validateArray } = require("./utils")

// REQUIREMENT 3: Calculator has lastResult property and methods

class Calculator {
  constructor() {
    this.lastResult = null
  }

  getLastResult() {
    if (this.lastResult === null) {
      throw "Must perform a calculation first"
    }
    return this.lastResult
  }

  add(...terms) {
    // REQUIREMENT 1: Overloading accepts both numbers and a single array
    if (terms.length === 1) {
      terms = terms[0]
    }
    let termArr = validateArray(terms)
    return (this.lastResult = Operations.sum(termArr))
  }

  subtract(minuend, subtrahend) {
    let termArr = [validateNum(minuend), -1 * validateNum(subtrahend)]
    return (this.lastResult = Operations.sum(termArr))
  }

  multiply(factor1, factor2) {
    return (this.lastResult = Operations.multiply(
      validateNum(factor1),
      validateNum(factor2)
    ))
  }

  divide(dividend, divisor) {
    divisor = validateNum(divisor)
    if (divisor == 0) {
      // REQUIREMENT 6: Exception when dividing by zero
      throw "Cannot divide by zero"
    }
    return (this.lastResult = Operations.multiply(
      validateNum(dividend),
      1 / divisor
    ))
  }

  cube(base) {
    return (this.lastResult = Operations.exponentiate(validateNum(base), 3))
  }

  square(base) {
    return (this.lastResult = Operations.exponentiate(validateNum(base), 2))
  }

  sqRoot(base) {
    return (this.lastResult = Operations.exponentiate(validateNum(base), 0.5))
  }
}

module.exports = { Calculator }
