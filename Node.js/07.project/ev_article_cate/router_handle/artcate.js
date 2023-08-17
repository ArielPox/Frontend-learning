// 创建路由处理函数的模块

// 导入数据库的接口
const db = require('../database/db');

// 获取文章的路由处理函数
exports.getArticleCates = (req, res) => {
    // 定义sql语句
    const sql = 'select * from ev_article_cate where is_delete=1';
    // 执行sql语句
    db.query(sql, (err, results) => {
        if (err) {
            return res.cc(err);
        }
        return res.cc({
            status: 0,
            message: "获取文章分类成功",
            data: results
        })
    })

}


// 新增文章的分类的处理函数
exports.addArticleCates = (req, res) => {
    // 定义查询分类的语句 并且查重
    const sql = 'select *from ev_article_cate where names=? or alias=?';
    // 执行语句并且查重
    db.query(sql, [req.body.names, req.body.alias], (err, results) => {
        // 判断是不是重复
        if (err) {
            return res.cc(err);
        }
        // 查看客户端发送的内容
        console.log(results);

        if (results.length === 2) {
            return res.cc('分类名称与别名被占用，请更换后重试！')
        }
        // 分别判断 分类名称 和 分类别名 是否被占用
        if (results.length === 1 && results[0].names === req.body.names) {
            return res.cc('分类名称被占用，请更换后重试！')
        }
        if (results.length === 1 && results[0].alias === req.body.alias) {
            return res.cc('分类别名被占用，请更换后重试！');
        }

        // 实现更新文章分类的功能
        const sql1 = `insert into ev_article_cate set ? `
        db.query(sql1, req.body, (err, results) => {
            // 执行 SQL 语句失败
            if (err) return res.cc(err)
                // SQL 语句执行成功，但是影响行数不等于 1
            console.log(results);
            if (results.affectedRows !== 1) {
                return res.cc('更新文章分类失败！')
            }
            // 更新文章分类成功
            res.cc('更新文章分类成功！', 0)
        })
    })

}


// 添加删除文章分类的路由模块
exports.deleCateById = (req, res) => {
    // 定义删除文章分类的SQL语句
    const sql = 'update ev_article_cate set is_delete=33 where id=?';
    // 执行sql语句
    db.query(sql, req.body.id, (err, results) => {
        console.log(req.body.id);
        if (err) {
            return res.cc(err)
        }
        if (results.affectedRows !== 1) {
            return res.cc("删除文章分类失败");
        }
        res.cc("删除文章分类成功", 0);
    })
}


// 定义按照id号获取文章分类的路由模块
exports.getArticleById = (req, res) => {
    // 定义sql语句
    const sql = `select * from ev_article_cate where id=?`
    db.query(sql, req.body.id, (err, results) => {

        // 执行 SQL 语句失败
        if (err) return res.cc(err)
            // SQL 语句执行成功，但是没有查询到任何数据
        if (results.length !== 1) return res.cc('获取文章分类数据失败！')
            // 把数据响应给客户端
        res.send({
            status: 0,
            message: '获取文章分类数据成功！',
            data: results[0],
        })
    })

}