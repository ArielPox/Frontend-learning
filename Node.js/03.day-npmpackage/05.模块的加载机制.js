// 优先从缓存里面加载模块加快加载效率

// 内置的模块的加载的优先级是最高的

// 自定义的模块的加载机制：没有指定./或者../开头的都会默认为是内置模块 而报错 假如没有加上扩展名 会分别自动加上js json node 扩展名 直到全部加载 失败为止

// 第三方模块的加载机制： 没有找到就会向父目录向上找 直到根目录为止