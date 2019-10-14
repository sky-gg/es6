## 原生
### 水平垂直居中
* flex
* [子元素有宽高]父元素绝对定位，子元素相对定位，子元素`left: 0;right: 0;top: 0;bottom: 0;margin: auto; `
* [子元素没宽高]父元素绝对定位，子元素相对定位，子元素`top:50%;left:50%;transform: translate(-50%, -50%);`

### 三栏布局

### rem/em/px/

### 媒体查询

### 盒模型
* content + padding + border

### BFC

### animation
### 数组方法
* map
* forEach
* filter
* reduce
* push
* pop
* shift
* unshift
* splice
* sort
* join
* find
* findIndex
* every
* some
* from
* flat(Infinity)

### 类数组转换

### 箭头函数this指向

### let const var 区别

### Promise

### async await

### 闭包

### 继承

### __proto__ prototype

### instanceof (检测构造函数的 prototype 属性是否出现在某个实例对象的原型链)
```js
  let a = {}
  a.__proto__ === Object.prototype //true
  a instanceof Object //true
```

### typeof
```js
  typeof null //object
  typeof undefined //undefined
  typeof NaN //number
```

### 事件机制
* 事件捕获
* 目标
* 事件冒泡 （阻止事件冒泡 `e.stopPropagation `）

### 栈、堆

### 深拷贝、浅拷贝

## 浏览器

### 状态码

### 缓存

### cookie localStorage sessionStorage

### cookie session

### event loop

### 回流重绘
> 浏览器使用流式布局模型 (Flow Based Layout)。
> 浏览器会把HTML解析成DOM，把CSS解析成CSSOM，DOM和CSSOM合并就产生了Render Tree。
> 有了RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。

1. 回流(Reflow)
  * 当Render Tree中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。

2. 重绘(Repaint)
  * 当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

3. 性能影响：回流比重绘的代价要更高。

### 浏览器渲染机制

### 同步异步

### 服务器代理
* Access-Control-Allow-Origin: *


## vue

### 双向绑定原理

### v-model实现

### 父子组件传值

### computed、watch区别

### 生命周期

### 自定义指令

### keep-alive

### Vue.nextTick( [callback, context] )
* 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM
> 参数：{Function} [callback]， {Object} [context]

### key值的作用

## vue-router

### $route、$router的区别

### 导航守卫
1. 全局前置守卫
2. 全局解析守卫
3. 全局后置守卫
4. 路由独享的守卫
5. 组件内的守卫

### 路由懒加载

### 滚动行为（scrollBehavior）

### params、query

### 编程式导航
* router.push(location, onComplete?, onAbort?)
```js
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```
* router.replace(location, onComplete?, onAbort?)

* router.go(n)

## vuex

### 原理
![vuex](./vuex.png)

### 核心概念
1. state
  * 单一状态树
2. getter
  * 数据的简单处理，多用于展示
3. action
  * 通过`store.dispatch()`来分发action  提交的是mutation 异步 
4. mutation
  * 更新state的唯一方式 同步 
6. module