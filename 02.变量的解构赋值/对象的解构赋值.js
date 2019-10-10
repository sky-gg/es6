// let { a, b } = { a: 2, b: 5 }
// console.log({ a, b })

// let { obj } = { a: 23 }
// console.log({ obj })

// let { sin, random, cos, PI } = Math
// console.log({ sin, random, cos, PI })

// let { cos: hh } = Math
// console.log({ hh })

// let { cos: hh } = Math
// console.log({ cos }) //not defined


// 默认值

// let { x = 3 } = { x: 2342 }
// console.log({ x })

// let { x: y = 3 } = { x: 4, y: 234 }
// console.log({ y })

let arr = []
let { pop, push, shift, unshift, splice, map, forEach, filter, find, findIndex, sort, join, some, reduce, indexOf, includes,every } = arr
console.log({ pop, push, shift, unshift, splice, map, forEach, filter, find, findIndex, sort, join, some, reduce, indexOf, includes,every })