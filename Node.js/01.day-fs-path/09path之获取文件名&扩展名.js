const path = require('path');

// 定义文件路径

const fpath = '/a/b/index.html';

// 获取文件的名称 包含扩展名
const fullName = path.basename(fpath);
console.log(fullName);

//只获取文件的名称
const nameWithoutExt = path.basename(fpath, 'html');
console.log(nameWithoutExt);

// 获取文件的的扩展名
const extName = path.extname(fpath);
console.log(extName);