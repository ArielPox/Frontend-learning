// 局部：不使用app.use()定义的中间件
// 定义一个全局生效的中间件函数：app.use(中间件函数)

const express = require('express');

const app = express();

// 定义一个中间件函数
const mw = function(req, res, next) {
    console.log("这是一个局部中间件函数");
    // next()控制流转关系 转交给下一个中间件或者是路由
    next();
}


// 参数mw就是表示调用这个中间件 并且不会影响其他的请求 :tip：调用多个中间件 可以用','分隔，也可以放在[]
app.get('/', mw, (req, res) => {
    res.send("this is first page");
})


app.post('/user', (req, res) => {
    res.send("this is the last page");
})

// 监听启动
app.listen(8080, () => {
    console.log("this server running at http://127.0.0.1:8080")
})