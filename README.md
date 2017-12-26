# webpack-promise

Webpack as a Promise

## Usage

``` javascript
import webpack from "webpack-promise";

webpack({
    /* webpack config */
}, {
    /* other options, defaults */
    log: true, /* log results */
    stats: {
        /* options for stats.toString() */
        colors: true,
    },
});
```

## Error Handling

``` javascript
webpack(/* see usage */).catch(function (err)
{
    if (err.err())
        /* runtime error */
    else if (err.stats().hasErrors())
        /* compilation error */
    else if (err.stats().hasWarnings())
        /* compilation warning */
    /* see webpack api for details */
});
```
