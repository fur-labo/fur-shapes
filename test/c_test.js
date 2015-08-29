/**
 * Test case for c.
 * Runs with nodeunit.
 */

var c = require('../lib/c.js'),
    mkdirp = require('mkdirp'),
    fs = require('fs');

var tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['C'] = function (test) {
    var svg = c(512, 256, '#38E');
    fs.writeFile(tmpDir + '/testing-c.svg', svg, function (err) {
        test.ifError(err);
        test.done();
    });
};

