// 导入数据库
const mysql = require('mysql2')

// 建立与数据库的联系
const db = mysql.createPool({
    host: "127.0.0.1", //数据库的ip地址
    user: "root", //登录数据的账号
    password: "cdminHfq",
    database: "my_data_01"
})



// // method1:
// // 定义要插入的数据对象
// const user = { username: "eddie", passward: "676666" };
// // 实行sql语句 ？是一个占位符
// const sqlStr = 'insert into users (username,passward) values (?,?)';
// // 使用数组的方式一次为占位符赋值
// db.query(sqlStr, [user.username, user.passward], (err, results) => {
//     if (err) {
//         console.log(err.message);
//     }
//     if (results.affectedRows === 1) {
//         console.log("插入成功");
//     }
// })

// method2:快速插入：
// method1:
// 定义要插入的数据对象
const user = { username: "eleven", passward: "676668" };
// 实行sql语句 ？是一个占位符
const sqlStr = 'insert into users set ?';
// 使用数组的方式一次为占位符赋值
db.query(sqlStr, user, (err, results) => {
    if (err) {
        console.log(err.message);
    }
    if (results.affectedRows === 1) {
        console.log("插入成功");
    }
})