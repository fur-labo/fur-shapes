/**
 * Test case for b.
 * Runs with nodeunit.
 */

var b = require('../lib/b.js'),
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

exports['B'] = function (test) {
    var svg = b(512, 256, '#38E');
    fs.writeFile(tmpDir + '/testing-b.svg', svg, function (err) {
        test.ifError(err);
        test.done();
    });
};

