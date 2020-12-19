const fs = require('fs')
fs.readFile(__dirname + '/name.txt', 'utf8', function(error, data) {
    out('name', data)
})
fs.readFile(__dirname + '/age.txt', 'utf8', function(error, data) {
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

/**
 * 防抖：
 * 指触发事件后在 n 秒内函数只能执行一次， 如果在 n 秒内又触发了事件， 则会重新计算函数执行时间。
 * 
 * */

/**
 * 节流：
 * 指连续触发事件但是在 n 秒中只执行一次函数
 * */

//  将一个函数两秒后再执行
function waitMoment(time, cb) {
    return function() {
        setTimeout(() => {
            cb()
        }, time)
    }
}

function fn() {
    console.log('你好')
}
let a = waitMoment(2000, fn)
a()
a()
a()