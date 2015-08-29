/**
 * Test case for d.
 * Runs with nodeunit.
 */

var d = require('../lib/d.js'),
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

exports['D'] = function(test){
    var svg = d(512, 256, '#38E');
    fs.writeFile(tmpDir + '/testing-d.svg', svg, function (err) {
        test.ifError(err);
        test.done();
    });
};

