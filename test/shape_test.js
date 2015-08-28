/**
 * Test case for shape.
 * Runs with nodeunit.
 */

var Shape = require('../lib/shape.js'),
    mkdirp = require('mkdirp')
    ;

var tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Shape as json'] = function (test) {
    var shape = new Shape({
        width: 256,
        height: 256
    });
    test.ok(shape);
    var json = shape.svgJson();
    test.ok(json['@']['id']);
    test.done();
};

exports['Shape as xml'] = function (test) {
    var shape = new Shape({
        width: 256,
        height: 256
    });
    test.ok(shape);
    var xml = shape.svgXml();
    test.ok(xml);
    test.done();
};

