const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
 
gulp.task('sass', () => {
    return gulp
        .src('scss/selectize.bootstrap4.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('examples-selectize', () => {
    return gulp
        .src('node_modules/selectize/dist/js/standalone/selectize.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('examples-html', () => {
    return gulp
        .src('template/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('sass', 'examples-selectize', 'examples-html'), () => {
    gulp.watch(['scss/*.scss'], ['sass']);
    gulp.watch(['template/*.pug'], ['examples-html']);
});
