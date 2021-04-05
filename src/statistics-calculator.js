const { Calculator } = require("./calculator")
const { sortArray, validateArray } = require("./utils")

// REQUIREMENT 2: Demonstrated inheritance by extending calculator class

class StatisticsCalculator extends Calculator {
  mean(numArr) {
    numArr = validateArray(numArr)
    return this.divide(this.add(numArr), numArr.length)
  }

  median(numArr) {
    numArr = sortArray(numArr)
    let isEven = numArr.length % 2 === 0
    let halfIndex = this.divide(numArr.length - 1, 2)
    if (isEven) {
      let i = Math.floor(halfIndex)
      return this.mean([numArr[i], numArr[i + 1]])
    } else {
      return (this.lastResult = numArr[halfIndex])
    }
  }

  modes(numArr) {
    numArr = validateArray(numArr)
    let freq = {}
    for (let i in numArr) {
      let num = numArr[i]
      if (typeof freq[num] === "undefined") {
        freq[num] = 0
      }
      freq[num]++
    }
    let modes = []
    let highestFreq = 0
    for (let num in freq) {
      let currFreq = freq[num]
      if (currFreq > highestFreq) {
        modes = []
        highestFreq = currFreq
      }
      if (currFreq === highestFreq) {
        modes.push(parseFloat(num))
      }
    }
    return (this.lastResult = modes)
  }

  variance(numArr) {
    return this.divide(this._sumSquaredDev(numArr), numArr.length)
  }

  stdDeviation(numArr) {
    return this.sqRoot(this.variance(numArr))
  }

  skewness(numArr) {
    let n = numArr.length

    let correctedStd = this.sqRoot(
      this.divide(this._sumSquaredDev(numArr), this.subtract(n, 1))
    )

    let numerator = this.multiply(n, this._sumCubedDev(numArr))
    let denominator = this.multiply(
      this.multiply(this.subtract(n, 1), this.subtract(n, 2)),
      this.cube(correctedStd)
    )

    return this.divide(numerator, denominator)
  }

  zScore(targetVal, numArr) {
    return this.divide(
      this.subtract(targetVal, this.mean(numArr)),
      this.stdDeviation(numArr)
    )
  }

  medianAbsoluteDev(numArr) {
    let median = this.median(numArr)
    let devArr = []
    for (let i in numArr) {
      let dev = this.subtract(numArr[i], median)
      devArr.push(Math.abs(dev))
    }
    return this.median(devArr)
  }

  _sumSquaredDev(numArr) {
    let meanVal = this.mean(numArr)
    let sum = 0
    for (let i in numArr) {
      let dev = this.subtract(numArr[i], meanVal)
      sum += this.square(dev)
    }
    return sum
  }

  _sumCubedDev(numArr) {
    let meanVal = this.mean(numArr)
    let sum = 0
    for (let i in numArr) {
      let dev = this.subtract(numArr[i], meanVal)
      sum += this.cube(dev)
    }
    return sum
  }
}

module.exports = { StatisticsCalculator }
