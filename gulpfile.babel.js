import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cleanCss from 'gulp-clean-css';
import del from 'del';
import browserSync from 'browser-sync';
import webpack from 'webpack-stream';
import named from 'vinyl-named';
import yargs from 'yargs';
import gulpif from 'gulp-if';
import uglify from 'uglifyjs-webpack-plugin';
import imagemin from 'imagemin';

const PRODUCTION = yargs.argv.prod;

export const clean = () => del(['dist']);

export function styles() {
  return gulp.src(['./src/sass/style.scss', './src/sass/style-editor.scss'])
    .pipe( gulpif(!PRODUCTION, sourcemaps.init()) )
    .pipe(sass().on('error', sass.logError))
    .pipe( gulpif(PRODUCTION, postcss([ autoprefixer ])) )
    .pipe(gulpif(PRODUCTION, cleanCss({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    })))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest('./dist/css'))
    .pipe(server.stream());
}

export function scripts() {
  return gulp.src(['./src/js/bundle.js'])
    .pipe(named())
    .pipe(webpack({
      module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: []
              }
            }
          }
        ]
      },
      optimization: { 
        minimizer: [
          new uglify()
        ]
      },
      mode: PRODUCTION ? 'production' : 'development',
      output: {
        filename: '[name].js'
      },
      externals: {
        jquery: 'jQuery'
      }
    }))
    .pipe(gulp.dest('./dist/js'));
}

var server = browserSync.create();

export const serve = done => {
  server.init({
    proxy: 'http://localhost:10023'
  });
  done();
}

export function images() {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./images'))
}

export const reload = done => {
  server.reload();
  done();
}

export const watchForChanges = () => {
  gulp.watch('./src/sass/**/*.scss', styles);
  gulp.watch('./src/js/**/*.js', gulp.series(scripts, reload));
  gulp.watch('**/*.php', reload);
}

export const dev = gulp.series(clean, gulp.parallel(styles, scripts), serve, watchForChanges);
const build = gulp.series(clean, gulp.parallel( styles, scripts ));

export default build;