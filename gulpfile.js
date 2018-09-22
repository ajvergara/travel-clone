const gulp         = require("gulp"),
      watch        = require("gulp-watch"),
      postcss      = require("gulp-postcss"),
      autoprefixer = require("autoprefixer"),
      simpleVars   = require("postcss-simple-vars"),
      cssImport    = require("postcss-import"),
      cssNested    = require("postcss-nested"),
      browserSync  = require("browser-sync").create();

gulp.task("styles", function(){
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, simpleVars, autoprefixer, cssNested]))
    .on("error", function(errorInfo){
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles/"));
});

gulp.task("watch", function(){
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  watch("./app/*.html", function(){
    browserSync.reload();
  });

  watch("./app/assets/styles/**/*.css", function(){
    gulp.start("cssInject");
  });
});

gulp.task("cssInject", ["styles"], function(){
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(browserSync.stream());
});
