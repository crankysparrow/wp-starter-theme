import gulp from 'gulp';
import sass from 'gulp-sass';
import del from 'del';
import browserSync from 'browser-sync';
import webpack from 'webpack-stream';
import named from 'vinyl-named';

export const clean = () => del(['dist']);

export function styles() {
  return gulp.src(['./src/sass/style.scss', './src/sass/style-editor.scss'])
    .pipe(sass().on('error', sass.logError))
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
      mode: 'development',
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
    proxy: 'http://wpstarter.loc'
  });
  done();
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