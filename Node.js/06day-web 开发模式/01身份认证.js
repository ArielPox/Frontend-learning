// 服务端渲染推荐：Session认证机制  不支持跨域请求
// 1.http协议的无状态性：服务器不会保留每次的http请求的状态
// 2.突破无状态性：类似会员卡认证 称之为：cookie-存储在用户的浏览器中的不超过4kb的字符串
//   由键值对和控制cookie有效期 安全性 使用范围的可选属性组成 不同的域名下的cookie是不一样的 客户端发起请求时候
//    会将当前的域名下没有过期的cookie全部自动发送到服务区  cookie是不具有安全性的容易篡改（浏览器中可以查看数据）不可以用户存储隐式的数据
// 3.提高身份认证的安全性：类似刷卡机 认证正确的cookie



// 前后端分离 推荐使用JWT认证机制 支持跨域请求
// JWT json web token 目前最流行的跨域认证解决方案
// 用户的信息通过字符串token字符串的形式 保存到客户端的浏览器 服务器通过还原token字符串的形式认证用户的信息
// 组成：Hearder.Paylaod.signature  头部 有效荷载 签名三者由英文的.分割
// payload 是真正的用户的信息 是加密之后的字符串