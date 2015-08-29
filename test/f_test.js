/**
 * Test case for f.
 * Runs with nodeunit.
 */

var f = require('../lib/f.js'),
    mkdirp = require('mkdirp'),
    fs = require('fs');

var tmpDir = __dirname + '/../tmp';
exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['F'] = function(test){
    var svg = f(512, 256, '#38E');
    fs.writeFile(tmpDir + '/testing-f.svg', svg, function (err) {
        test.ifError(err);
        test.done();
    });
};

