// 1.导入模块
const http = require('http');
const fs = require('fs');
const path = require('path');

// 2.1创建web服务器
const server = http.createServer();

// 2.2监听web服务器
server.on('request', (req, res) => {

    // 获取客户端请求的url地址
    const url = req.url;
    // 将请求的地址映射为具体的文件的存放的路径
    let fpath = '';
    if (url == '/') {
        // 请求的路径是/ 手动的指定文件的存放的路径
        fpath = path.join(__dirname, './clock/index.html');
    } else {
        //  请求的路径不是/ 就动态的拼接存放的地址
        fpath = path.join(__dirname, './clock', url);
    }

    // 根据映射的文件的地址读取文件的内容
    fs.readFile(fpath, (err, dataStr) => {
        if (err) {
            // 读取失败向客户端响应
            return res.end("404 not found");
        }
        // 读取成功就将读取的内容反映给客户端
        res.end(dataStr);

    })

})

// 2.3启动web服务器
server.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080');
})