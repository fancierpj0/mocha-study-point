//express 测试
const request = require('supertest');
const app = require('./server');
const {assert} = require('chai');

describe('test api', function () {
  it('test /', function (done) {
    request(app)
    //res.send('ok');
      .get('/')
      .expect('Content-Type', /test\/html/)
      .expect('Content-Length', 2)
      .expect(200)
      .end(function (err, response) {
        assert.equal(response.text, 'ok');
        done();
      });
  });

  it('test /post', function (done) {
    request(app)
    //res.send('ok');
      .post('/post')
      .type('form') //form-encoded
      .send({name:'ahhh'})
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, response) {
        assert.equal(response.text, '{"name":"ahhh"}');
        done();
      });
  });
});
