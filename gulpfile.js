const gulp = require("gulp");

const helloGulp = (done) => {
  console.log("Heelo!!");
  done();
};

exports.test = helloGulp;
