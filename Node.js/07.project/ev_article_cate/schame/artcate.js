// 验证表单的数据

// 1.导入定义验证的规则的模块
const Joi = require('joi');

const names = Joi.string().required();
const alias = Joi.string().alphanum().required();
const id = Joi.number().integer().min(1).required();

// 验证的对象
exports.add_cate_schema = {
    body: {
        names,
        alias
    },
}

// 验证删除的对象的id是否符合
exports.delete_cate_schema = {
    body: {
        id,
    },
}

exports.getbyid_cate_schema = {
    body: {
        id,
    },
}