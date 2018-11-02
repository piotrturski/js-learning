const calculator = require('./calculator')

test('sum 1 + 2 to equal 3', () => {
 
  expect(calculator.sum(1,2)).toBe(3)
})