// 1.创建一个http模块
const http = require('http');

// 2.创建一个web服务器
const server = http.createServer();

// 3.为服务器绑定请求事件 监听客户端的请求
// 3.1req是请求对象 包含了与客户端相关的数据与属性
server.on('request', (req, res) => {
    const url = req.url;
    const method = req.method;
    const str = '你的url地址是: ' + url + 'and your request method is' + method + '';
    console.log(str);

    // 为了防止中文出现乱码的问题需要设置一个响应头 
    res.setHeader('Content-Type', 'text/html ; charset=utf-8');

    // res.end()向客户端响应一些内容
    res.end(str);
})

// 4.启动服务器
server.listen(8080, function() {
    console.log('server running at http://127.0.0.1:8080');
})