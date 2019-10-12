// 异步编程解决方案
function* fn() {
  yield '你好'
  yield '中国'
  yield function hh() {
    console.log('sdfasdfasd')
  }
  return null
}

let a = fn()
console.log(a.next())
console.log(a.next())
console.log((a.next().value)())

/** 方法
 * throw
 * return
 * 
 */