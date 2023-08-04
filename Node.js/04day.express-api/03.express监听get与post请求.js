// 导入express
const express = require('express');

// 创建web服务器
const app = express();

// 监听客户端的get与post请求 并向客户端相应一些内容
app.get('/user', (req, res) => {
    // 调用express的send方法 向客户端响应一个json对象
    res.send({ name: "andy", age: 12, gender: "man" });
})

app.post('/user', (req, res) => {
    res.send("请求成功");
})

app.get('/user', (req, res) => {
    // 通过req.query可以查询客户端发送的参数 默认情况下req.query是一个空的对象
    console.log(req.query);
    res.send(req.query);
})

// 动态处理参数 可以通过：参数名称 创建一个
app.get('/user/:id/:name', (req, res) => {

    // req.params()动态的匹配url参数 默认为一个空对象
    console.log(req.params);
    res.send(req.params);
})



// 启动web服务器
app.listen(8080, () => {
    console.log("express severe running at http://127.0.0.1");
})