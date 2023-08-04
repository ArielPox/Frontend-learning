// express.static()创建一个静态的资源服务器 将文件目录下的资源对外开放// 导入express
const express = require('express');

// 创建web服务器
const app = express();

// 调用express.static方法 对外提供资源,tip:假如要使用多个静态资源的目录 只需要多次的调用app.use(express.static('./filename'));
// 谁先调用就先打开谁 找到目标的资源为止
app.use(express.static('./public'));

// 挂载资源目录前缀
// app.use('/public', express.static('./public'))


// 启动服务器
app.listen(8080, (req, res) => {
    console.log("express server running at http://127.0.0.1");
})