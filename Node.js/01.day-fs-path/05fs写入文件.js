const fs = require('fs');

// tip： writeFile() 只可以创建文件 但是不可以创建文件夹 重复写内容 那么新的内容会覆盖旧的内容

// 2.参数1:文件路径 参数2：写入内容必备 参数三：写入格式默认UTF-8 参数四：回调函数必备
fs.writeFile('/filetest1.txt', '写入的内容', function(err) {
    // 2.1写入成功err为null
    // 2.2写入失败 err为错误对象
    if (err) {
        return console.log("文件写入失败" + err);
    }
    console.log("文件写入成功");
})