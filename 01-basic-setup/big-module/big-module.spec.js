const big = require('../big-module')

test('folder module api exposes public api', () => {
 
    expect(big.publicApi).toBe(2)
  })

  const app = require('../infrastructure/server')
  const request = require('supertest');

  const api = request(app)

test('dummy to test port usage', done => {
  api
  .get('/')
  .end(done)
})

test('should return array', done => {
  api
  .get("/")
  .expect(200)
  .expect(200, [1,2,3])
  .end(done)
})
  
test('should return 404 on nonexisting route', done => {

  api
    .get('/nonexisting')
    .expect(404, done)
})