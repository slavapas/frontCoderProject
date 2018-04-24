'use strict';

global.$={
    gulp:   require ('gulp'),
    gp:     require ('gulp-load-plugins')(), 
    bs:     require('browser-sync').create(),
	
	path:{
		tasks: require('./gulp/config/tasks.js')
}

}

$.path.tasks.forEach(function(taskPath){
	require(taskPath)();
});



$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug','stylus','scripts:lib','scripts','img'),    // запускаем паралельно/одновременно
    $.gulp.parallel('watch','serve')    // запускаем паралельно/одновременно
));
