const express = require('express');

const router = express.Router();

// 挂载对应的路由

// 编写get接口
router.get('/get', (req, res) => {
    // 获取客户端的查询字符串 发送到服务器
    const query = req.query;
    // 数据响应在客户端
    res.send({
        status: 0,
        msg: "get请求成功",
        data: query
    });
})

// 编写post接口
router.post('/post', (req, res) => {
    // 获取请求体中的数据
    const body = req.body;

    res.send({
        status: 0,
        msg: "post请求成功",
        data: body
    });

})

module.exports = router;