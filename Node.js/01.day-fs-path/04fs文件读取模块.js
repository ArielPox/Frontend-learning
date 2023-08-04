// 1.导入文件
const fs = require('fs');

// 2.调用读取文件方法 参数一：文件路径（必须） 参数二:读取文件的编码格式默认utf-8 参数三：回调函数（必须）
fs.readFile('./filetest.txt', 'utf-8', function(err, dataStr) {
    // 2.1读取成功 err 为null
    // 2.2读取失败 err 为错误对象 dataStr为undefined
    if (err) {
        return console.log("读取文件失败" + err);
    }
    console.log("读取文件成功" + dataStr);
})