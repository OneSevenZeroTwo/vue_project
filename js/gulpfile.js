var gulp = require('gulp'),
    concat = require('gulp-concat');
 
gulp.task('testConcat', function () {
    gulp.src('./*.js')
        .pipe(concat('all.js'))//合并后的文件名
        .pipe(gulp.dest('./'));
});