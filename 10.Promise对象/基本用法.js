/**
 * （1）对象的状态不受外界影响
 * （2）一旦状态改变，就不会再变，任何时候都可以得到这个结果
 * 
 * 三种状态 padding、fulfilled、rejected
 */
// let promise = new Promise(function(resolve, reject) {
//   if (true) {
//     resolve(data)
//   } else {
//     reject(data)
//   }
// })

//方法：

// Promise.prototype.then()
// Promise.prototype.catch()
// Promise.all([]) 接口全部返回成功时继续执行
// Promise.prototype.race([]) //谁先返回谁先执行
// Promise.prototype.finally([])//无论是否成功最后都会调用