const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const csso = require('gulp-csso');
const { watch, series } = require('gulp');

exports.sass = function () {
    return src('scss/app.scss')
        .pipe(sass())
        .pipe(csso())
        .pipe(dest('wwwroot/dist/css/'));
}

exports.js = function () {
    return src('js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify('main.js'))
        .pipe(dest('wwwroot/dist/js/'));
}

exports.default = function () {
    watch(['js/**/*.js', 'scss/**/*.scss'], series(exports.sass, exports.js));
};