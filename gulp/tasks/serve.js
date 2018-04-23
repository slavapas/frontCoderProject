module.exports = function(){
// Static server
    $.gulp.task('serve', function() { // переименуем browser-sync в serve
        $.bs.init({
            server: {
                baseDir: "./build"  // здесь добавляем откуда он должен взять файлы        
                }
            });
    // browserSync.watch('build', browserSync.reload)  // добовляем эту строку сцелью чтобы browserSync отслеживал папку build и когда там будут изменения он перезагружал браузер
    });
}