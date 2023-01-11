const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync");

const srcPath = "./src/scss/**/*.scss";
const distPath = "../dist/css";

const helloGulp = (done) => {
  console.log("Heelo!!");
  done();
};

const compileSass = () => {
  return gulp.src(srcPath).pipe(sass()).pipe(gulp.dest(distPath));
};

const watch = () => {
  gulp.watch("./src/scss/**/*.scss", gulp.series(compileSass, browserReload));
};

const browserInit = (done) => {
  browserSync.init({
    files: ["**/*"],
    // 静的サイト
    // server: {
    //   baseDir: "./",
    // },
    // 動的サイト
    proxy: "http://wordpressdevtemplate.local/",
    opne: true,
  });
  done();
};

const browserReload = (done) => {
  browserSync.reload();
  done();
};

exports.test = helloGulp;
exports.compileSass = compileSass;
exports.watch = watch;
exports.browserInit = browserInit;
exports.dev = gulp.parallel(browserInit, watch);
