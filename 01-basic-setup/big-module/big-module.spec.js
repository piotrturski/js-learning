const big = require('../big-module')

test('folder module api exposes public api', () => {
 
    expect(big.publicApi).toBe(2)
  })

  const app = require('../app')
  const request = require('supertest');

test('should return array', done => {
  request(app)
  .get("/")
  .expect(200)
  .expect(200, [1,2,3])
  .end(done)
})
  