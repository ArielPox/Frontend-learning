const express = require('express');

const app = express();

// 定义一个中间件函数
const mw = function(req, res, next) {
    console.log("这是一个中间件函数");
    // next()控制流转关系 转交给下一个中间件或者是路由
    next();
}


// 监听启动
app.listen(8080, () => {
    console.log("this server running at http://127.0.0.1:8080")
})