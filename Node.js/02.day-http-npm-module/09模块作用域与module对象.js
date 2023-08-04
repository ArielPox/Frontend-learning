// 1.在自定义的模块中的变量成员只可以在当前的模块内被访问 称之为模块化作用域:防止全局变量的污染问题

// 2.module对象 向外共享，模块作用域的成员 里面村粗了当前模块的有关的信息
console.log(module);
/* PS D:\资源\前端学习\Node.js\02.day> node .\09模块作用域与module对象.js
Module {
  id: '.',
  path: 'D:\\资源\\前端学习\\Node.js\\02.day',
  exports: {},
  filename: 'D:\\资源\\前端学习\\Node.js\\02.day\\09模块作用域与module对象.js',
  loaded: false,
  children: [],
  paths: [
    'D:\\资源\\前端学习\\Node.js\\02.day\\node_modules',
    'D:\\资源\\前端学习\\Node.js\\node_modules',
    'D:\\资源\\前端学习\\node_modules',
    'D:\\资源\\node_modules',
    'D:\\node_modules'
  ]
} */