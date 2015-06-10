'use strict';

var program = require('commander'),
    pkg = require('../package.json');

module.exports = {

    /**
     * Main entrypoint of the CLI. Parse and process arguments passed to
     * bin/hbslint.
     *
     * @param {Array} args process.argv
     */
    interpret: function(args) {
        program
            .version(pkg.version)
            .parse(args);

        console.log(program);
    }
};
