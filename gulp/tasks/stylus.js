module.exports = function(){
//stylus task
    $.gulp.task('stylus', function(){
        return $.gulp.src('src/static/stylus/*.styl')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.stylus({}))
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 versions']
            }))
            .on("error",$.gp.notify.onError({
                title: "style"
            }))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}