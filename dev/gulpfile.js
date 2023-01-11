const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const helloGulp = (done) => {
  console.log("Heelo!!");
  done();
};

const compileSass = (done) => {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./dist/css"));
  done();
};

exports.test = helloGulp;
exports.compileSass = compileSass;
