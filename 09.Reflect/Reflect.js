/** 为了操作对象
 *  将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。
 *  修改某些Object方法的返回结果，让其变得更合理
 *  让Object操作都变成函数行为
 *  Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。
 */
let obj = {
  "id": 1
}
let loggedObj = new Proxy(obj, {
  get: function(target, name) {
    console.log('get', target, name);
    return Reflect.get(target, name);
  },
  deleteProperty: function(target, name) {
    console.log('delete' + name);
    return Reflect.deleteProperty(target, name);
  },
  has: function(target, name) {
    console.log('has' + name);
    return Reflect.has(target, name);
  }
});
loggedObj.has(obj, "id")
console.log("id" in obj)
/*
Reflect对象一共有 13 个静态方法。

Reflect.apply(target, thisArg, args)
Reflect.construct(target, args)
Reflect.get(target, name, receiver)
Reflect.set(target, name, value, receiver)
Reflect.defineProperty(target, name, desc)
Reflect.deleteProperty(target, name)
Reflect.has(target, name)
Reflect.ownKeys(target)
Reflect.isExtensible(target)
Reflect.preventExtensions(target)
Reflect.getOwnPropertyDescriptor(target, name)
Reflect.getPrototypeOf(target)
Reflect.setPrototypeOf(target, prototype)

*/