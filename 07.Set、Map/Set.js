/**
 * Set 类似于数组，但是成员都是唯一的 不允许重复
 */
// let arr = new Set();//不加分号会报错，代码禁止以 [ 开头
// [23, 4, 56, 6, 56, 7, 4, { id: 1, name: '解决' }, { id: 1, name: '解决' }].forEach(item => arr.add(item))
// console.log(arr)

// 去重
// let brr = [23, 4, 56, 6, 56, 7, 4, { id: 1, name: '解决' }, { id: 1, name: '解决' }]
// console.log([...new Set(brr)])

// 去重排序
// let fn = (a, b) => {
//   return a > b ? 1 : -1
// }
// console.log([...new Set(brr)].sort(fn))

/**
 * 四个操作方法。
 * Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
 * Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
 * Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
 * Set.prototype.clear()：清除所有成员，没有返回值。
 */
// arr.add(4) //返回Set数组
// arr.delete(6)//Boolean
// arr.has(23)//Boolean
// arr.clear()//没有返回值
// console.log('arr: ', arr);

/**
 * 遍历操作
 * Set 结构的实例有四个遍历方法，可以用于遍历成员。
 * Set.prototype.keys() ：返回键名的遍历器
 * Set.prototype.values() ：返回键值的遍历器
 * Set.prototype.entries() ：返回键值对的遍历器
 * Set.prototype.forEach() ：使用回调函数遍历每个成员
 */