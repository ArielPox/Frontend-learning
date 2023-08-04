// 这是包的入口文件
const dataFormate = require('./dataFormat.js');
const htmlEscape = require('./htmlEscape');
const htmlUnEscape = require('./htmlUnexcape')

//向外暴露格式化的成员 ...指的是展开的意思
module.exports = {
    ...dataFormate,
    ...htmlEscape,
    ...htmlUnEscape
}