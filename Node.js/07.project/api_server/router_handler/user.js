// 这里定义用户相关的路由处理函数 供router/user.js调用

// 导入数据库的操作模块
const { urlencoded } = require('express');
const db = require('../db/index');
// 导入加密的模块
const bcrypt = require('bcryptjs');
// 导入生成token字符的包
const jwtToken = require('jsonwebtoken');
// 4.3导入config文件
const config = require('../config');

// 使用exports对象向外共享下面的两个路由处理函数
exports.regUser = (req, res) => {

    const userinfo = req.body;
    console.log(userinfo);
    // 对表单中的数据进行合法的验证
    if (!userinfo.username || !userinfo.password) {
        return res.cc("用户名称或者是账号不合法");
    }


    // 检测用户名是不是被占用
    const sql = 'select * from ev_users where username=?';
    db.query(sql, [userinfo.username], (err, results) => {
        // 执行sql语句失败
        if (err) {
            return res.cc(err)
        }
        // 用户被占用 
        if (results.length > 0) {
            return res.cc("用户名称已被占用");
        }
    })

    // 对用户的密码进行加密
    // bcrypt.hashSync(明文密码，返回的随机的长度)
    userinfo.password = bcrypt.hashSync(userinfo.password, 10);
    // console.log(userinfo);

    // 插入新的用户
    // 定义插入用户的sql语句
    const addUsers = 'insert into ev_user set ?';
    // db.query()执行sql语句 插入用户
    db.query(addUsers, { id: userinfo.id, username: userinfo.username, password: userinfo.password }, (err, results) => {
        if (err) {
            return res.cc("发生错误")
        }

        if (results.affectedRows !== 1) {
            return res.cc("注册失败");
        }
        // 注册成功
        return res.cc("注册成功", 0);
    })

}


// 客户端登录
exports.login = (req, res) => {

    const userinfo = req.body;
    console.log("post发出的请求的数据是:")
    console.log(userinfo)
        // 对表单中的数据进行合法的验证
        // 定义sql语句
    const sqlStr = 'select * from ev_user where username=?';

    // db.query执行sql语句 查询用户的数据
    db.query(sqlStr, userinfo.username, function(err, results) {
        // 执行sql语句失败
        if (err) {
            return res.cc(err);
        }
        console.log("数据库中查询到的查询到数据是")
        console.log(results)
            // sql语句成功但是查询到的数据的条数不等于1
        if (results.length !== 1) {
            return res.cc("登录失败");
        }

        // 判断用户输入的密码是否与数据库中的密码是一致的
        if (results[0].password !== userinfo.password) {
            return res.cc("密码错误");
        }


        // --------4生成jwt的token字符串
        // 4.1:es6高级语法快速的剔除密码与头像的值
        const user = {...results[0], password: '', user_pic: '' }
            // 4.2安装并且引入jsonwebtoken@8.5.1包 生成token字符串
            // 创建config.js文件向外共享加密和还原的jwtsecret字符串
            // 4.4生成token字符串有效期是10hour
        const tokenStr = jwtToken.sign(user, config.jwtSecreteKey, { expiresIn: config.expiresIn });
        // 将生成的token字符串返回给客户端
        res.send({
            status: '0',
            message: '成功',
            token: tokenStr
        })
    })
}