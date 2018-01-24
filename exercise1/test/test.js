var assert = require('assert')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      // assert.equal(-1, [1, 2, 3]/* 填空题 */)
      assert.equal(-1, [1, 2, 3].indexOf(4)/* 填空题 */)
    })
  })
})

describe('assert', function () {
  it('a和b应当深度相等', function () {
    var a = {
      c: {
        e: 1
      }
    }
    var b = {
      c: {
        e: 1
      }
    }
    // 修改下面代码使得满足测试描述
    // assert.equal(a, b) // 需要使用 深度相等 deepEqual
    assert.deepEqual(a, b)
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // 修改下面代码使得满足测试描述
    // fn()
    assert.throws(fn, Error) // 抛出的错误符合某个构造函数
  })
})



// 测试用例不成功
describe('assertError', function() {
  it('抛出 AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }', function() {
    var objA = {
      a: {
        b: 1
      }
    }

    var objB = {
      a: {
        b: 2
      }
    }

    assert.deepEqual(objA, objB, '不相同')
  })

  it('抛出 AssertionError [ERR_ASSERTION]', function() {
    assert.fail(1, 2, '错误信息');
  })
})
