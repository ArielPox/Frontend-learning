// 常用的有三个:
// 1.express.static:用于快速的托管静态资源的内置的中间件
// 2.express.json：用于解析json格式的请求体数据 但是有兼容性
// 3.express.urlencoded解析url-encode格式的请求体：
// 使用方法都是放进app.use()中  特殊的app.use(express.urlencoded({extended:false}));