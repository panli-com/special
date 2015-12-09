var gulp = require('gulp');

var day = '20151202';

// 引入组件
var sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserify = require('gulp-browserify'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    zip = require('gulp-zip');
    // port = process.env.port || 5000;


var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


// live reload
// gulp.task('connect',function(){
//     connect.server({
//         // root:'./',
//         port: port,
//         livereload: true,
//     })
// });


//编译Sass，Autoprefix及缩小化
gulp.task('sass', function() {
    return gulp.src('./'+ day +'/src/scss/main.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('./'+ day +'/build/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./'+ day +'/build'))
        .pipe(reload({stream: true}))
        .pipe(notify({ message: 'Styles  task complete' }));
});


gulp.task('edm', function() {
    return gulp.src('./'+ day +'/edm//edm.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('./'+ day +'/edm/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./'+ day +'/edm/'))
        .pipe(reload({stream: true}))
        .pipe(notify({ message: 'Styles  task complete' }));
});


gulp.task('onescss', function() {
    return gulp.src('./'+ day +'/images/edm/emd.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(rename('emd.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./'+ day +'/images/edm/'))
        .pipe(reload({stream: true}))
        .pipe(notify({ message: 'onescss  task complete' }));

});

gulp.task('home', function() {
    return gulp.src('./home/scss/main.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('./home/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./home/css/'))
        .pipe(reload({stream: true}))
        .pipe(notify({ message: 'home style  task complete' }));

});

gulp.task('html',function(){
    gulp.src('./'+ day +'/*.html')
        .pipe(reload({stream: true}))
});

gulp.task('homeHtml',function(){
    gulp.src('./*.html')
        .pipe(reload({stream: true}))
});

gulp.task('scripts',function(){
    return gulp.src('./'+ day +'/src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./'+ day +'/build/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./'+ day +'/build/js/'))
        .pipe(reload({stream: true}))
        .pipe(notify({ message: 'Scripts task complete' }));

});


//zip
gulp.task('zip', function () {
    return gulp.src(['./'+ day +'/main.min.css','./'+ day +'/host.html'])
        .pipe(zip('special'+ day +'.zip'))
        .pipe(gulp.dest(''+ day +''))
        .pipe(notify({ message: 'zip task complete' }));
});


gulp.task('frame', function () {
    // return gulp.src(['./'+ day +'/build/*/*','./'+ day +'/edm/*'])
    //     .pipe(zip('special'+ day +'.zip'))
    //     .pipe(gulp.dest(''+ day +''))
    //     .pipe(notify({ message: 'zip task complete' }));
    
    browserSync.init({
        server: './'+day+'/'
    });
    // 看守 edm.scss 档
    gulp.watch('./'+ day +'/edm/*.scss', ['edm']);
    // 看守.scss 档
    gulp.watch('./'+ day +'/src/scss/*.scss', ['sass']);
    gulp.watch('./home/scss/*.scss', ['home']);
    // 看守所有.js档
    gulp.watch('./'+ day +'/*.js', ['scripts']);
    gulp.watch('./'+ day +'/src/js/*.js', ['html','scripts']);

    // 看守所有.html
    gulp.watch('./'+ day +'/*.html').on('change', reload);
    gulp.watch('./*.html').on('change', reload);
    
});


// 静态服务器 + 监听 scss/html 文件
gulp.task('dev', ['sass'], function() {

    browserSync.init({
        server: './'+day+'/'
    });
    // 看守 edm.scss 档
    gulp.watch('./'+ day +'/edm/*.scss', ['edm']);
    // 看守.scss 档
    gulp.watch('./'+ day +'/src/scss/*.scss', ['sass']);
    gulp.watch('./home/scss/*.scss', ['home']);
    // 看守所有.js档
    gulp.watch('./'+ day +'/*.js', ['scripts']);
    gulp.watch('./'+ day +'/src/js/*.js', ['html','scripts']);

    // 看守所有.html
    gulp.watch('./'+ day +'/*.html').on('change', reload);;
    gulp.watch('./*.html').on('change', reload);;

});


/* 监听 文件变化  */

gulp.task('watch', function() {

    // 看守.scss 档
    gulp.watch('./'+ day +'/src/scss/*.scss', ['sass']);
    gulp.watch('./home/scss/*.scss', ['home']);
    // 看守所有.js档
    gulp.watch('./'+ day +'/*.js', ['scripts']);
    gulp.watch('./'+ day +'/src/js/*.js', ['html','scripts']);

    // 看守所有.html
    gulp.watch('./'+ day +'/*.html',['html','zip']);
    gulp.watch('./*.html',['homeHtml']);

});

gulp.task('serve',['connect','watch']);

gulp.task('default', ['dev']);
