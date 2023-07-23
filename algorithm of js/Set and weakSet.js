// es6
// WeakSet只可以添加对象元素
// 垃圾回收的机制是 假如没有被引用的对象 就会被回收掉

// Set是强引用 就算添加的对象在之后被设置为null依然对他进行引用 从而不会被垃圾回收掉 假如很多数据的话就会对内存造成浪费 使用weakSet就不会出现这种状况
// weakSet 是弱引用 不对数据进行引用 数据被清空之后就无法访问 

// 箭头函数的优点简洁：箭头函数的语法比普通函数更简洁，可以让代码更易读易懂。
// 省略return关键字：当箭头函数只有一行代码时，可以省略return关键字。
// 没有自己的this：箭头函数的this指向定义时所在的作用域，而不是执行时所在的作用域。这意味着在箭头函数中，可以避免一些this相关的错误。
// 更好的作为回调函数：箭头函数更适合作为回调函数，因为它们不会创建新的作用域，这意味着它们不会影响到外部作用域中的变量。