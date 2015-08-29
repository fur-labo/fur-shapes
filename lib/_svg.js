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
    writexml = require('writexml');

/** @lends _svg */
function _svg(width, height, contents) {
    return writexml.string('svg', {
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
    });
}

module.exports = _svg;