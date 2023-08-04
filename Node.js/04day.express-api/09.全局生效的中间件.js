//全局生效中间件： 只要是客户端发起的请求都会触发的中间件      定义一个全局生效的中间件函数：app.use(中间件函数)

const express = require('express');

const app = express();

// 定义一个中间件函数
const mw = function(req, res, next) {
    console.log("这是一个中间件函数");
    // next()控制流转关系 转交给下一个中间件或者是路由
    next();
}

// 定义全局生效中间件
app.use(mw);

app.get('/', (req, res) => {
    res.send("this is first page");
})


app.post('/user', (req, res) => {
    res.send("this is the last page");
})

// 监听启动
app.listen(8080, () => {
    console.log("this server running at http://127.0.0.1:8080")
})