module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'))
        $.gulp.watch('src/static/**/*.styl', $.gulp.series('stylus'));
        $.gulp.watch('src/static/js/*.js', $.gulp.series('scripts'));
        $.gulp.watch('src/static/img/*', $.gulp.series('img:dev'));
        $.gulp.watch('src/static/img/svg/*.svg', $.gulp.series('svg'));
    });
}