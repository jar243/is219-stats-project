function validateNum(num) {
  // REQUIREMENT 5: Validate all number inputs
  if (typeof num === "string") {
    throw "Input cannot be string"
  }
  if (isNaN(num)) {
    throw "Input must be a number"
  }
  return num
}

function validateArray(arr) {
  if (arr instanceof Array === false) {
    throw "Input must be an array"
  }
  if (arr.length === 0) {
    // REQUIREMENT 7: Empty array exception
    throw "Array must have at least one number"
  }
  return arr.map(validateNum)
}

function sortArray(arr) {
  return validateArray(arr).sort((a, b) => a - b)
}

function roundTo(input, places) {
  let mod = Math.pow(10, places)
  return Math.round(input * mod) / mod
}

module.exports = { validateNum, validateArray, sortArray, roundTo }
