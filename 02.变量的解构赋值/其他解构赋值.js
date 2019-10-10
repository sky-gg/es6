// 字符串的解构赋值
// let [a, b, c, d, e] = '我爱你中国'
// console.log({ a, b, c, d, e })

// let { length } = '你好'
// console.log({ length })

// 数值和布尔值的解构赋值

// let { toString, toFixed, valueOf, __proto__ } = 23
// console.log({ toString, toFixed, valueOf, __proto__ })

// for in; Object.keys;Object.values  给定对象的所有可枚举属性的字符串数组。
// Object.getOwnPropertyNames(obj)    返回一个数组，包含对象自身的所有属性（包含不可枚举属性）
// console.log(
//   Object.getOwnPropertyNames(__proto__)
// );

// 函数参数的解构赋值

// function add([x, y]) {
//   return x + y;
// }

// add([1, 2]); // 3

function fn(x = 3) {
  console.log(x)
}
fn(23)