const express = require('express');

//创建路由对象
const router = express();
// 导入验证数据合法性的的中间件
const expressJoi = require('@escook/express-joi');
// 导入需要验证的规则对象 之后放入处理函数
const { update_userInfo_schema, update_UserInfoPasswors_schema } = require('../schema/user');


const userInfo_handle = require('../router_handler/userinfo');

//获取用户的信息的处理函数 
router.get('/userinfo', expressJoi(update_userInfo_schema), userInfo_handle.getUserinfo);

// 更新用户的基本的信息的处理函数
router.post('/userinfo', expressJoi(update_userInfo_schema), userInfo_handle.updataUserInfo);

// 修改用户的密码的处理函数
router.post('/updatePwd', expressJoi(update_UserInfoPasswors_schema), userInfo_handle.updatePassword);
module.exports = router;