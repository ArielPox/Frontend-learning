// tip:错误级别的中间件要定义在所有的路由的后面
const express = require('express');

const app = express();

// 定义路由
app.get('/', (req, res) => {
    // 人为制造的错误
    throw new Error("服务器发生错误");
    res.send('htme page');
})

// 定义一个错误级别中间件 捕获项目的错误问题
app.use((err, req, res, next) => {
    console.log("发生了错误" + err.message);
    res.send("Error:" + err.message);
    next();
})


// 启动服务器
app.listen(8080, function() {
    console.log("server running at http://127.0.0.1:8080");
})