#!/usr/bin/env node

var veevenflow = require('../lib/veevenflow'),
    args = [].slice.call(process.argv, 2);

var exitCode = 0,
    isDebug = args.indexOf('--debug') !== -1;

veevenflow.cli(args).then(function() {
    process.exit(exitCode);
}).catch(function(err) {
    exitCode = 1;
    if(!isDebug) {
        console.error(err);
    } else {
        throw new Error(err);
    }
});

process.on('exit', function() {
    process.exit(exitCode);
});
