// Object.is() 用来比较两个值是否严格相等

// Object.is('foo', 'foo') // true
// Object.is({}, {}) // false
// Object.is(NaN, NaN) // true

/**
 * Object.assign(target,[源对象])方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
 * 源对象如果有属性相同，后面的覆盖前面的
 * 浅拷贝(相对于复杂对象)
 *
 */
// let obj1 = { a: 1, b: 2, c: 3 }
// let obj2 = { a: 3, d: 4 }
// let obj3 = {}
// Object.assign(obj3, obj1, obj2)//类似于{...obj1,...obj2}
// console.log('obj3: ', obj3);

/**
 * Object.getOwnPropertyDescriptors()方法，返回指定对象所有自身属性（非继承属性）的描述对象。
*/
// const obj = {
//   foo: 123,
//   get bar() { return 'abc' }
// };

// console.log(Object.getOwnPropertyDescriptors(obj))
// {
//   foo:
//   {
//     value: 123,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   bar:
//   {
//     get: [Function: get bar],
//     set: undefined,
//     enumerable: true,
//     configurable: true
//   }
// }

/**
 * Object.setPrototypeOf(obj, prototype)
 * 用来设置一个对象的prototype对象，返回参数对象本身
 *
*/
// let proto = {};
// let obj = { x: 10 };
// Object.setPrototypeOf(obj, proto);

// proto.y = 20;
// proto.z = 40;

// obj.x // 10
// obj.y // 20
// obj.z // 40

/**
 * Object.getPrototypeOf(obj)
 *
 */

// function Rectangle() {
//   // ...
// }

// const rec = new Rectangle();

// Object.getPrototypeOf(rec) === Rectangle.prototype
// // true

// Object.setPrototypeOf(rec, Object.prototype);
// Object.getPrototypeOf(rec) === Rectangle.prototype
// // false

/**
 * Object.keys()，Object.values()，Object.entries()
 */
// var obj = { foo: 'bar', baz: 42 };
// Object.keys(obj)

// const obj = { foo: 'bar', baz: 42 };
// Object.values(obj) // ["bar", 42]

// const obj = { foo: 'bar', baz: 42 };
// Object.entries(obj)// [ ["foo", "bar"], ["baz", 42] ]

/**
 * Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。
*/
Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
])