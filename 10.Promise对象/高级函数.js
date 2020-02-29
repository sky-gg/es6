const fs = require('fs')
fs.readFile('./name.txt', 'utf8', function(error, data) {
  out('name', data)
})
fs.readFile('./age.txt', 'utf8', function(error, data) {
  out('age', data)
})

/*
 * 要求在两个文件都读取完毕后返回如下格式：
 * {name:'王小二',age:10}
 */
function after(times, cb) {
  let userInfo = {}
  return function(key, value) {
    userInfo[key] = value
    if (--times == 0) {
      cb(userInfo)
    }
  }
}
let out = after(2, function(result) {
  console.log(result)
})