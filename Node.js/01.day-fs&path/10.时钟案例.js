// 1.1 导入 fs 模块
const fs = require('fs')
    // 1.2 导入 path 模块
const path = require('path')

// 1.3 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, 'index.html'), 'utf8', function(err, dataStr) {
    // 2.2 读取 HTML 文件失败
    if (err) return console.log('读取HTML文件失败！' + err.message)
    console.log("文件读取成功");
    // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出 css, js, html 文件
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);

})

// 3.1 定义处理 css 样式的方法
function resolveCSS(htmlStr) {
    // 3.2 使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr);
    console.log("未处理css=>" + r1);
    // 3.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    console.log("去除标签之后的css=>" + newCSS);
    // 3.4 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.css 的文件里面
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function(err) {
        if (err) return console.log('写入 CSS 样式失败！' + err.message)
        console.log('写入样式文件成功！')
    })
}

// 处理js文件
function resolveJS(htmlStr) {
    const r2 = regScript.exec(htmlStr);
    console.log("未处理JS=>" + r2);
    const newJS = r2[0].replace('<script>', '').replace('</script>', '');
    console.log("处理之后的JS=>" + newJS);

    // 写入文件
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err) {
        if (err) {
            return console.log("导入失败");
        }
        console.log("导入js文件成功")
    })
}

//处理html
function resolveHTML(htmlStr) {
    const newHTML = htmlStr.replace(regStyle, '  <link rel="stylesheet" href="./index.css">').replace(regScript, '  <script src="./index.js"></script>');
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err) {
        if (err) {
            console.log("写入html文件失败");
        }
        console.log("写入html文件成功");
    })
}