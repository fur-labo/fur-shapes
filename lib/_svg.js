/**
 * SVG XML.
 * @function _svg
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {object} contents - SVG contents data
 * @returns {string} - SVG XML string.
 */

"use strict";

var stringcase = require('stringcase'),
    randomval = require('randomval'),
    js2xml = require('js2xmlparser');

/** @lends _svg */
function _svg(width, height, contents) {
    var data = {
        '@': {
            id: 'fur-shape-' + randomval.randomHash(),
            xmlns: 'http://www.w3.org/2000/svg',
            width: width,
            height: height,
            viewbox: [
                0, 0, width, height
            ].join(' ')
        },
        g: contents
    };
    return js2xml('svg', data, {
        useCDATA: true
    });
}

module.exports = _svg;