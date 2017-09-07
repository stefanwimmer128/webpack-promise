import webpack from "webpack";

import Object$assign from "core-js/library/fn/object/assign";
import Promise from "core-js/library/es6/promise";

import WebpackError from "./WebpackError";

export default function (config, _opts)
{
    const opts = Object$assign({
        log: true,
        stats: {},
    }, typeof _opts === "object" && _opts !== null ? _opts : {});
    opts.stats = Object$assign({
        colors: true,
    }, typeof opts.stats === "object" && opts.stats !== null ? opts.stats : {});
    
    return new Promise((resolve, reject) =>
        webpack(config).run((err, stats) =>
        {
            if (opts.log && stats)
                console.log(stats.toString(opts.stats));
            
            if (err || stats.hasErrors() || stats.hasWarnings())
                reject(new WebpackError(err, stats));
            else
                resolve(stats);
        }),
    );
}
