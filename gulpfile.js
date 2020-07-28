let gulp = require('gulp'),
  fileinclude = require('gulp-file-include'),
  minCSS = require('gulp-clean-css'),
  browserSync = require('browser-sync').create(),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  autopref = require('gulp-autoprefixer'),
  comb  = require('gulp-csscomb'),
  imagemin = require('gulp-imagemin'),
  minHTML = require('gulp-htmlclean'),
  uglify = require('gulp-uglify'),
  pipeline = require('readable-stream').pipeline;

//Puth
let fromScss = 'dev/scss/**/*.scss',
    styleScss = 'dev/scss/style.scss',
    toCSS = 'prod/styles/',
    toMinCSS = 'prod/styles/',
    fromHTML = 'dev/',
    fromJS = 'dev/js/*.js',
    toMinJS = 'prod/js/',
    toMinHTML = 'prod/';

gulp.task('html', function() {
  return gulp.src(fromHTML + "index.html")
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(rename('index.map.html'))
    .pipe(gulp.dest('prod/map_html'))
    .pipe(minHTML())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('prod/'))
    .pipe(gulp.src(fromHTML + "hotels.html"))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(rename('hotels.map.html'))
    .pipe(gulp.dest('prod/map_html'))
    .pipe(minHTML())
    .pipe(rename('hotels.html'))
    .pipe(gulp.dest('prod/'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function() {
  return gulp.src(styleScss)
    .pipe(sass())
    .pipe(autopref({
      overrideBrowserslist:  ['last 2 versions'],
      cascade: false
    })) 
    .pipe(comb('csscomb.json'))
    .pipe(rename('style.map.css'))
    .pipe(gulp.dest(toCSS))
    .pipe(minCSS())
    .pipe(rename('style.css'))
    .pipe(gulp.dest(toMinCSS))
    .pipe(browserSync.stream());
});

gulp.task('img', function() {
  return gulp.src('dev/img/*/*')
  .pipe(imagemin())
  .pipe(gulp.dest('prod/img'))
  .pipe(browserSync.stream());
});

gulp.task('compress', function () {
  return pipeline(
        gulp.src('dev/js/script.js'),
        rename('script.map.js'),
        gulp.dest(toMinJS),
        uglify(),
        rename('script.js'),
        gulp.dest(toMinJS),
        gulp.src(fromJS),
        uglify(),
        gulp.dest(toMinJS),
        browserSync.stream()
  );
});

gulp.task('serve', function() {

  browserSync.init({
    server: "prod/"
  });
      
  gulp.watch(fromScss, gulp.parallel('sass'));
  gulp.watch(fromHTML+"*/*.html", gulp.parallel('html'));
  gulp.watch(fromHTML+"*.html", gulp.parallel('html'));
  gulp.watch(fromJS, gulp.parallel('compress'));
});
  
gulp.task('default', gulp.series('serve'));