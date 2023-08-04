//全局生效中间件： 只要是客户端发起的请求都会触发的中间件      定义一个全局生效的中间件函数：app.use(中间件函数)

const express = require('express');

const app = express();

// 导入路由模块
const apirouter = require('./17.apiRouter');

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));

// 把路由模块注册到app上
app.use('/api', apirouter);


// 监听启动
app.listen(8080, () => {
    console.log("this server running at http://127.0.0.1:8080")
})