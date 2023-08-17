// 获取用户的基本信息
// 导入数据库的操作的模块
const db = require('../db/index');
const bcrypt = require('bcryptjs');


exports.getUserinfo = (req, res) => {

    const userInfo = req.body;

    // 定义sql语句根据用户的id查询用户的基本的信息 需要排除用户的密码
    const sql = 'select id,username from ev_user where id=?';

    // 执行sql语句
    db.query(sql, userInfo.id, (err, results) => {
            // 执行sql语句失败
            if (err) {
                return res.cc(err);
            }

            // 执行语句成功但是查询到的语句不是一条
            if (results.length !== 1) {
                return res.cc("获取用户信息失败");
            }

            // 将消息返回给客户端
            res.send({
                status: 0,
                message: "获取用户成功",
                data: results[0]
            })

        })
        // res.send('ok');
}


// 更新用户的信息的处理函数
exports.updataUserInfo = (req, res) => {

    const userinfo = req.body;

    // 定义sql语句
    const sql = 'update ev_user set ? where id=?';
    // 执行语句并且传入参数
    db.query(sql, [userinfo, userinfo.id], (err, results) => {
        // 执行语句失败
        if (err) {
            return res.cc(err);
        }
        // 执行sql语句但是影响到的行数不是1
        if (results.affectedRows !== 1) {
            console.log(results.length);
            return res.cc("修改用户的信息失败");
        }

        // 修改用户的信息
        return res.cc("修改用户的信息成功");
    })
}


//-----------修改用户的密码的处理函数 首先验证旧的密码 新的密码不可以和旧的密码一样
exports.updatePassword = (req, res) => {
    console.log("这是服务端输入的内容：");
    console.log(req.body)

    // 定义sql语句修改用户的密码 首先查询用户是否存在
    const sql = 'select *from ev_user where id=?';

    // 执行sql语句 查询目标的id用户是不是存在
    db.query(sql, req.user.id, (err, results) => {
            console.log("这是查询到的数据库中的内容");
            console.log(results);
            // 执行sql语句失败的时候
            if (err) {
                return res.cc(err);
            }

            // 检查目标的id用户是否存在
            if (results.length !== 1) {
                return res.cc("用户不存在");
            }

            // 判断提交的旧密码是不是正确的密码
            // 1.首先导入bcrypt 之后比较输入的密码与数据库中的密码是不是一样的 结果返回是为正 否为假
            bcrypt.compare(req.body.oldPwd, results[0].password, (err, isequal) => {
                if (err) {
                    return err;
                }
                if (isequal !== true) {
                    return res.cc("密码匹配失败")
                } else {
                    return res.cc("密码匹配成功");
                }
            });
        })
        // 定义对新密码进行验证的sql语句
    const sqlnew = 'update ev_user set password=? where id=?';
    // 对新密码进行bcy加密处理
    const newPwd = bcrypt.hashSync(req.body.newPwd, 10);
    // 执行sql语句对目标id用户的密码进行更新
    db.query(sqlnew, [newPwd, req.user.id], (err, results) => {
        if (err) {
            return res.cc(err);
        }

        if (results.length !== 1) {
            // 执行sql语句成功 但是影响的行数不只是1
            return res.cc("更新密码失败");
        }

        // 更新密码成功
        return res.cc("更新密码成功");
    })



}