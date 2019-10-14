const PREFIX = '/api/'
export const GET_USER_INFO = PREFIX + 'getUserInfo'


export let num = 0
export function addNum() {
  console.log(this, 'this')//undefined
  console.log(arguments, 'arguments')//

  num++
}