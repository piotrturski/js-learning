const calculator = require('./calculator')

test.each([
  [1,1,2],
  [1,2,3],
])('sum %p + %o should equal %o', (x,y,result) => {
 
  expect(calculator.sum(x,y)).toBe(result)
})