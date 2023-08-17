// 导入数据库
const mysql = require('mysql2')

// 建立与数据库的联系
const db = mysql.createPool({
    host: "127.0.0.1", //数据库的ip地址
    user: "root", //登录数据的账号
    password: "cdminHfq",
    database: "my_data_01"
})

// 测试是否可以正常的工作
db.query('select * from ev_user', (err, results) => {
    if (err) {
        console.log(err.message + "123");
    }

    console.log(...results);
})