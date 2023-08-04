// 导入数据库
const mysql = require('mysql2')

// 建立与数据库的联系
const db = mysql.createPool({
    host: "127.0.0.1", //数据库的ip地址
    user: "root", //登录数据的账号
    password: "cdminHfq",
    database: "my_data_01"
})

//                  更新
// method1：
/* // 定义要更改的对象
const user = { id: 3, username: "six", passward: '00000' };
// 实行sql语句 ？是一个占位符
const sqlStr = 'update users set username=?,passward=? where id=?';
// 使用数组的方式一次为占位符赋值
db.query(sqlStr, [user.username, user.passward, user.id], (err, results) => {
    if (err) {
        console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log("更新成功");
    }
}) */

// // 便捷方式：method2：
// // 定义要更改的对象
// const user = { id: 12, username: "火锅", passward: '666779' };
// // 实行sql语句 ？是一个占位符
// const sqlStr = 'update users set ? where id=?';
// // 使用数组的方式一次为占位符赋值
// db.query(sqlStr, [user, user.id], (err, results) => {
//     if (err) {
//         console.log(err.message);
//     }
//     if (results.affectedRows === 1) {
//         console.log("更新成功");
//     }
// })

//            删除

// method1:DELETE 彻底删除
/* const sqlStr = "delete from users where id>=?";


// 多个占位符 匹配值的时候可以将值放在数组中 假如只有一个占位符 可以省略[]
db.query(sqlStr, 7, (err, results) => {
    if (err) {
        console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log("删除成功");
    }
}) */

// method2:标记删除： 设置一个deleteStatus 标记删除的状态 而不是真的将数据彻底的删除 改造为更新
const sqlStr = "update users set status=? where id=?";
db.query(sqlStr, [1, 5], (err, results) => {
    if (err) {
        console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log("标记删除成功");
    }
})