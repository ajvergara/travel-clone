const gulp         = require("gulp"),
      postcss      = require("gulp-postcss"),
      autoprefixer = require("autoprefixer"),
      simpleVars   = require("postcss-simple-vars"),
      cssImport    = require("postcss-import"),
      cssNested    = require("postcss-nested"),
      cssMixins    = require("postcss-mixins");

gulp.task("styles", function(){
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssMixins, simpleVars, autoprefixer, cssNested]))
    .on("error", function(errorInfo){
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles/"));
});
