// 多个中间件共享的是同一份req与res 上游可以定义属性与方法 下游也可以使用

const express = require('express');

const app = express();



// 定义全局生效中间件简化形式 可以重复使用 定义多个全局中间件
app.use((req, res, next) => {
    // 获取请求到达服务器的时间
    const time = Date.now();
    // 为req对象挂载当前时间属性 共享给后面的所有的路由
    req.startTime = time;
    console.log("调用第一个中间件")
    next();

});

app.use((req, res, next) => {
    console.log("调用第一个中间件")
    next();
});


app.get('/', (req, res) => {

    res.send("this is first page" + req.startTime);
})


app.post('/user', (req, res) => {
    res.send("this is the last page" + req.startTime);
})

// 监听启动
app.listen(8080, () => {
    console.log("this server running at http://127.0.0.1:8080")
})