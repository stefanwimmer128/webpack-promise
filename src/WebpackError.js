import Symbol from "core-js/library/es6/symbol";

const err = Symbol("WebpackError$err");
const stats = Symbol("WebpackError$stats");

export default class WebpackError extends Error
{
    constructor(err, stats)
    {
        super((() =>
        {
            if (err)
                return "WebpackRuntimeError";
            else if (stats.hasErrors() || stats.hasWarnings())
                return "WebpackCompilationError";
        })());
        
        this.name = "WebpackError";
        
        this.err = err;
        this.stats = stats;
    }
    
    err()
    {
        return this[err];
    }
    
    stats()
    {
        return this[stats];
    }
}
