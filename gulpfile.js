var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cleanCss = require('gulp-clean-css');

var path = {

    src: {
        scss: './assets/src/scss/',
        js: './assets/src/js/'
    },

    public: {
        css: './assets/public/css/',
        mainJs: './assets/public/javascript/'
    },

    watch: {
        styles: './assets/src/scss/**/*.scss',
        scripts: './assets/src/javascript/**/*.js'
    },

    build: {
        mincss: './',
        minjs: './'
    }
}

gulp.task('compile-concat-minify-scss', function () {
    gulp.src([path.src.scss + 'main.scss'])
        .pipe(sass())
        .pipe(gulp.dest(path.public.css))
        .pipe(concat('main.css'))
        .pipe(cleanCss({}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(path.build.mincss))
});

gulp.task('concat-minify-js', function () {
    return gulp.src([path.src.js + '*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.public.mainJs))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(path.build.minjs))
});

gulp.task('watch', function () {
    gulp.watch(path.src.scss + '**/*.scss', ['compile-concat-minify-scss', 'concat-minify-js']);
})

gulp.task('default', ['compile-concat-minify-scss', 'concat-minify-js', 'watch']);