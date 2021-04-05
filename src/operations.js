// REQUIREMENT 4: Operations are performed through static methods

class Operations {
  constructor() {
    throw "Static class, do not instantiate"
  }

  static sum(termArr) {
    return termArr.reduce((a, b) => a + b, 0)
  }

  static multiply(factor1, factor2) {
    return factor1 * factor2
  }

  static exponentiate(base, exponent) {
    return Math.pow(base, exponent)
  }
}

module.exports = { Operations }
