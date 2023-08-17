// 表单的优化原则
//安装npm install @escook/express-joi
//依赖npm install joi@17.4.0
// 导入
const express = require('express')
const app = express()
    // 导入 Joi 来定义验证规则
const Joi = require('joi')
    // 1. 导入 @escook/express-joi
const expressJoi = require('@escook/express-joi')

// 定义验证的规则
const username = Joi.string().min(1).max(15).required();
const password = Joi.string().pattern(/^[\S]{6,1000}$/);
const id = Joi.number().integer().min(1).required();

// 定义注册登录的验证规则对象
exports.regSchema = {
    body: {
        username,
        password,
        id
    },
}


// 验证更新规则对象
exports.update_userInfo_schema = {
    body: {
        username,
        password,
        id
    },
}


// 设定验证的密码的规则 新的密码不可以和旧的密码一样
exports.update_UserInfoPasswors_schema = {
    body: {
        // 验证req.body.oldPwd是不是与数据库中的是一样的
        oldPwd: password,
        // 新的密码要与旧的密码不一致
        // 解读：
        // 1. joi.ref('oldPwd') 表示 newPwd 的值必须和 oldPwd 的值保持一致
        // 2. joi.not(joi.ref('oldPwd')) 表示 newPwd 的值不能等于 oldPwd 的值
        // 3. .concat() 用于合并 joi.not(joi.ref('oldPwd')) 和 password 这两条验证规则
        newPwd: Joi.not(Joi.ref('oldPwd')).concat(password),
    },
}