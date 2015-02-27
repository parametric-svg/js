/*jshint esnext: false, globalstrict: true */
"use strict";

var async = require("async");

var gulp = require("gulp");
var babel = require("gulp-babel");
var dox = require("gulp-dox");
var doxme = require("gulp-doxme");
var concat = require("gulp-concat");
var mustache = require("gulp-mustache");
var rename = require("gulp-rename");


// Common settings
// ---------------

var common =
  { scriptsSource: "source/**/*.js"
  };


// `gulp build`
// ------------

gulp.task("build", ["scripts", "readme"]);


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


// `gulp readme`
// -------------

gulp.task("readme", function readme (doneTask) {
  async.waterfall(
    [ function formatComments (done) {
      gulp.src(common.scriptsSource)
        .once("error", done)
        .pipe(concat("anything"))
        .pipe(dox())
        .pipe(doxme())
        .once("data", function (file) {done(null, file);})
        ;
      }

    , function renderReadme (doxme, done) {
      gulp.src("build/Readme.md.mustache")
        .once("error", done)
        .pipe(mustache(
          { api: doxme.contents.toString()
          }))
        .pipe(rename("Readme.md"))
        .pipe(gulp.dest("."))
        .once("data", function () {done();})
        ;
      }
    ]

    , doneTask
    );
  });
