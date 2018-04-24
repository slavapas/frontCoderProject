module.exports = function(){
    //img task
    $.gulp.task('img', function(){
        return $.gulp.src('src/static/img/*.{png,jpeg,jpg,gif}')
            .pipe($.gp.tinypng('nXAQtGlbw_n_sUqEKdmxtTbPJfvqtwUF'))
            .pipe($.gulp.dest('build/static/img'));
    });
   };
