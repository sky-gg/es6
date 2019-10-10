// 声明一个只读的常量。一旦声明，常量的值就不能改变 基本数据类型修改会报错 复杂数据类型修改不会报错，不建议这么做
const STR = ''
const NUM = 0
const BOOL = true
// NUM = NUM++ //报错
// STR = STR + '23' //报错
// BOOL = !BOOL //报错

// const OBJ = { a: 1, id: 0 }
// OBJ.a = 2 //引用地址没变 不报错 最好不要这么做
// console.log('OBJ: ', OBJ);

// const ARR = []
// ARR.push(3, 4, 5, 7)
// ARR.shift()
// ARR.unshift(33)
// ARR.length = 8
// console.log(ARR)

// 不允许定义后不赋值
const love //报错
