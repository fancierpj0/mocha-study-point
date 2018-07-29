const {assert} = require('chai');

//不调用done就表示该单元测试没有完成

// describe('async', () => {
//   it('async add', (done) => {
//     setTimeout(() => {
//       assert.equal(1 + 2, 4);
//     }, 2000);
//   });
//
//   // 1) async
//   // async add:
//   //   Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. (D:\WEB\archive\i-react-workbench\unittest\test\02.async.test.js)
//
// });


/*
  异步的两种实现
  1.done
  2.return promise + resolve
  ,或则不return ，而使用await + async

  默认一个it的测试时间为2s
  mocha -t 5000
*/

describe('async', () => {
  it('async add', (done) => {
    setTimeout(() => {
      assert.equal(1 + 2, 3);
      done();
    }, 3000);
  });

  it('async add', () => {
    return new Promise(function (resolve,reject) {
      setTimeout(() => {
        assert.equal(1 + 2, 3);
        resolve();
      }, 1500);
    });
  });

  it('async add', async () => {
    await new Promise(function (resolve,reject) {
      setTimeout(() => {
        assert.equal(1 + 2, 3);
        resolve();
      }, 1500);
    });
  });

});
