import gulp from 'gulp';
import del from 'del';
import args from './util/args';

// 使用gulp创建脚本编译任务
gulp.task('clean',()=>{
  // 清空两个目录
  return del(['server/public','server/views'])
})
