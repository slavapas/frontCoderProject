'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }

}

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});


$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug', 'stylus', 'scripts:lib', 'scripts', 'img:dev'), // запускаем паралельно/одновременно
    $.gulp.parallel('watch', 'serve') // запускаем паралельно/одновременно
));

//to launch this commnad just write GULP BUILD, and all images from folder IMG will be minified
$.gulp.task('build', $.gulp.series(
    $.gulp.parallel('pug', 'stylus', 'scripts:lib', 'scripts', 'img:build'), // запускаем паралельно/одновременно
    $.gulp.parallel('watch', 'serve') // запускаем паралельно/одновременно
));