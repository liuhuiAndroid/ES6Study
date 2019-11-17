import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';

// 使用gulp创建脚本编译任务
gulp.task('scripts',()=>{
  // 打开app/js/index.js文件
  return gulp.src(['app/js/index.js'])
    //  处理异常
    .pipe(plumber({
      errorHandle:function(){

      }
    }))
    //  文件重命名
    .pipe(named())
    //  对js进行编译
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    //  编译后的文件路径
    .pipe(gulp.dest('server/public/js'))
    //  压缩重命名
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
    //  压缩
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    //  重新存储位置
    .pipe(gulp.dest('server/public/js'))
    //  自动刷新
    .pipe(gulpif(args.watch,livereload()))
})
