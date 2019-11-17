import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

// 处理CSS
gulp.task('css',()=>{
  // 打开所有的css文件
  return gulp.src('app/**/*.css')
    //  css文件拷贝到server/public目录
    .pipe(gulp.dest('server/public'))
})
