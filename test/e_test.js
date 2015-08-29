/**
 * Test case for e.
 * Runs with nodeunit.
 */

var e = require('../lib/e.js'),
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

exports['E'] = function(test){
    var svg = e(512, 256, '#38E');
    fs.writeFile(tmpDir + '/testing-e.svg', svg, function (err) {
        test.ifError(err);
        test.done();
    });
};

