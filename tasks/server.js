import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve',(cb)=>{
  // 如果不是处于监听状态，直接返回回调
  if(!args.watch) return cb();
  // 如果是处于监听状态，返回服务器
  // 创建服务器，在当前命令行下执行这个脚本
  var server = liveserver.new(['--harmony','server/bin/www']);
  // 启动服务器
  server.start();
  // 服务器文件发生改变的时候，浏览器自动刷新
  // 监听server下的js和ejs，做热更新
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    // 通知服务器
    server.notify.apply(server,[file]);
  })
  // 服务器路由和接口发送变化，server需要重启服务
  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    // 重启服务器
    server.start.bind(server)()
  });
})
