// 新的基本数据类型 Symbol 
// let s = Symbol('你好')
// console.log(typeof s)
// console.log(s.description)

// let mySymbol = Symbol();

// // 第一种写法
// let a = {};
// a[mySymbol] = 'Hello!';

// // 第二种写法
// let a = {
//   [mySymbol]: 'Hello!'
// };

// // 第三种写法
// let a = {};
// Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// // 以上写法都得到同样结果
// a[mySymbol] // "Hello!"

/**
 * Object.getOwnPropertySymbols() 用于Symbol的遍历
 * 返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
 */
const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

const objectSymbols = Object.getOwnPropertySymbols(obj);

console.log('objectSymbols: ', objectSymbols);
// [Symbol(a), Symbol(b)]

/**
 * Symbol 独一无二，可带参数，可转布尔值，不可转数字，不能与其他数据类型进行运算
 */