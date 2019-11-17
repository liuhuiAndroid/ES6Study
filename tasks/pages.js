import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

// 处理模板
gulp.task('pages',()=>{
  // 打开所有的ejs文件
  return gulp.src('app/**/*.ejs')
    //  模板文件拷贝到server目录
    .pipe(gulp.dest('server'))
    //  监听是否热更新
    .pipe(gulpif(args.watch,livereload()))
})
