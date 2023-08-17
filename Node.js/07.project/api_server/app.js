// 导入必要的模块
const express = require('express');
// 创建服务器实例
const app = express();

// 导入表单验证的依赖件
const joi = require('joi')


// 配置cors跨域 npm i cors
// 在app中安装cors中间件
const cors = require('cors');
app.use(express.json()); // 解析 JSON 格式的请求体
app.use(express.urlencoded({ extended: true })); //用于解析格式是urlcode的格式的请求体

// 将cors中间件注册为全局的中间件
app.use(cors());

// 在路由之前配置解析token的文件
const expressJwt = require('express-jwt');
const config = require('./config');
app.use(expressJwt({ secret: config.jwtSecreteKey }).unless({ path: [/^\/api/] }));

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

// router 文件夹是用来存放所有路由模块
// router_handler存放路由处理函数模块
// 导入并且注册用户路由模块
const userRouter = require('./router/user');
const userInfoRouter = require('./router/userinfo');
app.use('/api', userRouter);
// 导入用户的信息的路由模块
app.use('/my', userInfoRouter);


// 配置解析表单的中间件
app.use(express.urlencoded({ extended: false }));


// 全局错误中间件
app.use(function(err, req, res, next) {
    // 验证数据失败
    if (err instanceof joi.ValidationError) {
        return res.cc(err);
    }
    if (err.name === 'UnauthorizedError') {
        return res.send("身份认证失败");
    }
    // 未知错误
    res.cc(err);

})

// 启动服务器
app.listen(8080, () => {
    console.log("this server running at http://127.0.0.1:8080");
})