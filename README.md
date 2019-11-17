## 第2章 项目构建

####  2-1 项目构建介绍 

1. 基础架构
   1. 业务逻辑
      1. 页面
      2. 交互
   2. 自动构建
      1. 编译
      2. 辅助：自动刷新、文件合并、资源压缩
   3. 服务接口
      1. 数据
      2. 接口
2. 任务自动化（gulp）
   1. 什么是任务自动化
   2. 什么是gulp
   3. gulp的作用
   4. 了解如何使用gulp完成任务自动化
3. 编译工具（babel、webpack）
   1. babel：将ES6编译成ES5
      1. 什么是babel
      2. babel的核心用法
   2. webpack：处理模块化，项目依赖
      1. 什么是webpack
      2. 了解webpack及webpack-stream的作用
4. 代码实现
   1. 创建一个ES6前端工程
   2. 完成目录结构、自动构建、服务器搭建

####  2-2 项目目录创建 

```shell
mkdir es6
cd es6
mkdir app # 前端代码
mkdir server # 服务器代码
mkdir task # 构建工具
cd app
mkdir css
mkdir js
mkdir views # 模板文件
mkdri js/class
touch js/class/test.js
touch js/index.js # 入口文件
touch views/error.ejs # 模板文件
touch views/index.ejs # 模板文件

cd es6/server
express -e . # 使用ejs模板引擎
cd .
npm install

cd es6/tasks
mkdir util
touch util/args.js

npm init # 初始化创建 package.json

touch .babelrc # babel配置
touch gulpfile.babel.js
```

####  2-3 命令行处理，创建JS编译任务脚本 

```shell
touch tasks/util/args.js
touch tasks/scripts.js
npm install gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber gulp-rename gulp-uglify gulp-util yargs --save-dev # 安装包
# 注意使用npm镜像解决网速慢的问题
# scripts.js作用：js构建
```

####  2-4 创建模板、服务任务脚本 

```shell
touch tasks/pages.js # 处理模板
touch tasks/css.js # 处理CSS
touch tasks/server.js # 处理服务器脚本
```

####  2-5 文件自动监听，项目构建测试 

## 第3章 es6语法

####  3-1 let.const命令 

#### 