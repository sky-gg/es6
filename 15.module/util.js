// 字符串解码编码
function cipherText(arr) {
  let str = '';
  arr.forEach(val => {
    str += String.fromCharCode(val)
  })
  return str
}
function plainText(str) {
  let arr = str.split('')
  let result = []
  arr.map(val => {
    result.push(val.codePointAt())
  })
  return result
}
let com = (f, g) => x => f(g(x))
let h = com(cipherText, plainText)
// console.log(h('你好世界'))
export default h