// Array.of()//[]
// Array.of(undefined)//[undefined]
// Array.of(2)//[2]

// Array() // []
// Array(3) // [, , ,]
// Array(3, 11, 8) // [3, 11, 8]

// Array.from()

let arr = [11, 9, 3, 8, null, 4, true, 12, 5]
// find 返回符合条件的第一个元素的value 新数组 不改变原数组
// let brr = arr.find((value, index, arr) => {
//   console.log({ value, index, arr })
//   return value > 4
// })
// console.log({ brr })

// findIndex 返回符合条件的第一个元素对应的下标
// let brr = arr.findIndex((value, index, arr) => {
//   console.log({ value, index, arr })
//   return value > 2
// })
// console.log({ brr })

// fill(value,[start,end]) 使用给定值，填充一个数组 起始位置(包含) 结束位置(不包含)
//new Array(3).fill(2)//[2,2,2]
// arr.fill(555, 1, 2)
// console.log({ arr })


/** 数组实例的 entries() ，keys() 和 values()
 * keys 遍历下标
 * values 遍历值
 * entries 遍历键值对
 */
// let brr = arr.entries()
// console.log(brr.next().value)
// let crr = arr.values()
// console.log(crr.next().value)
// let drr = arr.entries()
// console.log(drr.next())
// console.log(drr.next().value)
// console.log(drr.next().value)
// console.log(drr.next().value)
// console.log(drr.next())


// includes(value,[开始查找位置]) 方法返回一个布尔值，表示某个数组是否包含给定的值

// let flag1 = arr.includes(NaN)
// flag2 = arr.indexOf(NaN) //indexOf 由于是全等比较 无法比较NaN
// console.log(flag1)
// console.log(flag2)

// flat
// 二维数组转成一维数组
// console.log([1, 2, 3, 4, [6, 8, 9]].flat())
// 三维数组转成一维数组
// console.log([1, 2, 3, 4, [6, 8,[54,34], 9]].flat(2))
// 多维数组转成一维数组
// console.log([1, 2, null, undefined, [NaN, 8, ["", 34], 9]].flat(Infinity))

// flatMap(callback(currentValue[, index[, array]])) 返回新数组，对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法
// [1, 2, 3, 4].flatMap(x => [[x * 2]])

// console.log(Array(3))

/**
 * sort(callback(a,b)) callback返回值
 * 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
 * 若 a 等于 b，则返回 0。 (浏览器实现不一致)
 * 若 a 大于 b，则返回一个大于 0 的值。
 */
// console.log(arr.sort((a, b) => { return a > b ? 1 : -1 }))