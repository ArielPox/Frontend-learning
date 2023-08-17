const express = require('express');
const app = express();

const cors = require('cors');
app.use(express.json()); // 解析 JSON 格式的请求体
app.use(express.urlencoded({ extended: true })); //用于解析格式是urlcode的格式的请求体

// 将cors中间件注册为全局的中间件
app.use(cors());

// 为res.send()做一个中间件只要是res发生失败的情况就会自动的调用
app.use(function(req, res, next) {
    res.cc = function(err, status = 1) {
        this.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next();
})

// 导入文章分类的路由模块
const artCateRouter = require('./router/artcate');

// 为文章的分录路由挂载一个同意的访问前缀
app.use('/my/artcate', artCateRouter);

app.listen(8080, () => {
    console.log("this server running at http://127.0.0.1:8080");
})