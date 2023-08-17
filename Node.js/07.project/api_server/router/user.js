//this is uers`s router module

const express = require('express');
//创建路由对象
const router = express();


// 导入用户路由处理函数的模块
const userHandler = require('../router_handler/user.js');
// ------------------验证表单
//1.导入表单的验证的模块的中间价
const expressJoi = require('@escook/express-joi');
// 2.导入需要验证规则的对象
const { regSchema } = require('../schema/user');



// 注册新用户
// 3.1对当前请求携带的数据进行验证
// 3.2数据验证通过之后会就当前的请求流转给下一个路由函数
// 3.3数据验证失败之后 终止后面的代码 抛出一个全局error 之后就在全局错误识别中间件进行处理
router.post('/reguser', expressJoi(regSchema), userHandler.regUser);

// 登录
router.post('/login', expressJoi(regSchema), userHandler.login);

// 将路由对象共享出去
module.exports = router;