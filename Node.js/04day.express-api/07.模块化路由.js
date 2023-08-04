const express = require('express');

const app = express();


// 加载路由对象
const router = require('./07.router');
// 注册路由模块  tip:app.user()就是用于注册全局中间件 同样是可以添加模块前缀
app.use(router);

app.listen(8080, (req, res) => {
    console.log("running at http://127.0.0.1:8080");
})