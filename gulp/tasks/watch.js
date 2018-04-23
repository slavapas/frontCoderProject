module.exports = function(){
    $.gulp.task('watch', function(){
        $.gulp.watch('src/pug/**/*.pug',$.gulp.series('pug'))           
        $.gulp.watch('src/static/**/*.styl',$.gulp.series('stylus'));
    });
}