const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('compile', function(){
    return gulp.src('./sass/style.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError()))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
})
