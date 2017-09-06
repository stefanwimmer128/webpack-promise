# weebpack-promise

Webpack as a Promise

## Usage

``` javascript
import webpack from "webpack-promise";

webpack({
    /* webpack config */
}, {
    /* other options, defaults */
    log: true, /* log results */
    rejectStats: true, /* If true stats object, if false a WebpackCompilationError will be rejected on error */
    stats: {
        /* options for stats.toString() */
        colors: true,
    },
});
```

## Gulp.js

As a promise this can be used with Gulp.js.

``` javascript
import gulp from "gulp";
import webpack from "webpack-promise";

gulp.task("webpack", () =>
    webpack({
        /* webpack config */
    }, {
        rejectStats: false, /* prevents gulp from throwing stats object as error */
    }),
);
```
