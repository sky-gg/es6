/** WeakMap
 * WeakMap的键名所指向的对象，不计入垃圾回收机制，无法遍历。
 * WeakMap只接受对象作为键名（ null除外）， 不接受其他类型的值作为键名。
 * 弱引用有助于防止内存泄漏
 */
let wm = new WeakMap()
let key = {
  id: 1,
  name: 'jack'
}

console.log('wm: ', wm.set(key, 1), wm);

console.log('wm: ', wm.get(key));

console.log('wm: ', wm.has(key));
wm.delete(key)
console.log('wm: ', wm);
/**
 * 四个方法：
 * get(key) 一个参数，返回获取到的值
 * set(a,b) 第一个参数是存的对象，第二个是关联的对象 返回WeakMap
 * has(key) 返回布尔值
 * delete(key) 返回布尔值
 */