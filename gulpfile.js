var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    browserSync     = require('browser-sync').create(),
    autoprefixer    = require('gulp-autoprefixer');

// Compile Sass + refresh browser sync
gulp.task('styles', function() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'ie 10'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function() {

    browserSync.init({
        server: "./dist/"
    });

    gulp.watch("./src/styles/*.scss", ['styles']);
    gulp.watch("./dist/*.html").on('change', browserSync.reload);
});

// Watch task = updates SASS and refreshes Browser Sync
gulp.task('default', ['serve']);