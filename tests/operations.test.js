const { Operations } = require("../src/operations")

test("Operations class cannot be instantiated", () => {
  expect(() => {
    new Operations()
  }).toThrow("Static class, do not instantiate")
})
