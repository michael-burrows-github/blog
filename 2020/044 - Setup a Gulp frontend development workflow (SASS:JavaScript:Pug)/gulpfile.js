const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const pug = require("gulp-pug");

function css() {
  return src("./src/css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./dist/assets/"));
}
exports.css = css;

function js() {
  return src("./src/js/*.js")
    .pipe(concat("script.js"))
    .pipe(dest("./dist/assets/"));
}
exports.js = js;

function html() {
  return src("./src/pug/views/*.pug")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest("./dist"));
}
exports.html = html;

exports.watch = function () {
  watch("./src/css/*.scss", css);
  watch("./src/pug/**/*.pug", html);
  watch("./src/js/*.js", js);
};
