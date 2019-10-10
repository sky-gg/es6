// 代码块内有效
// {
//   let a = 1
//   var b = 2
// }
// console.log(a)
// console.log(b)

// for (var i = 0; i < 10; i++) {
//   // 
// }
// console.log(i)//10

// for (let i = 0; i < 10; i++) {
//   // 
// }
// console.log(i)//not defined

// var a = []
// for (var i = 0; i < 3; i++) {
//   a[i] = function() {
//     console.log(i)
//   }
// }
/** 全局作用域 i
 * i = 0; a = [function(){ console.log(i) }]  
 * i = 1; a = [function(){ console.log(i) },function(){ console.log(i) }]
 * i = 2; a = [function(){ console.log(i) },function(){ console.log(i) },function(){ console.log(i) }]
 * i = 3
**/

// var a = []
// for (let i = 0; i < 3; i++) {
//   a[i] = function() {
//     console.log(i)
//   }
// }
/** 局部作用域 i
 * i = 0; a = [function(){ console.log(0) }]
 * i = 1; a = [function(){ console.log(0) },function(){ console.log(1) }]
 * i = 2; a = [function(){ console.log(0) },function(){ console.log(1) },function(){ console.log(2) }]
 * i = 3
**/
// a[1]()

// for (let i = 0; i < 3; i++) {//父作用域
//   let i = 'asdfasd'//子作用域
//   console.log(i)
// }

// console.log(a)//undefined 变量提升
// var a = '（づ￣3￣）づ╭❤～'

// console.log(b)//not defined 变量不提升
// let b = '您奶奶个腿儿'

// var tmp = 123;

// if (true) {
//   tmp = 'abc';//ReferenceError:tmp is not defined 暂时性死区（花括号包裹内，只要存在let const就会形成块级作用域，未声明就使用就会报错）
//   let tmp;
// }

// if (true) {
//   console.log(a)
//   console.log(b)
//   let b = 'addd'
//   var a = 'asdf'
// }

// function bar(x = y, y = 2) {
//   return [x, y];
// }

// bar(); // 报错

// function bar(x = 2, y = x) {
//   return [x, y];
// }

// bar(); // 报错
// var a = a
// console.log('a: ', a);
// let b = b
// console.log('b: ', b);//报错

// 不允许重复声明
// if(true){
//   var a = 3;
//   let a = 5;
// }//SyntaxError: Identifier 'a' has already been declared

// function fn1(arg) {
//   {
//     let arg
//   }
// }
// fn1()//新的块级作用域 没问题

// function fn2(arg) {
//   let arg
// }
// fn2()//有问题

// ES5 环境
// function f() { console.log('I am outside!'); }

// (function() {
//   function f() { console.log('I am inside!'); }
//   if (false) {
//   }
//   f();
// }());

// 浏览器的 ES6 环境
// function f() { console.log('I am outside!'); }

// (function() {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }

//   f();
// }());
// Uncaught TypeError: f is not a function

// 大括号不可省略
// 第一种写法，报错
// if (true) let x = 1;

// 第二种写法，不报错
// if (true) {
//   let x = 1;
// }