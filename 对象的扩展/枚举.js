/**
 * 对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。
 * Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。
 * 所有 Class 的原型的方法都是不可枚举的。
 */
let obj = { foo: 123 };
Object.getOwnPropertyDescriptor(obj, 'foo')
/**
 * value: 1 (值)
 * configurable: true 当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
 * enumerable: true 当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。默认为 false。
 * writable: true 且仅当该属性的writable为true时，value才能被赋值运算符改变。默认为 false。
 * 
 * 
 * ------有四个操作会忽略enumerable为false的属性。
 * for...in循环：只遍历对象自身的和继承的可枚举的属性。
 * Object.keys()：返回对象自身的所有可枚举的属性的键名。
 * JSON.stringify()：只串行化对象自身的可枚举的属性。
 * Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
 **/