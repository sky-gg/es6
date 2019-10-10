//展开运算符 一维数组 一层对象 深拷贝，多维数组或多层对象 浅拷贝
// let arr = [3, 4, 45, 6]
// let brr = [4, 6, 45, 34, 456]
// let crr = [...arr, ...brr]
// console.log('crr: ', crr);
// console.log(...arr)

// let obj = {
//   a: 1,
//   b: '好好',
//   c: true,
//   d: function() {
//     console.log(this.a)
//   }
// }
// console.log({ ...obj })

// Object.assign 浅拷贝

// let obj3 = {
//   name: "Gucci",
//   age: 13,
//   gender: "female",
//   hobby: {
//     a: 'Chinese',
//     b: 'Math',
//     c: 'English'
//   }
// };
// let obj4 = Object.assign({}, obj3);
// obj4.hobby.a = "Math";
// obj3.age = 1000;
// console.log(obj3);
// console.log(obj4.age);