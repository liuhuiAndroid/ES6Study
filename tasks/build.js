import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

// 使用gulp创建脚本编译任务
gulp.task('build',
    // 清理server目录，拷贝css，编译模板，执行脚本
    gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']));
