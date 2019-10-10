// let [a, b, c] = [1, 3, 4]
// console.log({ a, b, c })

// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log({ foo, bar, baz })

// let [x, , y] = [2, 4, 5]
// console.log({ x, y })

// let [foo] = [];
// console.log({ foo })

// let [bar, foo] = [1];
// console.log({ foo, bar })

// let [foo = true] = []
// console.log('foo: ', foo);

// let [x, y = 2] = [1]
// console.log(x)

function f() {
  console.log('aaa');
}

let [x = f()] = [undefined];
console.log('x: ', x);
