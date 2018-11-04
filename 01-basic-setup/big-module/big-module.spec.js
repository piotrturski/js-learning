const big = require('../big-module')

test('folder module api exposes public api', () => {
 
    expect(big.publicApi).toBe(2)
  })