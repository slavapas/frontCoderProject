module.exports = function () {
    //img task
    $.gulp.task('img:dev', function () {
        return $.gulp.src('src/static/img/*.{png,jpeg,jpg,gif}')
           .pipe($.gulp.dest('build/static/img'));
    });
    $.gulp.task('img:build', function () {
        return $.gulp.src('src/static/img/*.{png,jpeg,jpg,gif}')
            .pipe($.gp.tinypng('nXAQtGlbw_n_sUqEKdmxtTbPJfvqtwUF')) // the key you can get from site https://tinypng.com/dashboard/developers
            .pipe($.gulp.dest('build/static/img'));
    });

};