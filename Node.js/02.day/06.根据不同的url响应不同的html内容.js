const http = require('http');

const server = http.createServer();


server.on('request', (req, res) => {
    const url = req.url;

    let content = '404 NOT FOUND';

    //判断用户请求的页面
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }

    // 设置响应；   // 为了防止中文出现乱码的问题需要设置一个响应头 
    res.setHeader('Content-Type', 'text/html ; charset=utf-8');

    // res.end()向客户端响应一些内容
    res.end(content);

})


server.listen(8080, () => {
    console.log("server running at http:..127.0.0.1:8080");
})