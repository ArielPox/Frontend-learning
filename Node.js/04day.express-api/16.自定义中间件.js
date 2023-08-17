const express = require('express');
// 导入内置模块queryString解析请求体数据
const qs = require('querystring');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// 解析表单数据的中间件
app.use(function(req, res, next) {
    // 1.str用于定义客户端发过来的请求体的数据
    let str = '';
    // 2.监听req的data事件
    req.on('data', (chunk) => {
        // 将客户端发送的数据进行拼接
        str += chunk;
    })

    // 3.监听req的end事件
    req.on('end', () => {
        console.log(qs.parse(str));
        // 将解析出的对象挂载在req.body供下游使用
        req.body = qs.parse(str);
    })
    next();
})

app.post('/user', (req, res) => {
    res.send(req.body);
})


// 监听启动
app.listen(8080, () => {
    console.log("this server running at http://127.0.0.1:8080")
})