// 路由模块
const express = require('express');

// 挂载一个路由
const router = express.Router();


// 导入数据的验证的模块 对数据进行验证
const expressJoi = require('@escook/express-joi');
const { add_cate_schema, delete_cate_schema, getbyid_cate_schema } = require('../schame/artcate');

//导入文章分类的路由处理函数的模块
const artcate_handler = require('../router_handle/artcate');



// 获取文章的分类的列表数据并且添加上数据验证表单这个中间件
router.get('/cates', expressJoi(add_cate_schema), artcate_handler.getArticleCates);

// 添加新增的文章的路由
router.post('/addcates', expressJoi(add_cate_schema), artcate_handler.addArticleCates);

// 添加删除文章分类的路由模块
router.post('/deletecates', expressJoi(delete_cate_schema), artcate_handler.deleCateById);

// 添加按照id号获取文章的分类的路由处理函数
router.get('/getArtById', expressJoi(getbyid_cate_schema), artcate_handler.getArticleById);
module.exports = router;