// let fn = (a, b) => (a + b)
// let result = fn(2, 4)
// console.log(result)

// 函数式编程
// const compose = (f, g) => x => f(g(x))
// const f = x => x + 1
// const g = x => x * 4
// const fg = compose(f, g)
// console.log(fg(3)) //13

// let fn = num => { console.log(num) }
// fn('sdfa')

// let getTempItem = id => ({ id: id, name: "Temp" });
// console.log('getTempItem: ', getTempItem(0));

// const full = ({ first, last }) => first + ' ' + last;
// let obj = {
//   first: '里',
//   last: '好好混'
// }
// let res = full(obj)
// console.log({ res })

// var obj = {//对象不构成单独的作用域
//   a: 10,
//   b: function() {
//     console.log('this: ', this);
//     console.log(this.a); //10
//   },
//   c: function() {
//     // console.log('this: ', this);
//     return () => {
//       console.log(this.a); //10
//     }
//   },
//   d: () => {
//     console.log(this)
//     console.log(this.a)
//   }
// }
// obj.b();
// // obj.c()();
// obj.d();