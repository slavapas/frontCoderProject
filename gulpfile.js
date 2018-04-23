'use strict';

//variable declaration 
var gulp = require ('gulp'); 
var gp   = require ('gulp-load-plugins')(); 
var browserSync = require('browser-sync').create();



// Static server
gulp.task('serve', function() { // переименуем browser-sync в serve
    browserSync.init({
        server: {
            baseDir: "./build"  // здесь добавляем откуда он должен взять файлы        
            }
        });
browserSync.watch('build', browserSync.reload)  // добовляем эту строку сцелью чтобы browserSync отслеживал папку build и когда там будут изменения он перезагружал браузер
});


//pug task
gulp.task('pug', function(){
    return gulp.src('src/pug/pages/*.pug')
        .pipe(gp.pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'))
        .on('end',browserSync.reload);
 })

//stylus task
gulp.task('stylus', function(){
    return gulp.src('src/static/stylus/*.styl')
        .pipe(gp.sourcemaps.init())
        .pipe(gp.stylus({}))
        .pipe(gp.autoprefixer({
            browsers: ['last 10 versions']
        }))
        .on("error",gp.notify.onError({
            title: "style"
        }))
        .pipe(gp.csso())
        .pipe(gp.sourcemaps.write())
        .pipe(gulp.dest('build/static/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
 


gulp.task('watch', function(){
    gulp.watch('src/pug/**/*.pug',gulp.series('pug'))           
    gulp.watch('src/static/**/*.styl',gulp.series('stylus'));
})

gulp.task('default', gulp.series(
    gulp.parallel('pug','stylus'),    // запускаем паралельно/одновременно
    gulp.parallel('watch','serve')    // запускаем паралельно/одновременно
));
