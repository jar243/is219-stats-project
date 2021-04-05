const { RandomGen } = require("../src/randomgen")

test("Random number between range", () => {
  let min = 0
  let max = 10
  let result = RandomGen.randomNum(min, max)
  expect(min <= result).toBe(true)
  expect(result <= max).toBe(true)
})

test("Seeded number between range", () => {
  let seed = 1234
  let min = RandomGen.randomNum(-1000, 900)
  let max = RandomGen.randomNum(min, 1100)

  let result = RandomGen.seededNum(seed, min, max)
  expect(min <= result).toBe(true)
  expect(result <= max).toBe(true)
})

test("Random number array", () => {
  let size = Math.floor(RandomGen.randomNum(0, 1000))
  let min = Math.floor(RandomGen.randomNum(-1000, 900))
  let max = Math.floor(RandomGen.randomNum(min, 1100))

  let result = RandomGen.randomNumArr(size, min, max)
  for (let i in result) {
    let num = result[i]
    expect(min <= num).toBe(true)
    expect(num <= max).toBe(true)
  }
  expect(result.length).toBe(size)
})

test("Seeded number array", () => {
  let size = Math.floor(RandomGen.randomNum(0, 1000))
  let seed = 1234
  let min = Math.floor(RandomGen.randomNum(-1000, 900))
  let max = Math.floor(RandomGen.randomNum(min, 1100))

  let result = RandomGen.seededNumArr(size, seed, min, max)
  for (let i in result) {
    let num = result[i]
    expect(min <= num).toBe(true)
    expect(num <= max).toBe(true)
  }
  expect(result.length).toBe(size)
})

test("Random single select from array", () => {
  let size = Math.floor(RandomGen.randomNum(0, 1000))
  let min = Math.floor(RandomGen.randomNum(-1000, 900))
  let max = Math.floor(RandomGen.randomNum(min, 1100))

  let numArr = RandomGen.randomNumArr(size, min, max)
  let result = RandomGen.randomSelect(numArr)
  expect(min <= result).toBe(true)
  expect(result <= max).toBe(true)
})

test("Seeded single select from array", () => {
  let size = Math.floor(RandomGen.randomNum(0, 1000))
  let seed = 1234
  let min = Math.floor(RandomGen.randomNum(-1000, 900))
  let max = Math.floor(RandomGen.randomNum(min, 1100))

  let numArr = RandomGen.randomNumArr(size, min, max)
  let result = RandomGen.seededSelect(numArr, seed)
  expect(min <= result).toBe(true)
  expect(result <= max).toBe(true)
})

test("Random many select from array", () => {
  let size = Math.floor(RandomGen.randomNum(0, 1000))
  let selSize = Math.floor(RandomGen.randomNum(1, size - 1))
  let min = Math.floor(RandomGen.randomNum(-1000, 900))
  let max = Math.floor(RandomGen.randomNum(min, 1100))

  let numArr = RandomGen.randomNumArr(size, min, max)
  let result = RandomGen.randomSelectMany(numArr, selSize)
  for (let i in result) {
    let num = result[i]
    expect(min <= num).toBe(true)
    expect(num <= max).toBe(true)
  }
  expect(result.length).toBe(selSize)
})

test("Seeded many select from array", () => {
  let size = Math.floor(RandomGen.randomNum(0, 1000))
  let selSize = Math.floor(RandomGen.randomNum(1, size - 1))
  let seed = 1234
  let min = Math.floor(RandomGen.randomNum(-1000, 900))
  let max = Math.floor(RandomGen.randomNum(min, 1100))

  let numArr = RandomGen.randomNumArr(size, min, max)
  let result = RandomGen.seededSelectMany(numArr, selSize, seed)
  for (let i in result) {
    let num = result[i]
    expect(min <= num).toBe(true)
    expect(num <= max).toBe(true)
  }
  expect(result.length).toBe(selSize)
})
