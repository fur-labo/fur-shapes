/**
 * Abstract fur shape.
 * @abstract
 * @constructor Shape
 */

"use strict";


var js2xml = require('js2xmlparser'),
    extend = require('extend'),
    argx = require('argx'),
    fs = require('fs'),
    randomval = require('randomval'),
    stringcase = require('stringcase');

/** @lends Shape */
function Shape(name, config) {
    var s = this;
    var args = argx(arguments);
    name = args.shift('string');
    config = args.shift('object');
    s.name = s.name || ['shape', randomval.randomHash()].join('-');
    s.config = extend(true, {}, s.config, config);
}

Shape.prototype = {
    name: null,
    config: {
        width: 128,
        height: 128
    },
    /**
     * Get svg data as json.
     * @returns {object}
     */
    svgJson: function () {
        var s = this,
            width = s.config.width,
            height = s.config.height,
            name = s.name;
        return {
            '@': {
                id: [stringcase.spinalcase(name), 'svg'].join('-'),
                xmlns: 'http://www.w3.org/2000/svg',
                width: width,
                height: height,
                viewbox: [
                    0, 0, width, height
                ].join(' ')
            }
        }
    },
    /**
     * Get svg xml string.
     * @returns {string} - XML Stirng.
     */
    svgXml: function () {
        var s = this,
            data = s.svgJson();
        return js2xml('svg', data, {
            useCDATA: true
        });
    }
};

module.exports = Shape;
