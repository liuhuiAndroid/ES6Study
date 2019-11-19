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

```shell
touch tasks/browser.js # 浏览器监听
touch tasks/clean.js # 清空指定文件的任务
npm install gulp-live-server del gulp-util --save-dev # 安装包
touch tasks/build.js # 串联所有任务
touch tasks/default.js # gulp 不带参数会直接执行此脚本

gulp # 执行报错，需要gulpfile.babel.js
npm install babel-loader babel-core babel-preset-env webpack --save-dev
touch gulpfile.babel.js
npm install require-dir --save-dev
gulp # 执行报错
touch .babelrc # 配置
npm install babel-preset-es2015 --save-dev
npm install gulp-sequence --save-dev
gulp # 运行成功
gulp --watch # 运行成功
# 访问localhost:3000
vi app/views/index.ejs # 刷新浏览器

npm install connect-livereload --save-dev
server/app.js 添加：app.use(require('connect-livereload')()); # 此时热更新才生效

vi app/js/index.js # 此时js也可以自动刷新
```

## 第3章 es6语法

#### 3-1 let.const

1. 作用域的概念

2. 如何使用let和const

3. ```shell
   touch app/js/class/lesson1.js
   index.js中引入lesson1.js
   gulp --watch 
   ```

#### 3-2 解构赋值

1. 什么是解构赋值

2. 解构赋值的分类

   数组解构赋值	对象解构赋值	字符串解构赋值

   布尔值解构赋值	函数参数解构赋值	数值解构赋值

#### 3-3 正则扩展

1. 正则新增特性

2. 构造函数的变化、正则方法的扩展、u修饰符、y修饰符、s修饰符

   看不懂，跳过

#### 3-4 字符串扩展

1. 字符串新增特性
2. Unicode表示法  遍历接口  模板字符串  新增方法

```shell
npm install babel-polyfill --save-dev # 安装babel-polyfill 库，兼容ES6补丁方法
index.js import 'babel-polyfill';
```



#### 3-6 数值扩展

#### 3-7 数组扩展

数组新增特性 lesson6.js

数组Api比较重要

#### 3-8 函数扩展

函数新增特性：参数默认值、rest参数、扩展运算符、剪头函数、this绑定、尾调用

#### 3-9 对象扩展 lesson8.js

函数新增特性：简洁表示法、属性表达式、扩展运算符、Object新增方法

#### 3-10 Symbol用法

#### 3-11 set-map数据结构

#### 3-12 map-set与数组和对象的比较

#### 3-13 Proxy和Reflect

#### 3-14 类与对象

#### 3-15 Promise

#### 3-16 Iterator

#### 3-17 Generator

#### 3-18 Decorators

#### 3-19 Module模块化