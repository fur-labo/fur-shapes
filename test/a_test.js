/**
 * Test case for a.
 * Runs with nodeunit.
 */

var a = require('../lib/a.js'),
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

exports['A'] = function (test) {
    var svg = a(512, 256, '#38E');
    fs.writeFile(tmpDir + '/testing-a.svg', svg, function (err) {
        test.ifError(err);
        test.done();
    });
};

