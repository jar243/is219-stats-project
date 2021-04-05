const { Calculator } = require("../src/calculator")
const { RandomGen } = require("../src/randomgen")
const { roundTo } = require("../src/utils")

const RAND_MIN = -1000
const RAND_MAX = 1000
const DECIMAL_PLACES = 4

test("Calculator can be constructed", () => {
  let calc = new Calculator()
})

const calc = new Calculator()

test("Can add individual numbers", () => {
  let num1 = RandomGen.randomNum(RAND_MIN, RAND_MAX)
  let num2 = RandomGen.randomNum(RAND_MIN, RAND_MAX)
  let result = calc.add(num1, num2)
  expect(result).toBe(num1 + num2)
})

test("Can add array of numbers", () => {
  let numArr = RandomGen.randomNumArr(100, RAND_MIN, RAND_MIN)
  let sum = numArr.reduce(function (a, b) {
    return a + b
  }, 0)

  let result = calc.add(numArr)
  expect(result).toBe(sum)
})

test("Can subtract", () => {
  let num1 = RandomGen.randomNum(RAND_MIN, RAND_MAX)
  let num2 = RandomGen.randomNum(RAND_MIN, RAND_MAX)
  let result = calc.subtract(num1, num2)
  expect(result).toBe(num1 - num2)
})

test("Can multiply", () => {
  let num1 = RandomGen.randomNum(RAND_MIN, RAND_MAX)
  let num2 = RandomGen.randomNum(RAND_MIN, RAND_MAX)
  let answer = roundTo(num1 * num2, DECIMAL_PLACES)

  let result = roundTo(calc.multiply(num1, num2), DECIMAL_PLACES)
  expect(result).toBe(answer)
})

test("Can divide", () => {
  let num1 = RandomGen.randomNum(RAND_MIN, RAND_MAX)
  let num2 = RandomGen.randomNum(1, RAND_MAX)
  let answer = roundTo(num1 / num2, DECIMAL_PLACES)

  let result = roundTo(calc.divide(num1, num2), DECIMAL_PLACES)
  expect(result).toBe(answer)
})

test("Will not divide by zero", () => {
  let num1 = 3
  expect(() => {
    calc.divide(num1, 0)
  }).toThrow("Cannot divide by zero")
})

test("Can cube", () => {
  let base = RandomGen.randomNum(RAND_MIN, RAND_MAX)
  let sqr = Math.pow(base, 3)

  let result = calc.cube(base)
  expect(result).toBe(sqr)
})

test("Can square", () => {
  let base = RandomGen.randomNum(RAND_MIN, RAND_MAX)
  let sqr = Math.pow(base, 2)

  let result = calc.square(base)
  expect(result).toBe(sqr)
})

test("Can square root", () => {
  let base = RandomGen.randomNum(RAND_MIN, RAND_MAX)
  let root = Math.pow(base, 0.5)

  let result = calc.sqRoot(base)
  expect(result).toBe(root)
})

test("Can retrieve last result", () => {
  calc.getLastResult()
})
