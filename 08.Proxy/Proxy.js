/**
 * 代理 顾名思义对操作进行拦截，
 * var proxy = new Proxy(target, handler);
 * target: 所要拦截的目标对象
 * handler: 用来定制拦截行为
 */
let obj = {
  id: 1
}
let proxyObj = new Proxy(obj, {
  get(target, propKey, receiver) {
    // console.log("读取", target === obj, propKey, receiver === proxyObj)
    return target[propKey]
  },
  set(target, propKey, value, receiver) {
    if (!(propKey in target)) {
      console.log('新增')
    } else if (target[propKey] !== value) {
      console.log('修改')
    }
    target[propKey] = value
  }
})
proxyObj.ida
console.log(proxyObj.id)
proxyObj.id = 4
proxyObj.id = 4
proxyObj.ida = 4
// console.log(obj)
/** Proxy 支持的拦截操作一览，一共 13 种。
 *
 * get(target【要拦截的对象】, propKey【对象的属性】, [receiver]【拦截后的对象】) ：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
 *
 * set(target, propKey, value, [receiver]) ：拦截对象属性的设置
 *
 * has(target, propKey) ：拦截propKey in proxy的操作，返回一个布尔值。
 *
 * deleteProperty(target, propKey) ：拦截delete proxy[propKey]的操作，返回一个布尔值。
 *
 * ownKeys(target) ：拦截Object.getOwnPropertyNames(proxy) 、Object.getOwnPropertySymbols(proxy) 、Object.keys(proxy) 、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
 *
 * getOwnPropertyDescriptor(target, propKey) ：拦截Object.getOwnPropertyDescriptor(proxy, propKey) ，返回属性的描述对象。
 *
 * defineProperty(target, propKey, propDesc) ：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs) ，返回一个布尔值。
 *
 * preventExtensions(target) ：拦截Object.preventExtensions(proxy) ，返回一个布尔值。
 *
 * getPrototypeOf(target) ：拦截Object.getPrototypeOf(proxy) ，返回一个对象。
 *
 * isExtensible(target) ：拦截Object.isExtensible(proxy) ，返回一个布尔值。
 *
 * setPrototypeOf(target, proto) ：拦截Object.setPrototypeOf(proxy, proto) ，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
 *
 * apply(target, object, args) ：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args) 、proxy.call(object, ...args) 、proxy.apply(...) 。
 *
 * construct(target, args) ：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args) 。
 */