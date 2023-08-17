//在这个自定义的模块中连接数据可的连接对象
// 导入数据库模块
const mysql = require('mysql2');

// 创建数据库对象
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'cdminHfq',
    database: 'my_data_01'
})

// 测试是否可以正常的工作 经测试成功
db.query('select 1', (err, results) => {
    if (err) {
        console.log(err.message + "123");
    }
    //打印出来的是RowDataPacket{'1':1}就是可以工作的
    console.log(results);
})

module.exports = db;