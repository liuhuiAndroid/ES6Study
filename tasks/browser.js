import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

// 使用gulp创建脚本编译任务
gulp.task('browser',(cb)=>{
  // 如果不是处于监听状态，直接返回回调
  if(!args.watch) return cb();
  // 监听原始目录文件，启动对应脚本任务
  gulp.watch('app/**/*.js',['scripts']);
  gulp.watch('app/**/*.ejs',['pages']);
  gulp.watch('app/**/*.css',['css']);
});
