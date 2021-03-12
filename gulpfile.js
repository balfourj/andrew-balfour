/*!
 * gulp
 *
 * To install dependencies listed in package.json:
 * 1. cd to the directory containing the package.json
 * 2. type: npm install
 *
 * Changelog
 * 20170217 - (Andrew Pettican) Fixed browserSync. Browsers will reload on any CSS/JS change, or a HTML change within public_html
 * 20180702 - (Andrew Pettican) Updated for Bootstrap 4.1.1+
 * 20190220 - (Andrew Pettican) Updated for Gulp 4.0 and Bootstrap 4.3.1+
 */

// Include gulp and plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleancss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    stripDebug = require('gulp-strip-debug'),
    browserSync = require('browser-sync').create();

// Project directories
var config = {
    bootstrapDir: './node_modules/bootstrap',
    jQueryDir: './node_modules/jquery',
    popperjsDir: './node_modules/popper.js',
    publicDir: './public_html',
    projectScssDir: './src/scss',
    projectJsDir: './src/js',
    nodeModulesDir: './node_modules'
};

// Lint Task
gulp.task('lint', function() {
    "use strict";
    console.log('Gulp: Linting');
    return gulp.src(config.projectJsDir + '/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile our scss
gulp.task('scss', function() {
    "use strict";
    console.log('Gulp: Compiling SCSS');
    return gulp.src(config.projectScssDir + '/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            precision: 6, // Increase if you genuinely need more precision, 6 decimal places is standard bootstrap
            style: 'compressed',
            includePaths: [config.bootstrapDir + '/scss']
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            // From browserslist defined here: https://github.com/twbs/bootstrap/blob/v4.3.1/.browserslistrc
            browsers: [
                ">= 1%",
                "last 1 major version",
                "not dead",
                "Chrome >= 45",
                "Firefox >= 38",
                "Edge >= 12",
                "Explorer >= 10",
                "iOS >= 9",
                "Safari >= 9",
                "Android >= 4.4",
                "Opera >= 30"
            ]
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleancss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.publicDir + '/assets/css'))
        .pipe(browserSync.stream());
});

// Concatenate & Minify JS
gulp.task('js', function() {
    "use strict";
    console.log('Gulp: Compiling JS');
    return gulp.src([
        config.jQueryDir + '/dist/jquery.min.js',
        //config.popperjsDir + '/dist/umd/popper.min.js', // Add the UMD distributable of popper.js if using any of these bootstrap components: dropdown, popover, tooltip - https://github.com/FezVrasta/popper.js#dist-targets
        //config.bootstrapDir + '/js/dist/util.js', // All bootstrap components depend on util.js
        //config.bootstrapDir + '/js/dist/example-bootstrap-component.js', // Add bootstrap components here if desired
        config.projectJsDir + '/vendor/*.js',
        config.projectJsDir + '/main.js', // Force main.js to be the first script after vendor code
        config.projectJsDir + '/*.js',
        config.nodeModulesDir + '/swiper/dist/js/swiper.min.js',
        config.nodeModulesDir + '/jquery-match-height/dist/jquery.matchHeight-min.js'
    ])
        .pipe(sourcemaps.init({loadMaps: true})) // Strips any existing sourcemaps
        .pipe(concat('main.js'))
        //.pipe(stripDebug()) // Comment this out when debugging
        .pipe(gulp.dest(config.publicDir + '/assets/js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        //.pipe(sourcemaps.write('.')) // Optionally, we can write our own sourcemap
        .pipe(gulp.dest(config.publicDir + '/assets/js'))
        .pipe(browserSync.stream());
});

// Watch Files For Changes
// Updated for Gulp v4, thanks: https://stackoverflow.com/a/53818928
gulp.task('watch', function () {
    "use strict";

    // Initialise browserSync
    browserSync.init({
        server: {
            baseDir: config.publicDir
        }
    });

    // Watch for changes
    gulp.watch(config.projectJsDir + '/**/*.js', gulp.series('lint', 'js'));
    gulp.watch(config.projectScssDir + '/**/*.scss', gulp.series('scss'));
    gulp.watch(config.publicDir + '/*.html').on('change', browserSync.reload);
});

// Default Task
gulp.task('default', gulp.series('lint', 'scss', 'js', 'watch'));
