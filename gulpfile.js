/*jshint esnext: false, globalstrict: true */
"use strict";

var gulp = require("gulp");
var babel = require("gulp-babel");


// Common settings
// ---------------

var common =
  { scriptsSource: "source/**/*.js"
  };


// `gulp build`
// ------------

gulp.task("build", ["scripts"]);


// `gulp scripts`
// --------------

gulp.task("scripts", ["scripts:es6", "scripts:es5"]);

gulp.task("scripts:es6", function () {
  return gulp.src(common.scriptsSource)
    .pipe(gulp.dest("dist.es6"))
    ;
  });

gulp.task("scripts:es5", function () {
  return gulp.src(common.scriptsSource)
    .pipe(babel())
    .pipe(gulp.dest("dist.es5"))
    ;
  });
