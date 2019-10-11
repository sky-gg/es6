/** WeakSet
 * 成员只能是对象
 * 
 */
// const arr = new WeakSet()
// arr.set({})
// arr.set({})
// arr.set({})
// console.log(arr)

let brr = new WeakSet()

/** WeakSet 结构有以下三个方法。
  * WeakSet.prototype.add(value) ：向 WeakSet 实例添加一个新成员。
  * WeakSet.prototype.delete(value) ：清除 WeakSet 实例的指定成员。
  * WeakSet.prototype.has(value) ：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。
*/

brr.add(Date)
brr.delete(Date)
brr.has(Date)
console.log({ brr })