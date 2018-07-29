//npm run mocha 会自动查找.test.js结尾的文件
const {assert} = require('chai');
const {add, minus, multiply, divide} = require('./calculator');

//我们可以把多个测试用例分成一个组
//mocha会引入 describe it

describe('calculator', () => {
  it('add', () => {
    assert.equal(add(1, 2), 3);
  });

  it('minus', () => {
    assert.equal(minus(5, 2), 3);
  });

  it('multiply', () => {
    assert.equal(multiply(2, 2), 4);
  });

  it('divide', () => {
    assert.equal(divide(4, 2), 2);
  });
});
