import del from "del";
import babel from "gulp-babel";
import gulp from "gulp";

gulp.task("build", () =>
    gulp.src("src/*.js")
        .pipe(babel())
        .pipe(gulp.dest("js/")),
);

gulp.task("clean", () =>
    del([
        "js/",
    ]),
);

gulp.task("default", gulp.series("clean", "build"));
