const webp = require("gulp-webp");
const { src, dest } = require("gulp");

function images() {
  return src(["src/img/src/**/*.*", "!src/img/**/*.svg"])
    .pipe(src("src/img/src/**/*.*"))
    .pipe(webp())

    .pipe(dest("src/img/dest"));
}

exports.images = images;
