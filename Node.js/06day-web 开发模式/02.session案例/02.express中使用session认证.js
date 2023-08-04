// 导入中间件
const session = require('express-session');
const express = require('express');

const app = express();

// 2.配资session中间件
app.use(session({
    // secret的属性可以是任意的字符串
    secret: "mysession",
    // 固定写法
    resave: false,
    saveUninitialized: true
}))

// 托管静态的页面
app.use(express.static('./pages'));

// 解析post提交过来的数据
app.use(express.urlencoded({ extended: false }));

// 登录api接口
app.post('/api/login', (req, res) => {
    // 判断提交的信息是否准确
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        console.log("登录失败")
        return res.send({
            status: 1,
            msg: "fail to login in"
        });
    }

    console.log("登录成功！")
        // 登录成功之后将用户的信息保存到session中
    req.session.user = req.body; //用户信息
    req.session.islogin = true; //用户登录状态
    res.send({ status: 0, msg: "login in succeed" });
})

// 获取用户的登录姓名的接口
app.get('/api/username', (req, res) => {
    if (!req.session.islogin) {
        res.send({
            status: 1,
            msg: "fail"
        })
    }
    console.log("退出成功");
    res.send({ status: 0, msg: "success", username: req.session.user.username });
})


// 退出登录的接口
app.post('/api/logout', (req, res) => {
    // 清空用户的信息
    req.session.destroy();
    res.send({
        status: 0,
        msg: "logout seccess"
    })

})


// 启动服务器
app.listen(8080, () => {
    console.log("service running at http://127.0.0.1:8080");
})