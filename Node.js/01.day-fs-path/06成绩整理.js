const fs = require('fs');

fs.readFile('./files/成绩-ok.txt', 'utf-8', function(err, dataStr) {
    //    1.读取文件
    if (err) {
        console.log("读取成绩文件失败" + err.message);
    }
    console.log("读取成绩文件成功" + dataStr);

    //2 操作文件中的数据 存到另一个文件
    // 2.1将成绩按照空格分割为数组
    const arr = dataStr.split(' ');
    const arrNew = [];

    arr.forEach(element => {
        arrNew.push(element.replace(':', '='));
    });
    const newStr = arrNew.join('\r\n');
    console.log(newStr);
})