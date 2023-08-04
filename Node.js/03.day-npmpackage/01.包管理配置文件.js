// 1由于多人协作的时候 会遇见第三方库体积较大的问题 所以只需要上传项目的源代码就可 所以要剔除node_modules 就是将node_modules文件添加到 .gitignore的忽略文件中
// 2在项目的根目录中要创建一个package.json的文件记录项目中安装了什么包 便于团队合作

//3终端 快速的创建package.json文件 nmp init -y项目的文件夹只可以是英文的不可以有空格与中文

// 4dependencies"里面的就是安装的包的名称与版本号

// 5.一次性转安装所有的包 当拿到一个剔除了node_module的项目 就要根据package.json将所有的包安装进来
// 当前的package.json在终端直接输入npm install/i 就可以安装所有的package

// 6.删除安装的包 nmp uninstall 包的名称

// 7.将安装的包记录到package.json的deVDependenciesh中：  nmp i packageName -D

// 8.deVDependenciesh与dependencies区别：
// 开发依赖包：deVDependenciesh：只在项目的开发阶段才用到的包 项目上线之后就不会用到
// 核心依赖包：dependencies：在项目开发与项目上线之后都会用到的包