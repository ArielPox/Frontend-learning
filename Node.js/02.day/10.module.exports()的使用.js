// 在自定义的模块中可以使用module.exports(),将模块中的成员共享出去 供外界使用

// 在使用require（）导入一个自定义的模块的时候 得到的成员就是那个模块的module.exports()指向的对象，
// 导入的结果只会与module.exports()的最新的指向为准
const m = require('./test.01');
console.log(m);

// export与module.exports指向的是同一个对象