const { StatisticsCalculator } = require("../src/statistics-calculator")
const { RandomGen } = require("../src/randomgen")
const { roundTo } = require("../src/utils")
const stats = require("simple-statistics")

const ARR_MIN = -1000
const ARR_MAX = 1000
const ARR_SIZE = 100
const DECIMAL_PLACES = 4

test("Calculator can be constructed", () => {
  let c = new StatisticsCalculator()
})

const statcalc = new StatisticsCalculator()

test("Mean", () => {
  let numArr = RandomGen.randomNumArr(ARR_SIZE, ARR_MIN, ARR_MAX)
  let answer = roundTo(stats.mean(numArr), DECIMAL_PLACES)
  let result = roundTo(statcalc.mean(numArr), DECIMAL_PLACES)
  expect(result).toBe(answer)
})

test("Median", () => {
  let numArr = RandomGen.randomNumArr(ARR_SIZE, ARR_MIN, ARR_MAX)
  let answer = roundTo(stats.median(numArr), DECIMAL_PLACES)
  let result = roundTo(statcalc.median(numArr), DECIMAL_PLACES)
  expect(result).toBe(answer)

  numArr = RandomGen.randomNumArr(99, ARR_MIN, ARR_MAX)
  answer = roundTo(stats.median(numArr), DECIMAL_PLACES)
  result = roundTo(statcalc.median(numArr), DECIMAL_PLACES)
  expect(result).toBe(answer)
})

test("Modes", () => {
  let numArr = RandomGen.randomNumArr(ARR_SIZE, ARR_MIN, ARR_MAX)
  let answer = roundTo(stats.mode(numArr), DECIMAL_PLACES)
  let result = statcalc.modes(numArr)

  let correctFlag = false
  for (let i in result) {
    let roundedNum = roundTo(result[i], DECIMAL_PLACES)
    if (roundedNum === answer) {
      correctFlag = true
      break
    }
  }
  expect(correctFlag).toBe(true)
})

test("Variance", () => {
  let numArr = RandomGen.randomNumArr(ARR_SIZE, ARR_MIN, ARR_MAX)
  let answer = roundTo(stats.variance(numArr), DECIMAL_PLACES)
  let result = roundTo(statcalc.variance(numArr), DECIMAL_PLACES)
  expect(result).toBe(answer)
})

test("Standard Deviation", () => {
  let numArr = RandomGen.randomNumArr(ARR_SIZE, ARR_MIN, ARR_MAX)
  let answer = roundTo(stats.standardDeviation(numArr), DECIMAL_PLACES)
  let result = roundTo(statcalc.stdDeviation(numArr), DECIMAL_PLACES)
  expect(result).toBe(answer)
})

test("Skewness", () => {
  let numArr = RandomGen.randomNumArr(ARR_SIZE, ARR_MIN, ARR_MAX)
  let answer = roundTo(stats.sampleSkewness(numArr), DECIMAL_PLACES)
  let result = roundTo(statcalc.skewness(numArr), DECIMAL_PLACES)
  expect(result).toBe(answer)
})

test("Z-Score", () => {
  let numArr = RandomGen.randomNumArr(ARR_SIZE, ARR_MIN, ARR_MAX)
  let testVal = RandomGen.randomSelect(numArr)

  let mean = stats.mean(numArr)
  let std = stats.standardDeviation(numArr)
  let answer = roundTo(stats.zScore(testVal, mean, std), DECIMAL_PLACES)

  let result = roundTo(statcalc.zScore(testVal, numArr), DECIMAL_PLACES)
  expect(result).toBe(answer)
})

test("Median Absolute Deviation", () => {
  let numArr = RandomGen.randomNumArr(ARR_SIZE, ARR_MIN, ARR_MAX)
  let answer = roundTo(stats.medianAbsoluteDeviation(numArr), DECIMAL_PLACES)
  let result = roundTo(statcalc.medianAbsoluteDev(numArr), DECIMAL_PLACES)
  expect(result).toBe(answer)
})
