const { validateNum, validateArray } = require("../src/utils")

test("Will not validate a string", () => {
  let testvar = "3.1"
  expect(() => {
    validateNum(testvar)
  }).toThrow("Input cannot be string")
})

test("Will not validate a non-number", () => {
  let testvar = ["abc"]
  expect(() => {
    validateNum(testvar)
  }).toThrow("Input must be a number")
})

test("Will not validate an non-array", () => {
  let testvar = "abc"
  expect(() => {
    validateArray(testvar)
  }).toThrow("Input must be an array")
})

test("Will not validate an empty array", () => {
  let testvar = []
  expect(() => {
    validateArray(testvar)
  }).toThrow("Array must have at least one number")
})
